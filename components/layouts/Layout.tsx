import { FC, ReactNode } from "react";

import Head from "next/head";

import { Navbar } from "../ui";

interface Props {
  title?: string;
  children: ReactNode;
}

const origin = typeof window == "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  console.log({ origin });

  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Marco Rivas"></meta>
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        ></meta>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>
        <meta property="og:title" content={`Información sobre ${title}`} />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
