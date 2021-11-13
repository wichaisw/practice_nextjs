import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'

import MyButton from '../components/myButton';
import Layout, { siteTitle }  from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import type { IPosts } from '../interface/posts';
import { GetStaticProps, InferGetStaticPropsType } from 'next'


// interface IindexProps {
//   props?: {
//     allPostsData: IPosts[]
//   }
// }

const Home: NextPage = ({mixedPostsData}: InferGetStaticPropsType<typeof getStaticProps>) => {

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
        <p>A full stack web developer who currently enjoy learning Next.js</p>
        <p>
        {/* {' '} adds an empty space, which is used to divide text over multiple lines. */}
          Read{' '}
          {/* If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag.  */}
          <Link href="/posts/first-post" passHref>
            <MyButton children={'this page'} onClick={onClickMyButton} />
          </Link>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {mixedPostsData.map(({ id, date, title }: IPosts) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <Date dateString={date as string} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async() => {
// export async function getStaticProps(): Promise<IindexProps> {
  const allPostsData: IPosts[] = getSortedPostsData();

  const res: IPosts[] = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
  const resData: IPosts[] = [] as IPosts[];

  for(let i = 0; i < 10; i++) {
    let obj: IPosts = {
      id: res[i].id.toString(), 
      date: '2021-12-11',
      title: res[i].title
    }

    resData.push(obj)
  }  

  const mixedPostsData: IPosts[] = allPostsData.concat(resData);

  return {
    props: {
      mixedPostsData
    }
  }
}

export default Home
