import Card from "./Card";
import styles from "./Index.module.scss";
import Head from 'next/head';
import data from '../data/data.json';
export async function getInitialProps() {
  return { cards: data }
}
const Home = () => {
  // static async getInitialProps(){
  // return {cards:data}
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
          //TODO 
          this.props.cards.map((card) => (
            <Card key={card.id} />
          ))
        }
      </div>
    </div>
  )
}

export default Home