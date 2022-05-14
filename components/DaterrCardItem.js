
   
import {  useContext } from 'react'
import { DaterrContext } from '../context/DaterrContext'

import DaterrCard from 'react-tinder-card'

const style = {
  daterrCardWrapper: `w-full h-full absolute`,
  wrapper: `w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center relative px-8 py-4`,
  space: `flex justify-between h-3/4 items-end mb-6`,
  name: `flex text-white text-3xl font-extrabold items-center -mb-4`,
  age: `ml-4 font-semibold text-xl`,
  walletAddress: `font-bolder text-xl text-white mb-2`,
  reactionsContainer: `flex justify-between w-full px-2 gap-5 absolute top-0`,
  buttonContainer: `h-16 w-16 rounded-full flex items-center justify-center cursor-pointer border-2`,
  buttonSymbol: `text-3xl`,
  backColors: `border-white text-white`,
  xColors: `border-red-500 text-red-500`,
  starColors: `border-blue-400 text-blue-400`,
  lightningColors: `border-purple-500 text-purple-500`,
}
// Swipe right == match functionality.
const DaterrCardItem = ({ card }) => {
  const { handleRightSwipe, currentAccount } = useContext(DaterrContext)

  const onSwipe = dir => {
    if (dir === 'right') {
      handleRightSwipe(card, currentAccount)
    }
  }

  return (
    <DaterrCard
      className={style.daterrCardWrapper}
      preventSwipe={['up', 'down']}
      onSwipe={onSwipe}
    >
      <div
        className={style.wrapper}
        style={{ backgroundImage: `url('${card.imageUrl}')` }}
      >
        <div className={style.space}>
          <div className={style.name}>
            {card.name}
            <span className={style.age}>{card.age}</span>
          </div>
        </div>
        {/* Card Metamask wallet address of dummy data card slice for shortened styling*/}
        <div className={style.walletAddress}>
          {card.walletAddress.slice(0, 6)}...{card.walletAddress.slice(39)}
        </div>
        {/* Area of Row of button icons == reactive keys */}
  
      </div>
    </DaterrCard>
  )
}

export default DaterrCardItem