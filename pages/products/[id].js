import Header from '../../components/Header';
import styles from './model.module.css';

// this is front-end code
export default function ModelName({ model }) {
  console.log('this is front-end', model);
  return (
    <div>
      <Header />

      <img className={styles.image} src={model.image} />
      <div>This is a Name {model.id} component</div>
      <div>This is a id {model.name} component</div>
    </div>
  );
}
// this is back-end code
export async function getServerSideProps(context) {
  const { getModelById } = await import('../../utils/database');
  // this is server side code.
  const model = getModelById(context.query.id);
  console.log(model);
  // console.log(context.query);
  return { props: { model } };
}
