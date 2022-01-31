import styles from "./filters.module.css";

export default function Filters({ className, refine, filters }) {
  return (
    <div className={className}>
      <select
        className={styles.select}
        onChange={(event) => refine(filters[event.currentTarget.value].filter)}
      >
        {filters.map(({ label }, index) => {
          return (
            <option value={index} key={label}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
