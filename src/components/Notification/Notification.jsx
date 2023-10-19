import css from './Notification.module.css';

export const Notification = ({ message }) => (
  <p className={css.notificationDescr}>{message}</p>
);
