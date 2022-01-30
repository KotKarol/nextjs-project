import Head from 'next/head'
import Layout from '../../components/layout'


export async function getStaticProps() {
    const blob = await import('../../api/salons.json');

    const salonsData = blob.default.map(({company, id}) => {
        return {company, id}
    });
    return {
        props: {
            salonsData
        }
    }
}

export default function Salons({salonsData}) {
    return (
        <Layout>
            <Head>
                <title>Salons list</title>
            </Head>
            <h1>Salons</h1>
            <ul>
            {salonsData.map(({id, company}) => (
                <li key={id}>{company}</li>
            ))}
            </ul>
        </Layout>
    )
}
