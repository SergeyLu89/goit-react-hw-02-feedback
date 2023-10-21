import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <ul className={css.feedbackBtnList}>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                type="button"
                name={option}
                className={css.feedbackBtn}
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
