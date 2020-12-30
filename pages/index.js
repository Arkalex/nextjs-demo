import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js! demo</a>
        </h1>

        <nav className={styles.nav}>
          <Link href="/info">
            <a>
              Testing routes
            </a>
          </Link>
        </nav>
      </main>

    </div>
  )
}
