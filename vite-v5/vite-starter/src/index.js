console.log('hello from index.js');

import { initializeCounter } from './counter';

initializeCounter();

document.querySelector('h2').textContent = 'Hello from index.js';
