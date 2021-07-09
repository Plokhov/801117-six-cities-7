import { AVATAR_URL } from '../const';

export const reviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: 'Martin',
    },
  },
  {
    comment: 'Good place.',
    date: '2019-06-09T14:13:56.569Z',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: 'Kevin',
    },
  },
  {
    comment: 'Bad place.',
    date: '2020-08-11T14:13:56.569Z',
    id: 1,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: 'Eva',
    },
  },
  {
    comment: 'An average place in terms of quality.',
    date: '2020-11-31T14:13:56.569Z',
    id: 4,
    rating: 3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: 'Elen',
    },
  },
  {
    comment: 'The most beautiful and cozy place where we were',
    date: '2020-03-21T14:13:56.569Z',
    id: 5,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 5,
      isPro: true,
      name: 'Sergey',
    },
  },
  {
    comment: 'A good place but there are a few shortcomings',
    date: '2018-02-16T14:13:56.569Z',
    id: 6,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 6,
      isPro: true,
      name: 'Jose',
    },
  },
];
