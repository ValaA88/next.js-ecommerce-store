import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Cookies from 'js-cookie';
import Router from 'next/router';
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Header from '../../components/Header';
import { getCookieValue, setCookie } from '../../utils/cookies';
import styles from './model.module.css';

// this is front-end code
export default function ModelName({ model }) {
  console.log('this is front-end', model);

  const [quantity, setQuantity] = useState(0);

  const [count, setCount] = useState(0);
  const handleCart = (model) => {
    setCount(count + 1);
    // pass the count to the cookie here
  };

  return (
    <div>
      <Header cart={count} />
      <div className={styles.container}>
        <div className={styles.allSingleProducts}>
          <Carousel
            className={styles.image}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
          >
            {model.image.map((imageLink) => (
              <img src={imageLink} />
            ))}
          </Carousel>
          {/* <div>This is a Name {model.id} component</div> */}
          <div className={styles.productDetailsSingleProduct}>
            <div>{model.name} </div>
            <div>{model.scale} </div>
            <div>Price: €{model.price}</div>
            <div className={styles.buttonWrapper}>
              <h1>Amount:</h1>
              <input
                type="number"
                min="1"
                // value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              ></input>

              <button
                className={styles.button}
                onClick={
                  () => {
                    const perviousCookieValue = getCookieValue('cart') || [];
                    // if (
                    //   perviousCookieValue.filter(
                    //     (products) => products.id === model.id,
                    //   )
                    // ) {
                    //   // ???
                    // } else {
                    setCookie('cart', [
                      ...perviousCookieValue,
                      { id: model.id, qty: quantity },
                    ]);
                    Router.reload('./');
                  }
                  // setCookie('cart');
                }
              >
                Add to cart
              </button>
            </div>
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
