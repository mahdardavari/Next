import Card from "../components/card/Card";
import styles from "./Index.module.scss";
import Head from 'next/head';
import data from '../data/data.json';

export const getStaticProps = async () => {
  return {
    props: { cardsList: data }
  };
  
}

const Home = ({ cardsList, login }) => {
  return (
    <div>
      <header className={styles.AppHeader}>
        <img
          src="/logo.png"
          alt="me"
          className={styles.StaticLogo}
        />
      </header>
      <div className={styles.Grid}>
        {cardsList.map((card) => (
          <Card key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default Home