import classes from './QuoteCard.module.css';

const QuoteCard = (props) => {
  if (!props.text && !props.author) {
    return null;
  }
  return (
    <div
      component="div"
      className={classes['quote-card']}
      key={Math.random()}
    >
      <p className={classes['quote-text']}>
        <span className={classes['quote-sign']}>&ldquo;</span>
        {props.text}
        <span className={classes['quote-sign']}>&rdquo;</span>
      </p>
      {
        <p className={classes['quote-author']}>
          {props.author ? ' - ' + props.author : '- Unknown'}
        </p>
      }
    </div>
  );
};

export default QuoteCard;
