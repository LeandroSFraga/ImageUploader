import styles from './search.module.scss';
import { GrSearch } from 'react-icons/gr';
import { useState } from 'react';

export default function Search() {
  return (
    <div className={styles.search}>
      <GrSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search by name"
        className={styles.searchInput}
      ></input>
    </div>
  );
}
