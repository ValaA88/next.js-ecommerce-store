import Header from '../components/Header';
import Products from '../components/Products';

export default function PassProducts() {
  const products = [
    {
      name: 'Euro Fighter',
      scale: '1/72',
      quantity: 4,
      image: './Model-Backgound.jpeg',
    },
    {
      name: 'A-10 USAF',
      scale: '1/72',
      quantity: 3,
      image: './Model-Backgound.jpeg',
    },
    {
      name: 'Tornado SAAF',
      scale: '1/72',
      quantity: 5,
      image: './Model-Backgound.jpeg',
    },
    {
      name: 'Mig-29 Russian Airforce',
      scale: '1/72',
      quantity: 5,
      image: './Model-Backgound.jpeg',
    },
  ];
  return (
    <div>
      <Header />
      <Products myProducts={products} />
    </div>
  );
}
