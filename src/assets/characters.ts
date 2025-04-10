export interface Characters {
  id: number;
  name: string;
  img: string;
  damage: number; // clicks per second
  timer: number; // in seconds
  ability: string;
}

const characters: Characters[] = [
  {
    id: 1,
    name: 'Captain Price',
    img: 'captain-price.png',
    damage: 10,
    timer: 20,
    ability: 'Doubles your clicks',
  },
  {
    id: 2,
    name: 'Lana Del Ray',
    img: 'lana.png',
    damage: 20,
    timer: 33,
    ability: 'Enables god rays',
  },
  {
    id: 3,
    name: 'Mohammed Hunaidi',
    img: 'hunaidi.png',
    damage: 40,
    timer: 10,
    ability: 'Shows laughing gif',
  },
  {
    id: 4,
    name: 'Mishari',
    img: 'mishari.png',
    damage: 77,
    timer: 10,
    ability: 'Gives you fruits',
  },
  {
    id: 5,
    name: '7moodi',
    img: '7moodi.png',
    damage: 150,
    timer: 10,
    ability: 'Gives you motivation',
  },
  {
    id: 6,
    name: 'Snowy',
    img: 'snowy.png',
    damage: 200,
    timer: 15,
    ability: 'Sleeps next to you',
  },
  {
    id: 7,
    name: 'Al6af',
    img: 'al6af.png',
    damage: 450,
    timer: 10,
    ability: 'Disables click button',
  },
  {
    id: 8,
    name: 'Undertaker',
    img: 'undertaker.png',
    damage: 750,
    timer: 10,
    ability: "Kills Mishari if they're available at the same time",
  },
  {
    id: 9,
    name: 'Captain Majed',
    img: 'majed.png',
    damage: 1000,
    timer: 10,
    ability: 'Does nothing for now…',
  },
];

export default characters;
