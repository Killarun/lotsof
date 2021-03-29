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

const data = [
  {name: "Саша", age: 19},
  {name: "Катя", age: 21},
  {name: "Миша", age: 17},
  {name: "Федя", age: 23},
  {name: "Клава", age: 22}
];

function calcAvgAge(array) { 
  let sum = 0; //ставим переменну в 0
  for (const person of array) { //перебираем массив
    sum += person.age; //сумируем возраст
  }
  return sum / array.length; //возвращаем возраст и делим на длину массива, получаем среднее
}

console.log(calcAvgAge(data));



const arr = [17, 23, 31, 44, 59];

doubleNumber(arr); // возвращает [34,46,62,88,118];


function doubleNumber(array) {
  return array.map(function(num) {  //возвращаем массив и умножаем на 2.
    return num * 2;
  });

}


function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
for (let i=0; i < arr.length; i++){

  for (let j=0; j < arr[i].length; j++){
    product = product * arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
