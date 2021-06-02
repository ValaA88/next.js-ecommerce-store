import Header from '../../components/Header';
import Products from '../../components/Products';
// this is a task for future: this import have to be in server side props.
import { products } from '../../utils/database';

export default function PassProducts() {
  return (
    <div>
      <Header />
      <Products myProducts={products} />
    </div>
  );
}
