"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NotificationContext_1 = require("../context/NotificationContext");
const NotificationsPanel = () => {
    const { notifications } = (0, NotificationContext_1.useNotifications)();
    return (<div style={{
            border: "1px solid #ccc",
            padding: 12,
            marginBottom: 20,
            background: "#f9f9f9",
        }}>
      <h3>🔔 Notifications</h3>

      {notifications.length === 0 && <p>No notifications yet.</p>}

      <ul>
        {notifications.map((n) => (<li key={n.id}>
            <strong>{n.type}</strong>: {n.message}
            <br />
            <small>
              {new Date(n.timestamp).toLocaleString()}
            </small>
          </li>))}
      </ul>
    </div>);
};
exports.default = NotificationsPanel;
