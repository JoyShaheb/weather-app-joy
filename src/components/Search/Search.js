import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search for Location"
        className={styles.input}
        type="text"
      />
      <button
        onClick={searchBtn}
        className={`${styles.btn} btn btn-primary fs-5`}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
