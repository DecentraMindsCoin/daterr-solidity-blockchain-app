import { useContext } from 'react'
import { DaterrContext } from '../context/DaterrContext'
import logo from '../assets/app-logo.png'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import DaterrCardItem from './DaterrCardItem'
import Image from 'next/image'

const style = {
  wrapper: ` flex flex-col rounded-lg overflow-hidden absolute top-1/3 w-full h-2/3  pb-32 `,
  cardMain: `h-full w-full flex-1 relative flex flex-col justify-center items-center bg-gray-500 shadow-xl shadow-cyan-300 `,
  noMoreWrapper: `flex flex-col justify-center items-center absolute`,
  daterrLogo: `text-5xl text-red-500 mb-4`,
  noMoreText: `text-xl text-white`,
  swipesContainer: `w-full h-full overflow-hidden shadow-xl shadow-cyan-300`,

  
}
const Card = () => {
  const { cardsData } = useContext(DaterrContext)

  return (
    <div className={style.wrapper}>
     
      <CardHeader />
      <div className={style.cardMain}>
        <div className={style.noMoreWrapper}>
       <Image  src={logo} width={40} height={40} />
          <div className={style.noMoreText}>
            No More Profiles in your Location...
          </div>
        </div>
        <div className={style.swipesContainer}>
          {cardsData.map((card, index) => (
            <DaterrCardItem card={card} key={index} />
          ))}
        </div>
      </div>
      <CardFooter />
    </div>
  )
}

export default Card