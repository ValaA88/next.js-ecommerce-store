import PassProducts from '../pages/products';
import styles from './product.module.css';

export default function Products({ myProducts }) {
  return (
    <div>
      {myProducts.map((product) => {
        const productLink = `products/${product.id}`;
        return (
          <a className={styles.section} href={productLink}>
            <div>
              <img
                className={styles.productsImage}
                src={product.image[0]}
              ></img>
            </div>
            <div className={styles.productDetails}>
              <div className={styles.productDetail}>{product.name}</div>
              <div className={styles.productDetail}>{product.scale}</div>
              <div className={styles.productPrice}>Price: €{product.price}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
