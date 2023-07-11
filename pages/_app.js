import "../styles/globals.scss";
import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
