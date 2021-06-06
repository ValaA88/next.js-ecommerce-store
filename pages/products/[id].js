import React, { useState } from 'react';
import Header from '../../components/Header';
import styles from './model.module.css';

// this is front-end code
export default function ModelName({ model }) {
  console.log('this is front-end', model);

  const [count, setCount] = useState(0);
  return (
    <div>
      <Header cart={count} />
      <div className={styles.container}>
        <div className={styles.allSingleProducts}>
          <img className={styles.image} src={model.image} />
          {/* <div>This is a Name {model.id} component</div> */}
          <div className={styles.productDetailsSingleProduct}>
            <div>{model.name} </div>
            <div>{model.scale} </div>
            <div>{model.price}</div>
            <button onClick={() => setCount(count + 1)}>Add to cart</button>
          </div>
        </div>
        <div className={styles.overview}>{model.overview}</div>
        <div className={styles.description}>{model.description}</div>
      </div>
    </div>
  );
}
// this is back-end code -- You are in server side
export async function getServerSideProps(context) {
  const { getModelById } = await import('../../utils/database');
  // this is server side code.

  const model = getModelById(context.query.id);
  console.log(model);
  // console.log(context.query);
  return { props: { model } };
}
