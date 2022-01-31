import styles from "./salon-row.module.css";
import Link from "next/link";
import Arrow from "../images/arrow.svg";
import classNames from "classnames";
import Stars from "./stars";

export default function SalonRow({ salon }) {
  const {
    company,
    id,
    rating,
    nextAvailableHour,
    address,
    price,
    ratingCount,
  } = salon;

  return (
    <Link href={`/salons/${id}`}>
      <li className={styles.row}>
        <div className={classNames(styles.nextHour, styles.fontNormal)}>
          {nextAvailableHour}
        </div>
        <div className={styles.company}>{company}</div>
        <div className={classNames(styles.price, styles.fontNormal)}>
          {`${price} kr`}
        </div>
        <div className={classNames(styles.rating, styles.fontLight)}>
          <Stars rating={rating} count={ratingCount} />
        </div>
        <div className={classNames(styles.tripTime, styles.fontLight)}>
          {`${address.time} min`}
        </div>
        <div className={classNames(styles.address, styles.fontLight)}>
          {address.street}
        </div>
        <Arrow className={styles.arrow} width="8" height="11" />
      </li>
    </Link>
  );
}
