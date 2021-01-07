import Head from 'next/head'
import AppLayout from '../components/AppLayout'

import { colors } from '../styles/theme'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/twitter-logo.png" />
          <h1>Twitter</h1>
          <h2>Developed with Next.js!</h2>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }

        section{
          display: grid;
          height: 100%;
          place-items: center;
          place-content: center;
        }

        h1 {
          color: ${colors.primary};
          font-weight: 800
          margin-bottom: 8px;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </div>
  )
}
