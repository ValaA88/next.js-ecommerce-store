import Header from '../../components/Header';
import styles from './about.module.css';

export default function About() {
  return (
    <div>
      <Header />
      <div className={styles.aboutPage}>
        <img className={styles.backgroundImage} src="./image-workplace.jpg" />
        <div>
          <h1 className={styles.header}>
            far more than simply synonymous with plastic model kits
          </h1>
          <p className={styles.text}>
            For almost 60 years now Revell has stood for unique expertise in the
            development and making of true-to-the-original plastic model kits.
            Today, Revell is not only the market leader in Germany but also
            throughout Europe. Furthermore, in recent years the company has
            emerged as one of the leading suppliers of remote-controlled
            products on the toy market. Revell’s wealth of experience
            accumulated over decades has made the brand synonymous with a
            fascinating and multi-facetted world of modelling. The Revell
            product range is capable of fulfilling the dreams of each and every
            modeller. Whether young or old, professional or beginner – here
            everyone can pursue their passion and make dreams come true.
            Discover Revell and let our world of products inspire you!
          </p>
        </div>
      </div>
    </div>
  );
}
