//import { initializeCounter } from './counter';
// import styles from './banner.modul.css?url';
// import webp from './steve-after-a-workshop.jpg?h=400;800&format=webp&as=metadata';
// import jpg from './steve-after-a-workshop.jpg?h=400&as=metadata';

//import favicon from './favicon.png';
//import image from './favicon.png';

// console.log(webp);
// console.log(jpg);

// console.log(import.meta.env);

// const img = document.createElement('img');
// img.src = image;

// document.querySelector('#content').appendChild(img);

console.log('hello from index.js');

import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
// initializeCounter();

// document.querySelector('h2').textContent = 'Hello from index.js';

/* JSON Named Exports */
// import gandorf from './characters/gandorf.json';
// import { name } from './characters/gandorf.json';

// console.log(name);

/* Glob Imports */
const content = document.querySelector('#content');

console.log(import.meta.glob('./logos/**/*.svg', { eager: true }));

// for (const [path, module] of Object.entries(
//   import.meta.glob('./logos/**/*.svg'),
// )) {
//   //module().then((img) => console.log(img.default));

//   module().then((url) => {
//     const img = document.createElement('img');
//     img.src = url.default;
//     img.height = 200;
//     content.appendChild(img);
//   });
// }
