import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Search..." className={styles.searchInput} />
    </div>
  );
};

export default Search;
