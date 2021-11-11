import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import MyButton from '../components/MyButton';
import Layout, { siteTitle }  from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

const Home: NextPage = () => {

  const onClickMyButton = (): void => {
    console.log("clicked");
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main>
      </main>
      <section className={utilStyles.headingMd}>
        <p>A fullstack web developer who currently enjoy learning Next.js</p>
        <p>
        {/* {' '} adds an empty space, which is used to divide text over multiple lines. */}
          Read{' '}
          {/* If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.  */}
          <Link href="/posts/first-post" passHref>
            <MyButton children={'this page'} onClick={onClickMyButton} />
          </Link>
        </p>
      </section>
    </Layout>
  )
}

export default Home
