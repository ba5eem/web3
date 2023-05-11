
import Layout from "../components/layout"
import Head from "next/head"
import "../styles/global.css";

export default function AppWrapper({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{pageProps.title ? pageProps.title : "Trade Crypto"}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
