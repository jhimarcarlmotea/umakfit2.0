/**
 * Keep section-wide notifications (no studentEmail) and per-student notifications.
 */
export function filterNotificationsForStudent(notifications, studentEmail) {
    if (!Array.isArray(notifications)) return [];
    if (!studentEmail) return notifications;
    const email = studentEmail.toLowerCase();
    return notifications.filter(n => {
        if (!n.studentEmail) return true;
        return String(n.studentEmail).toLowerCase() === email;
    });
}
