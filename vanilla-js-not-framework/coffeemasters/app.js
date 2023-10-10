// It's better to wait for the event for manipulation
window.addEventListener('DOMContentLoaded', () => {
  let nav = $('nav');
  console.log(nav);
  nav.innerHTML = `
    <h2>Hello HTML</h2>
    <p>This is an HTML within javascript string</p>
  `;
  nav.on('click', () => console.log(nav));
});

// we can attach more than one event on same node
window.addEventListener('DOMContentLoaded', (event) => {
  console.log(event);
});

const $ = function (args) {
  return document.querySelector(args);
};
const $$ = function (args) {
  return document.querySelectorAll(args);
};

HTMLElement.prototype.on = function (a, b, c) {
  return this.addEventListener(a, b, c);
};
HTMLElement.prototype.off = function (a, b) {
  return this.removeEventListener(a, b);
};
HTMLElement.prototype.$ = function (s) {
  return this.querySelector(s);
};
HTMLElement.prototype.$$ = function (s) {
  return this.querySelectorAll(s);
};
