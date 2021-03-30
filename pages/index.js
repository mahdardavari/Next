import Card from "./Card";
import styles from "./Index.module.scss";
import Head from 'next/head';
import data from '../data/data.json';


export const getStaticProps = async () => {
  return {
    props: { cardsList: data }
  };

}
const Home = ({ cardsList }) => {

  return (
    <div>
      <Head>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>
      <header className={styles.AppHeader}>
        <img src="/static/logo.png" className={styles.StaticLogo} />
      </header>
      <div className={styles.Grid}>
        {
          cardsList.map((card) => (
            <Card key={card.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Home