import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import Features from '../components/Features'
import Header from '../components/Header'

const style = {
  wrapper: `h-full flex-1 bg-black mx-auto relative w-full px-6`,
  cardsContainer: `relative w-full h-full sm:mx-auto max-w-2xl flex-shrink-0`,
}

const Home = () => {

  return (
    <div className="flex w-full h-screen relative mx-auto">
      <Head>
        <title>D8RR NFT APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={style.wrapper}>

        <div className={style.cardsContainer}>
                 <Header /> 
        <Features />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Home
