import Head from "next/head";
import { getAllSalonsData } from "../../api/salons";
import Layout from "../../components/layout";

import styles from "./index.module.css";
import Arrow from "../../images/arrow.svg";
import Filter from "../../images/filter.svg";
import classNames from "classnames";
import SalonRow from "../../components/salon-row";

export async function getStaticProps() {
  const salonsData = await getAllSalonsData();
  return {
    props: {
      salonsData,
    },
  };
}

export default function Salons({ salonsData }) {
  return (
    <Layout>
      <Head>
        <title>Salons list</title>
      </Head>
      <div className={styles.site}>
        <div className={classNames(styles.header, styles.bottomBorder)}>
          <Arrow className={styles.back} width="11" height="19" />
          <h1 className={styles.title}>Hår</h1>
          <Filter className={styles.filter} />
        </div>
        <div className={classNames(styles.filterRow, styles.bottomBorder)}>
          Filter something
        </div>
        <div className={styles.list}>
          <ul>
            {salonsData.map((salon) => (
              <SalonRow salon={salon} key={salon.id} />
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
