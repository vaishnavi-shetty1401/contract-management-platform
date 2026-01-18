import React, { createContext, useContext, useEffect, useState } from "react";

export interface Notification {
  id: string;
  type: "EMAIL" | "SLACK";
  message: string;
  timestamp: string;
}

interface NotificationContextType {
  notifications: Notification[];
  pushNotification: (n: Omit<Notification, "id" | "timestamp">) => void;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const stored = localStorage.getItem("notifications");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [notifications]);

  const pushNotification = (
    n: Omit<Notification, "id" | "timestamp">
  ) => {
    const notification: Notification = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ...n,
    };

    // 🔥 Simulation (console = email/slack server)
    console.log(`[${n.type}] ${n.message}`);

    setNotifications((prev) => [notification, ...prev]);
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, pushNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const ctx = useContext(NotificationContext);
  if (!ctx)
    throw new Error("useNotifications must be used inside NotificationProvider");
  return ctx;
};
