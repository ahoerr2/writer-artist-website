import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import Layout from "@/components/Layout";
import Typewriter from "@/components/Typewriter";

export default function Home({ title }) {
  return (
    <Layout title={title}>
      <h1 className="text-center">Writer Website</h1>
      <p className="text-center">
        <Typewriter reverseAfter={0}>
          Add a personal description about yourself!
        </Typewriter>
      </p>
    </Layout>
  );
}

export async function getStaticProps() {
  const title = "Home";

  return {
    props: {
      title,
    },
  };
}
