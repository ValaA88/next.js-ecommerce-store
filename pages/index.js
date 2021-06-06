import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div>
        <img className={styles.homePageImage} src="./image-homepage2.jpg" />
        <p className={styles.homePageText}>
          The main purpose of a render is to help viewers visualize what the
          final result of the project will look like. Whether it is for
          presentation or construction purposes, architects need to translate
          their visions in a way that helps people who were not involved in the
          ideation process understand the space and the experiences that come
          with it. However, not all architects have the proper skills or the
          time to create such hyper-realistic environments, but with the
          exceptional quality of visuals being produced nowadays and the rising
          demand, it has become somewhat mandatory for every project to be
          presented as a realistic 3D render. So if you are one of those
          architects who don't have the skills nor time, here are ways you can
          present your project as an immersive visual experience that translates
          its identity without resorting to 3D software.{' '}
        </p>
        <img className={styles.homePageImageSub} src="./image-bell2.jpg" />
        <div className={styles.textBlock}>
          <h4>Aircraft Models</h4>
          <p className={styles.textBlockSub}>
            Make your own style Aircraft Models
          </p>
          <p className={styles.textBlockSecondSub}>
            Great selection of Aircraft model kits to build, We have Airfix,
            Tamiya, Revell and more.
          </p>
        </div>
      </div>
    </div>
  );
}
