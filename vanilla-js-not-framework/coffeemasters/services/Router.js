const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((a) => {
      a.addEventListener('click', (event) => {
        event.preventDefault();
        //const url1 = event.target.href; // full url
        const url = event.target.getAttribute('href');
        Router.go(url);
      });
    });
    // Check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);
    if (addToHistory) {
      history.pushState({ route }, null, route);
    }
    let pageElement = null;

    switch (route) {
      case '/':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Menu';
        break;
      case '/order':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Your Order';
        break;

      default:
        break;
    }

    if (pageElement) {
      ///document.querySelector('main').children[0].remove();
      const cache = document.querySelector('main');
      cache.innerHTML = '';
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
