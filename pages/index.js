import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TextBoxes from '../components/TextBoxes'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spicy Difference Checker</title>
        <meta name="description" content="Percent Difference Checker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Spicy Difference Checker!
        </h1>

        <p className={styles.description}>
          Get started by adding text to the two boxes.
        </p>

        <TextBoxes />

      </main>


    </div>
  )
}
