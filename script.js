const pop = document.querySelector('.popup');
const pop2 = document.querySelector('.button-show');
const closepop2 = pop.querySelector('.button-hide');

pop2.addEventListener('click', function (evt) {
    evt.preventDefault();
    pop.classList.add('popup--open')
});

closepop2.addEventListener('click', function () {
    pop.classList.remove('popup--open');

});

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        pop.classList.remove('popup--open');
    }
});


Other things

import { getRandomInteger } from './util.js';
import { getRandomNumber } from './util.js';
import { getRandomArray } from './util.js';
import { getRandomArrayElement } from './util.js';

const MIN_ROOMS = 1;
const MIN_COORDINATE_X = 35.65000;
const MAX_COORDINATE_X = 35.70000;
const MIN_COORDINATE_Y = 139.70000;
const MAX_COORDINATE_Y = 139.80000;
const MAX_ROOMS = 7;
const MIN_GUESTS = 1;
const MAX_GUESTS = 10;
const MIN_PRICE = 1000;
const MAX_PRICE = 999999;
const MIN_USER_COUNT = 1;
const MAX_USER_COUNT = 8;

const TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTO_LINKS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const TITLES = [
  'Квартира №1',
  'Квартира №2',
  'Квартира №3',
  'Квартира №4',
  'Квартира №5',
  'Квартира №6',
  'Квартира №7',
  'Квартира №8',
  'Квартира №9',
  'Квартира №10',
];

const DESCRIPTIONS = [
  'Уютная квартира с видом на море 1',
  'Уютная квартира с видом на море 2',
  'Уютная квартира с видом на море 3',
  'Уютная квартира с видом на море 4',
  'Уютная квартира с видом на море 5',
  'Уютная квартира с видом на море 6',
  'Уютная квартира с видом на море 7',
  'Уютная квартира с видом на море 8',
  'Уютная квартира с видом на море 9',
  'Уютная квартира с видом на море 10',
];


const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];


const createOffer = () => {

  const X = getRandomNumber(MIN_COORDINATE_X, MAX_COORDINATE_X, 5);
  const Y = getRandomNumber(MIN_COORDINATE_Y, MAX_COORDINATE_Y, 5);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomInteger(MIN_USER_COUNT, MAX_USER_COUNT)}.png`,
    },

    offer: {
      title:getRandomArrayElement(TITLES),
      address: `${X}, ${Y}`,
      price: getRandomInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomInteger(MIN_ROOMS, MAX_ROOMS),
      guests: getRandomInteger(MIN_GUESTS, MAX_GUESTS),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTO_LINKS),

    },
    location: {
      x: X,
      y: Y,
    },
  }
};


const getSimilarOffers = (quantity) => new Array(quantity).fill(null).map(createOffer);

export {getSimilarOffers, createOffer};

