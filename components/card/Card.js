import styles from "./Card.module.scss";

const Card = (props) => (
  <div className={styles.Card}>
    <div className={styles.Front}>
      <img src="/juice.jpg" alt="Avatar" className={styles.CardImage} />
      <div className={styles.Container}>
        <h3>
          Vitamin Juice <span className={styles.Price}>$24.99</span>
        </h3>
        <p>
          Need a jump on your vitamins while drinking? Tired of popping the
          pills? Drink our vitamin enhanced juice, available in several
          flavours.
        </p>
      </div>
    </div>
  </div>
);

export default Card;
