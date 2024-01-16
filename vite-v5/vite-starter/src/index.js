//import { initializeCounter } from './counter';
import image from './steve-after-a-workshop.jpg';
console.log(image);
console.log('hello from index.js');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
// initializeCounter();

// document.querySelector('h2').textContent = 'Hello from index.js';
