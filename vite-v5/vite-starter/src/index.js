//import { initializeCounter } from './counter';
import webp from './steve-after-a-workshop.jpg?h=400;800&format=webp&as=metadata';
import jpg from './steve-after-a-workshop.jpg?h=400&as=metadata';

//import favicon from './favicon.png';
//import image from './favicon.png';

console.log(webp);
console.log(jpg);

const img = document.createElement('img');
img.src = image;

document.querySelector('#content').appendChild(img);

console.log('hello from index.js');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
// initializeCounter();

// document.querySelector('h2').textContent = 'Hello from index.js';
