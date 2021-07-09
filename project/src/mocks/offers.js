import { AVATAR_URL } from '../const';

import { reviews } from './reviews';

export const offers = [
  {
    id: 1,
    isFavorite: true,
    images: ['img/studio-01.jpg'],
    title: 'Beautiful & luxurious apartment at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    isPremium: false,
    type: 'apartment',
    rating: 2.2,
    bedrooms: 3,
    maxAdults: 4,
    price: 120,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: false,
      name: 'Angelina',
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    previewImage: 'img/apartment-small-03.jpg',
    reviews: reviews.slice(Math.floor(Math.random() * 5)),
  },
  {
    id: 2,
    isFavorite: false,
    images: ['img/room.jpg', 'img/studio-01.jpg'],
    title: 'Wood and stone place',
    description: 'A small and cozy room, the design of which is completely made of stone, and the furniture is made of rare wood',
    isPremium: true,
    type: 'room',
    rating: 3.2,
    bedrooms: 1,
    maxAdults: 2,
    price: 80,
    goods: ['Wi-Fi', 'Fridge', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: 'Mike',
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Humburg',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    previewImage: 'img/room-small.jpg',
    reviews: reviews.slice(Math.floor(Math.random() * 5)),
  },
  {
    id: 3,
    isFavorite: true,
    images: ['img/apartment-02.jpg', 'img/room.jpg', 'img/studio-01.jpg'],
    title: 'Canal View Prinsengracht',
    description: 'View of the Prinsengracht canal from a large and comfortable apartment with all amenities',
    isPremium: true,
    type: 'house',
    rating: 4.8,
    bedrooms: 5,
    maxAdults: 7,
    price: 132,
    goods: ['Heating', 'Kitchen', 'Fridge', 'Wi-Fi', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Towels'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Stive',
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    previewImage: 'img/apartment-small-04.jpg',
    reviews: reviews.slice(Math.floor(Math.random() * 5)),
  },
  {
    id: 4,
    isFavorite: true,
    images: ['img/studio-photos.jpg', 'img/apartment-02.jpg', 'img/room.jpg', 'img/studio-01.jpg'],
    title: 'Nice, cozy, warm big bed room',
    description: 'Nice, cozy, warm room with a large bed and panoramic windows near the Eiffel Tower and the Champs-Elysees',
    isPremium: false,
    type: 'hotel',
    rating: 3.8,
    bedrooms: 2,
    maxAdults: 3,
    price: 180,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher', 'Baby seat', 'Fridge', 'Wi-Fi'],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: true,
      name: 'Irina',
    },
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
    previewImage: 'img/apartment-small-03.jpg',
    reviews: reviews.slice(Math.floor(Math.random() * 5)),
  },
];