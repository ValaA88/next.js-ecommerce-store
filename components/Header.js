import styles from './Header.module.css';

export default function Header(props) {
  return (
    <header className={styles.header}>
      <a href="/">Home Page</a>
      <a href="/about">About</a>
      <a href="/products">Products</a>
    </header>
    // <div style={{ backgroundColor: props.color }}>
    //   {myHeading}
    //   color: {props.color}
    //   <br /> greeting: {props.Hello} <br />
    //   Array: {props.myArray[1]}
    //   <br />
    //   myPet: {props.myPet.name} is {props.myPet.color}
    // </div>
  );
}
