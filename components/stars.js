import styles from "./stars.module.css";
import Star from "../images/star.svg";
import classNames from "classnames";

export default function Stars({ rating, count, height, width }) {
  return (
    <>
      {[...Array(5)].map((v, index) => {
        return (
          <Star
            key={index}
            height={height}
            width={width}
            className={classNames(
              { [styles.on]: index <= rating },
              { [styles.off]: index > rating },
              styles.star
            )}
          />
        );
      })}
      <span className={styles.count}>{`(${count})`}</span>
    </>
  );
}
