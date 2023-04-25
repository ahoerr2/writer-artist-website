import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import Layout from "@/components/Layout";

export default function Home({ title }) {
  return (
    <Layout title={title}>
      <h1 className="text-center">Welcome to my app!</h1>
      <p className="text-center">This is the home page.</p>
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
