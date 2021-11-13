import { NextPage, GetStaticProps, InferGetStaticPropsType } from "next"

const Error: NextPage = ({ statusCode }: InferGetStaticPropsType<typeof getStaticProps> ) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

const getStaticProps: GetStaticProps = ({ res, err}: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {
    props: { statusCode }
  }
}

export default Error