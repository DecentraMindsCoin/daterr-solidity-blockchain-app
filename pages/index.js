import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const style = {
  wrapper: `h-screen w-screen flex flex-col bg-[#222229]`,
  cardsContainer: `flex flex-col items-center justify-center`
} 

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.wrapper}>
        <Header />
        <div className={style.cardsContainer}>{/* Card */}</div>
      </div>
    </div>
  )
}

export default Home
