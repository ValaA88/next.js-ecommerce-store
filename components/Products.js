import PassProducts from '../pages/products';
import styles from './product.module.css';

export default function Products({ myProducts }) {
  return (
    <div>
      {myProducts.map((product) => {
        const myLink = `products/${product.id}`;
        return (
          <a className={styles.section} href={myLink}>
            <div>
              <img className={styles.productsImage} src={product.image}></img>
            </div>
            <div className={styles.productDetails}>
              <div className={styles.productDetail}>{product.name}</div>
              <div className={styles.productDetail}>{product.scale}</div>
              <div className={styles.productDetail}>{product.quantity}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
