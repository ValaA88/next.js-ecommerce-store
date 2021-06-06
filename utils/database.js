export const products = [
  {
    id: '1',
    name: 'Eurofighter Typhoon (single seater)',
    scale: 'Scale: 1:72',
    // quantity: 39 Euro,
    image: '../image-eurofighter1.jpg',
    overview:
      'Overview: Skill Level: 4 Scale: 1/72 Length: 23cm  Height: 7.63cm Wingspan: 17.5cm Parts: 162',
    price: 'Price: € 39',
    description:
      'Description: Supersonic Soviet stopper Part of the famous "Century Series" of fifties-era US Fighter, the Delta Dagger was a dedicated interceptor. It was designed and built for the sole purpose of stopping Soviet bombers from reaching the United States. A delta-wing design, a first for jet fighters, helped it achieve the supersonic speeds needed to catch the latest generation of bombers. They might have been great at that role, but they fortunately never had to prove it. Kit features Case X-wing design, seated pilot figure, external wing tanks, internal weapons, and six Falcon missiles.',
  },
  {
    id: '2',
    name: 'A-10 Warthog USAF',
    scale: 'Scale: 1:72',
    // quantity: 49 Euro,
    image: '../image-a10.jpg',
    overview:
      'Overview: Skill Level: 4 Scale: 1/72 Length: 20cm  Height: 6.5cm Wingspan: 15.5cm Parts: 220',
    price: 'Price: € 45',
    description:
      'Description: Supersonic Soviet stopper Part of the famous "Century Series" of fifties-era US Fighter, the Delta Dagger was a dedicated interceptor. It was designed and built for the sole purpose of stopping Soviet bombers from reaching the United States. A delta-wing design, a first for jet fighters, helped it achieve the supersonic speeds needed to catch the latest generation of bombers. They might have been great at that role, but they fortunately never had to prove it. Kit features Case X-wing design, seated pilot figure, external wing tanks, internal weapons, and six Falcon missiles.',
  },
  {
    id: '3',
    name: 'Tornado GR. Mk. 1 SAAF',
    scale: 'Scale: 1:72',
    // quantity: 55 Euro,
    image: '../image-tornado.jpg',
    overview:
      'Overview: Skill Level: 4 Scale: 1/72 Length: 27cm  Height: 8.1cm Wingspan: 20.5cm Parts: 197',
    price: 'Price: € 59',
    description:
      'Description: Supersonic Soviet stopper Part of the famous "Century Series" of fifties-era US Fighter, the Delta Dagger was a dedicated interceptor. It was designed and built for the sole purpose of stopping Soviet bombers from reaching the United States. A delta-wing design, a first for jet fighters, helped it achieve the supersonic speeds needed to catch the latest generation of bombers. They might have been great at that role, but they fortunately never had to prove it. Kit features Case X-wing design, seated pilot figure, external wing tanks, internal weapons, and six Falcon missiles.',
  },
  {
    id: '4',
    name: 'Trumpeter - Russian MIG-29UB Fulcrum',
    scale: 'Scale: 1:72',
    // quantity: 28 Euro,
    image: '../image-mig291.jpg',
    overview:
      'Overview: Skill Level: 4 Scale: 1/72 Length: 32cm  Height: 7.5cm Wingspan: 16cm Parts: 182',
    price: 'Price: € 29',
    description:
      'Description: Supersonic Soviet stopper Part of the famous "Century Series" of fifties-era US Fighter, the Delta Dagger was a dedicated interceptor. It was designed and built for the sole purpose of stopping Soviet bombers from reaching the United States. A delta-wing design, a first for jet fighters, helped it achieve the supersonic speeds needed to catch the latest generation of bombers. They might have been great at that role, but they fortunately never had to prove it. Kit features Case X-wing design, seated pilot figure, external wing tanks, internal weapons, and six Falcon missiles.',
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
