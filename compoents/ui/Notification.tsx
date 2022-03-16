import { FC } from "react";
import { createPortal } from "react-dom";
import styles from "./Notification.module.scss";

interface IProp {
  title: string;
  message: string;
  status: string;
}
const Notification: FC<IProp> = ({ title, message, status }): JSX.Element => {
  let statusstyles = "";

  if (status === "pending") {
    statusstyles = styles.pending;
  }
  if (status === "success") {
    statusstyles = styles.success;
  }

  if (status === "error") {
    statusstyles = styles.error;
  }

  const cssstyles = `${styles.notification} ${statusstyles}`;
  const notificationElement: HTMLDivElement = document.querySelector(
    "#notifications"
  )!;
  const portal = (
    <div className={cssstyles}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
  return createPortal(portal, notificationElement);
};

export default Notification;
