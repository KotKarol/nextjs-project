import Head from "next/head";
import { getAllSalonsData } from "../../api/salons";
import Layout from "../../components/layout";
import Link from "next/link";

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
      <h1>Salons</h1>
      <ul>
        {salonsData.map(({ id, company }) => (
          <li key={id}>
            <Link href={`/salons/${id}`}>{company}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
