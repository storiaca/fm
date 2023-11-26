import styles from './style.module.css';

type ParamsProp = {
  params: string | number;
};
const DocsPage = ({ params }: ParamsProp) => {
  return <div className={`${styles.title} ${styles.another}`}>Docs page</div>;
};

export default DocsPage;
