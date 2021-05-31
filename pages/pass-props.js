import Header from '../components/Header';

export default function PassProps() {
  return (
    <div>
      <Header
        color={'blue'}
        Hello={'Hello'}
        myArray={['karl', 'Vala', 'Jose']}
        myPet={{ name: 'dog', color: 'Black' }}
      />
      <Header
        color={'yellow'}
        Hello={'Hi'}
        myArray={['anja', 'jakob', 'ines']}
        myPet={{ name: 'cat', color: 'White' }}
      />
      we are here
    </div>
  );
}
