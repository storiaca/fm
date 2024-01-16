//import { initializeCounter } from './counter';
//import image from './steve-after-a-workshop.jpg';
//import favicon from './favicon.png';
import image from './favicon.png';

const img = document.createElement('img');
img.src = image;

document.querySelector('#content').appendChild(img);

console.log('hello from index.js');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
// initializeCounter();

// document.querySelector('h2').textContent = 'Hello from index.js';
