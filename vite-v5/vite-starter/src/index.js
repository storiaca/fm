//import { initializeCounter } from './counter';
console.log('hello from index.js');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
// initializeCounter();

// document.querySelector('h2').textContent = 'Hello from index.js';
