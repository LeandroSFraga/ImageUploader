import styles from './search.module.scss';
import { GrSearch } from 'react-icons/gr';
import { useState } from 'react';
import { SearchProps } from '..';

export default function Search({ setSearch }: SearchProps) {
  return (
    <div className={styles.search}>
      <GrSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search by name"
        className={styles.searchInput}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}
