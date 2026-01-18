import React from "react";
import { useNotifications } from "../context/NotificationContext";

const NotificationsPanel: React.FC = () => {
  const { notifications } = useNotifications();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 12,
        marginBottom: 20,
        background: "#f9f9f9",
      }}
    >
      <h3>🔔 Notifications</h3>

      {notifications.length === 0 && <p>No notifications yet.</p>}

      <ul>
        {notifications.map((n) => (
          <li key={n.id}>
            <strong>{n.type}</strong>: {n.message}
            <br />
            <small>
              {new Date(n.timestamp).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
