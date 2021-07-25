import styles from "./Filter.module.css";

const Filter = ({ onChange, value }) => (
  <label>
    Find contacts by name
    <input className={styles.input} onChange={onChange} value={value} />
  </label>
);

export default Filter;
