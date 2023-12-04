// Inside Notifications.js or related component
<NotificationItem
  key={notification.id}
  type={notification.id === 1 ? 'urgent' : notification.type}
  value={notification.value}
  html={{ __html: notification.html }}
/>
