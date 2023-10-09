// It's better to wait for the event for manipulation
window.addEventListener('DOMContentLoaded', () => {
  let nav = document.querySelector('nav');
  console.log(nav);
  nav.innerHTML = `
    <h2>Hello HTML</h2>
    <p>This is an HTML within javascript string</p>
  `;
});
