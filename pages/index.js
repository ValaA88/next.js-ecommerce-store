import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <img className={styles.homePageImage} src="./Model-Background.jpeg" />
        <div className={styles.textBlock}>
          <h4>Aircrafts</h4>
          <p>Make your own style</p>
        </div>
      </div>
    </div>
  );
}
