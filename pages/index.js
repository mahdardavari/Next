import Card from "../components/card/Card";
import styles from "./Index.module.scss";
import Head from 'next/head';
import data from '../data/data.json';
import Image from "next/image";

export const getStaticProps = async () => {
  return {
    props: { cardsList: data }
  };
  
}

const Home = ({ cardsList, login }) => {
  return (
    <div>
      <Head>
      </Head>
      <header className={styles.AppHeader}>
        <Image src="/public/logo.png" className={styles.StaticLogo} />
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