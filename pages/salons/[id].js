import { getAllSalonsIds, getSalonData } from "../../api/salons";
import Layout from "../../components/layout";
import Head from "next/head";
import styles from "./[id].module.css";
import Image from "next/image";
import Back from "../../images/back.svg";
import Heart from "../../images/heart.svg";
import Link from "next/link";
import Stars from "../../components/stars";
import classNames from "classnames";
import Pin from "../../images/pin.svg";
import Clock from "../../images/clock.svg";
import Phone from "../../images/phone.svg";
import Globe from "../../images/globe.svg";
import Dropdown from "../../images/dropdown.svg";

export default function Salon({
  salonData: { company, address, phone, url, about, rating, ratingCount },
}) {
  return (
    <Layout>
      <Head>
        <title>{`${company} Info`}</title>
      </Head>

      <div className={styles.top}>
        <Image
          src="/images/image.png"
          width={375}
          height={250}
          layout="responsive"
          priority
        />
        <Link href={`/salons`}>
          <a>
            <Back className={styles.back} />
          </a>
        </Link>
        <Heart className={styles.heart} />
        <div className={styles.company}>{company}</div>
        <div className={styles.stars}>
          <Stars rating={rating} count={ratingCount} height={12} width={12} />
        </div>
      </div>

      <div className={styles.tabs}>
        <div className={classNames(styles.tab, styles.active)}>Info</div>
        <div className={styles.tab}>Schema</div>
      </div>
      <div className={styles.bar} />
      <div className={styles.row}>
        <Pin />
        {`${address.street}, ${address.postalCode} ${address.city}`}
      </div>
      {/* Didn't have time to add time calculation */}
      <div className={styles.row}>
        <Clock />
        Open until 19:00
        <Dropdown className={styles.dropdown} />
      </div>
      <div className={styles.row}>
        <Phone />
        {phone}
      </div>
      <div className={styles.row}>
        <Globe />
        {url}
      </div>
      <div className={styles.text}>{about}</div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllSalonsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const salonData = await getSalonData(params.id);
  return {
    props: {
      salonData,
    },
  };
}
