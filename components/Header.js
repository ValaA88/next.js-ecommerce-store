import styles from './Header.module.css';

export default function Header(props) {
  // inja baayad cookie ro bekhuni va dar khatte 10 denushesh bedi
  // const cart = yejoori coodie bekhuni inja
  return (
    <header className={styles.header}>
      <a href="/">Home Page</a>
      <a href="/about">About</a>
      <a href="/products">Products</a>
      <div> {props.cart}</div>
    </header>
  );
}
