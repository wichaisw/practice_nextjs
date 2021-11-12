import Head from 'next/head';
import { useState, FunctionComponent } from 'react';
import Layout from '../../components/layout';

const FirstPort: FunctionComponent = () => {

  const [onOff, setOnOff] = useState<Boolean>(false);

  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <meta property="og:title" content="first-post-title" key="first-post-title" />
      </Head>
      <h1>First Post</h1>
      <p>{onOff ? 'On' : 'Off'}</p>
      <button onClick={() => setOnOff(!onOff)}>Switch</button>
    </Layout>
  )
}

export default FirstPort;