import styles from './banner.module.css';

export const addBanner = (text: string) => {
  const content = document.querySelector('#content') as HTMLDivElement;
  content.classList.add(styles.banner);
  content.textContent = text;
};
