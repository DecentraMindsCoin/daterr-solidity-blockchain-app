import React from 'react'
import { FaUndoAlt } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import Link from 'next/link'
const style = {
  wrapper: `w-full flex relative top-32`,
  reactionsContainer: `flex  absolute justify-between mx-auto space-x-8 w-full`,
  buttonContainer: `h-16 w-16 rounded-full flex items-center justify-center cursor-pointer border-2 shadow-lg shadow-cyan-300`,
  buttonSymbol: `text-3xl`,
  backColors: `border-white text-white`,
  xColors: `border-red-500 text-red-500`,
  starColors: `border-blue-400 text-blue-400`,
  lightningColors: `border-purple-500 text-purple-500`,
}

const Features = () => {
  return (
    <div className={style.wrapper}>
      {' '}
      <div className={style.reactionsContainer}>
        <div className={`${style.backColors} ${style.buttonContainer}`}>
          <Link href="/">
            <a>
              <FaUndoAlt
                className={`${style.backColors} ${style.buttonSymbol}`}
              />{' '}
            </a>
          </Link>
        </div>
        <div className={`${style.starColors} ${style.buttonContainer}`}>
          <AiFillStar className={`${style.starColors} ${style.buttonSymbol}`} />
        </div>
        <div className={`${style.lightningColors} ${style.buttonContainer}`}>
          <BsFillLightningChargeFill
            className={`${style.lightningColors} ${style.buttonSymbol}`}
          />
        </div>{' '}
        <div className={`${style.xColors} ${style.buttonContainer}`}>
          <AiOutlineClose
            className={`${style.xColors} ${style.buttonSymbol}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Features
