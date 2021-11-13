import { NextPage } from "next";
import Layout from "../components/layout";
import Head from 'next/head';

const Custom404: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <h1>404 - Page Not Found</h1>
    </Layout>
  )
}

export default Custom404;