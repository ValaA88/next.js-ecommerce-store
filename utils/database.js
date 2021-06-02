export const products = [
  {
    id: '1',
    name: 'Euro Fighter',
    scale: '1/72',
    quantity: 4,
    image: '../Model-Background.jpeg',
  },
  {
    id: '2',
    name: 'A-10 USAF',
    scale: '1/72',
    quantity: 3,
    image: '../Model-Background.jpeg',
  },
  {
    id: '3',
    name: 'Tornado SAAF',
    scale: '1/72',
    quantity: 5,
    image: '../Model-Background.jpeg',
  },
  {
    id: '4',
    name: 'Mig-29 Russian Airforce',
    scale: '1/72',
    quantity: 5,
    image: '../Model-Background.jpeg',
  },
];

export function getModelById(id) {
  console.log(id, 'i am inside of database');
  console.log('salam', products);
  // create a function that to find one model by id and return this object.
  const model = products.find((product) => product.id === id);
  console.log('jjkjbkj', model);
  return model;
}
