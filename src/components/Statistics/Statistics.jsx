import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statisticsList}>
      <li className={css.statisticlistItem}>Good: {good}</li>
      <li className={css.statisticlistItem}>Neutral: {neutral}</li>
      <li className={css.statisticlistItem}>Bad: {bad}</li>
      <li className={css.statisticlistItem}>Total: {total}</li>
      <li className={css.statisticlistItem}>
        Positive Feedback: {positivePercentage} %
      </li>
    </ul>
  );
};
