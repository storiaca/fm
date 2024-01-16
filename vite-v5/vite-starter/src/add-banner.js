import styles from './banner.module.css';

export const addBanner = (text) => {
  const content = document.querySelector('#content');
  content.classList.add(styles.banner);
  content.textContent = text;
};
