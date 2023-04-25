import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";

export default function About({ title }) {
  return (
    <Layout title={title}>
      <h1>About</h1>
      <p>This is the about page</p>
    </Layout>
  );
}

export async function getStaticProps() {
  const title = "About";

  return {
    props: {
      title,
    },
  };
}
