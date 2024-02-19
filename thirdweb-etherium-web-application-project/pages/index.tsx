import Hero from "@/src/components/widgets/Home/Hero";
import Cards from "@/src/components/widgets/Home/Cards";
import Head from "next/head";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero/>
      <Cards/>
    </main>
  );
};

export default Home;
