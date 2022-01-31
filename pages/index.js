import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Salons App</title>
      </Head>

      <main>
        <h1>Hello! :)</h1>
        <p>This is my app made with nextJS. You are here by accident :D</p>
        <h1>
          Salon list{" "}
          <Link href="/salons">
            <a>is here!</a>
          </Link>
        </h1>
      </main>
    </div>
  );
}
