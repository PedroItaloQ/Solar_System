import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from './Navbar'
import Image from 'next/image'
import SolComponents from './SolComponents'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <SolComponents />
      </main>
    </div>
  )
}
