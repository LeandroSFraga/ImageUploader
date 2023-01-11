import styles from './search.module.scss';
import { GrSearch } from 'react-icons/gr';

export default function Search() {
  return (
    <div className={styles.search}>
      <GrSearch className={styles.search__icon}/>
      <input type='text' placeholder='Search by name' className={styles.search__input}></input>
    </div>
  );
}