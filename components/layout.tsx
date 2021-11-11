import { FunctionComponent, ReactNode } from 'react';
import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

interface ILayoutProps {
  children: ReactNode
  home?: boolean
}

const name: string = 'Wichai Sawangpongkasame';
export const siteTitle: string = 'Next.js Test Layout Title'

const Layout: FunctionComponent<ILayoutProps> = ({ children, home }: ILayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image 
              priority
              src='/images/profile.jpg'
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            {/* <div style={{ position: 'relative', width: '400px', height: '400px' }}>
              <Image
                src="/images/profile.jpg"
                layout="fill"
                objectFit="contain"
                alt='profile'
              />
              
            </div> */}
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image 
                  priority
                  src='/images/profile.jpg'
                  className={utilStyles.borderCircle}
                  height={144}
                  width={144}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to Home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout;