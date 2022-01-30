import { getAllSalonsIds, getSalonData } from "../../api/salons";
import Layout from "../../components/layout";
import Head from "next/head";

export default function Salon({ salonData }) {
  return (
    <Layout>
      <Head>
        <title>{`${salonData.company} Info`}</title>
      </Head>
      {salonData.company}
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
