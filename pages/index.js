import Card from "./Card";
import styles from "./Index.module.scss";
import Head from 'next/head';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { initStore, initialCards, addItem } from '../store';
import withRedux from 'next-redux-wrapper';

const useCards = () => {
  const card = useSelector((state) => state.id);
  const dispath = useDispatch();
  const cardsList = () =>
    dispath({ type: 'INITIALCARDS', })

  return { card, cardsList }
}
const Home = () => {
  const { card, cardsList } = useCards();
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