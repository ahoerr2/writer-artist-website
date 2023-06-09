import NavBar from "@/components/NavBar";
import Head from "next/head";
import { NextSeo } from "next-seo";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title : "Untitled"}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title={"Writer Artist Portfolio Site: " + (title ? title : "Untitled")}
        description="This is a demo for a writer artist portfolio site. Will have integration with wordpress and other popular utils to make site upkeep effortless."
        openGraph={{
          title:
            "Writer Artist Portfolio Site: " + (title ? title : "Untitled"),
          description:
            "This is a demo for a writer artist portfolio site. Will have integration with wordpress and other popular utils to make site upkeep effortless.",
          images: [
            {
              url: "/seo-icon.png",
              alt: "My image alt text",
            },
          ],
        }}
      />
      <NavBar />
      <main className="body-connect container">{children}</main>
    </>
  );
}
