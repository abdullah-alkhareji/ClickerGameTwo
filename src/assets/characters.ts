export interface Characters {
  id: number;
  name: string;
  img: string;
  damage: number; // clicks per second
  timer: number; // in seconds
  ability: string;
  price: number;
  frequency: number;
}

const characters: Characters[] = [
  {
    id: 1,
    name: 'Captain Price',
    img: './assets/captain-price.png',

    damage: 10,
    frequency: 2,
    timer: 20,
    ability: 'Doubles your clicks',
    price: 200,
  },
  {
    id: 2,
    name: 'Lana Del Ray',
    img: './assets/Lana-Del-Rey.png',

    damage: 20,
    frequency: 3,
    timer: 33,
    ability: 'Enables god rays',
    price: 500,
  },
  {
    id: 3,
    name: 'Mohammed Hunaidi',
    img: './assets/laughing.png',

    damage: 40,
    frequency: 1,
    timer: 10,
    ability: 'Shows laughing gif',
    price: 1000,
  },
  {
    id: 4,
    name: 'Mishari',
    img: './assets/mishari.png',

    damage: 77,
    frequency: 0.7,
    timer: 10,
    ability: 'Gives you fruits',
    price: 2000,
  },
  {
    id: 5,
    name: '7moodi',
    img: './assets/7moodi.png',

    damage: 150,
    frequency: 0.5,
    timer: 10,
    ability: 'Gives you motivation',
    price: 5000,
  },
  {
    id: 6,
    name: 'Snowy',
    img: './assets/White_Persian_Cat-removebg-preview.png',

    damage: 200,
    frequency: 6,
    timer: 15,
    ability: 'Sleeps next to you',
    price: 6000,
  },
  {
    id: 7,
    name: 'Al6af',
    img: './assets/al6af.png',

    damage: 450,
    frequency: 0.3,
    timer: 10,
    ability: 'Disables click button',
    price: 10000,
  },
  {
    id: 8,
    name: 'Undertaker',
    img: './assets/undertaker.png',

    damage: 750,
    frequency: 1,
    timer: 10,
    ability: "Kills Mishari if they're available at the same time",
    price: 15000,
  },
  {
    id: 9,
    name: 'Captain Majed',
    img: './assets/tsubasa.png',

    damage: 1000,
    frequency: 0.5,
    timer: 10,
    ability: 'Does nothing for now…',
    price: 20000,
  },
];

export default characters;
