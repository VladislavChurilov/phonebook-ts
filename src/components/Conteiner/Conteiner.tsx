import styles from '../../Phonebook.module.css';

const Conteiner = ({ children }: any) => (
  <div className={styles.phonebook}>{children}</div>
);

export default Conteiner;
