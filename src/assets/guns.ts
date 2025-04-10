export interface Gun {
  name: string;
  description: string;
  image: string;
  price: number;
  damage: number;
}

export const guns: Gun[] = [
  {
    name: 'Pistola',
    description: 'Pistola',
    image:
      'https://images.vexels.com/content/147962/preview/ak47-assault-rifle-grey-silhouette-594105.png',
    price: 0,
    damage: 1,
  },
  {
    name: 'AK-47',
    description:
      'AK-47 is a powerful and versatile assault rifle that is known for its reliability and ease of use.',
    image:
      'https://images.vexels.com/content/147962/preview/ak47-assault-rifle-grey-silhouette-594105.png',
    price: 20,
    damage: 10,
  },
  {
    name: 'M4A1',
    description:
      'M4A1 is a powerful and versatile assault rifle that is known for its reliability and ease of use.',
    image:
      'https://static.vecteezy.com/system/resources/previews/057/447/839/non_2x/assault-rifle-resting-on-a-clean-transparent-background-showcasing-its-design-and-features-in-a-static-position-m4a1-assault-rifle-on-transparent-background-free-png.png',
    price: 200,
    damage: 20,
  },
  {
    name: 'M4A1',
    description:
      'M4A1 is a powerful and versatile assault rifle that is known for its reliability and ease of use.',
    image:
      'https://static.vecteezy.com/system/resources/previews/057/447/839/non_2x/assault-rifle-resting-on-a-clean-transparent-background-showcasing-its-design-and-features-in-a-static-position-m4a1-assault-rifle-on-transparent-background-free-png.png',
    price: 300,
    damage: 30,
  },
];
