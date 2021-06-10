import { getCookieValue } from '../utils/cookies';
import styles from './Header.module.css';

export default function Header(props) {
  // inja baayad cookie ro bekhuni va dar khatte 11 nenushesh bedi
  // const cart = yejoori coodie bekhuni inja
  const cartValue = getCookieValue('cart');
  console.log('salam', cartValue);

  let number = 0;
  if (cartValue) {
    number = cartValue.length;
  }

  return (
    <header className={styles.header}>
      <a href="/">Home Page</a>
      <a href="/about">About</a>
      <a href="/products">Products</a>
      <div className={styles.cart}>
        <div> {number}</div>
        <img className={styles.icon} src="../shopping-cart.png" />
      </div>
    </header>
  );
}
