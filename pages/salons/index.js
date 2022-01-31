import Head from "next/head";
import { getAllSalonsData } from "../../api/salons";
import Layout from "../../components/layout";
import utils from "../../styles/utils.module.css";
import styles from "./index.module.css";
import Arrow from "../../images/arrow.svg";
import Filter from "../../images/filter.svg";
import classNames from "classnames";
import SalonRow from "../../components/salon-row";
import Filters from "../../components/filters";

import { useState } from "react";

export async function getStaticProps() {
  const salonsData = await getAllSalonsData();
  return {
    props: {
      salonsData,
    },
  };
}

const filters = [
  { filter: {}, label: "All" },
  { filter: { from: 0, to: 100 }, label: "0 - 100" },
  { filter: { from: 100, to: 500 }, label: "100 - 500" },
  { filter: { from: 500 }, label: "500+" },
];

export default function Salons({ salonsData }) {
  const [filteredSalons, setFilteredSalons] = useState(salonsData);

  function filter({ from, to }) {
    const data = salonsData.filter((salon) => {
      if (Number.isInteger(from) && salon.price < from) {
        return false;
      }
      if (Number.isInteger(to) && salon.price > to) {
        return false;
      }
      return true;
    });

    setFilteredSalons(data);
  }

  return (
    <Layout>
      <Head>
        <title>Salons list</title>
      </Head>
      <div className={classNames(styles.site)}>
        <div
          className={classNames(
            styles.header,
            styles.bottomBorder,
            utils.paddingRow
          )}
        >
          <Arrow className={styles.back} width="11" height="19" />
          <h1 className={styles.title}>Hår</h1>
          <Filter className={styles.filter} />
        </div>
        <Filters
          className={classNames(
            styles.filterRow,
            styles.bottomBorder,
            utils.paddingRow
          )}
          filters={filters}
          refine={(e) => {
            filter(e);
          }}
        />
        <div className={styles.list}>
          <ul>
            {filteredSalons.map((salon) => (
              <SalonRow salon={salon} key={salon.id} />
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
