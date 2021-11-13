import { NextPage, GetStaticPaths, GetStaticProps,  } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import Layout from '../../components/layout';
import { IPosts } from '../../interface/posts';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css'

interface Params extends ParsedUrlQuery{
  id: string
}

interface Props {
  [key: string]: IPosts & {
    contentHtml: string
    date?: Date | string
  }
}

const Post: NextPage<Props> = ({ postData }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1  className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date as string} />
        </div>
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}></div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  const paths = getAllPostIds();
  
  return {
    paths,
    fallback: false
  }
}

// context.params
export const getStaticProps: GetStaticProps<Props, Params> = async({ params }) => {
  const postData = await getPostData(params?.id as string)

  return {
    props: {
      postData
    }
  }
}

// Important: The returned list is not just an array of strings — it must be an array of objects that look like the comment above. Each object must have the params key and contain an object with the id key (because we’re using [id] in the file name). Otherwise, getStaticPaths will fail.

export default Post;