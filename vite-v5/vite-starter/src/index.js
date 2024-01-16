//import { initializeCounter } from './counter';
import image from './steve-after-a-workshop.jpg';
import favicon from './favicon.png';

console.log(image, favicon);

console.log('hello from index.js');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
// initializeCounter();

// document.querySelector('h2').textContent = 'Hello from index.js';
