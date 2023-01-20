import styles from './search.module.scss';
import { GrSearch } from 'react-icons/gr';
import { useState } from 'react';

export default function Search() {
  const [searchtext, setSearchText] = useState('');

  return (
    <div className={styles.search}>
      <GrSearch className={styles.search__icon} />
      <input
        type='text'
        placeholder='Search by name'
        className={styles.search__input}
        onChange={(e) => setSearchText(e.target.value)}
      >
      </input>
    </div>
  );
}