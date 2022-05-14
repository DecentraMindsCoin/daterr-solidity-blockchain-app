import Image from 'next/image'
import { useContext, useState } from 'react'
import Link from 'next/link'
import { DaterrContext } from '../context/DaterrContext'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { BsFillLightningChargeFill } from 'react-icons/bs'
const style = {
  main: `flex items-center  justify-between`,
  daterrText: `text-5xl font-semibold mr-8 cursor-pointer`,
  leftMenu: `flex text-lg`,
  menuItem: `cursor-pointer hover:text-red-400 duration-300 `,
  rightMenu: `items-center  relative`,
  currentAccount: `lg:absolute lg:right-5 px-2 my-auto py-3 border-2 border-white bg-black px-4 rounded-full items-center flex`,
  accountAddress: `ml-2`,
  authButton: ` bg-black border-2 border-white items-center font-bold text-white px-6 py-3 items-center ml-4 rounded-lg hover:bg-red-500 duration-300 hover:text-white  mx-auto `,
}

const NavLinks = [
  {
    linkName: 'Vision',
    link: '/vision',
  },

  {
    linkName: 'About Me',
    link: '/about',
  },
  {
    linkName: 'Works',
    link: '/works',
  },
  {
    linkName: 'Creations',
    link: '/creations',
  },

  // {
  //   linkName: "Videos",
  //   link: "/videos",
  // },
]

export const Header = () => {
  const styles = {
    chatButton: 'shadow-cyan-300 shadow-lg',
  }

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  // const currentAccount = "0x1B3F5bc01c0B9F43632E6A4D3B2e3f9BCEaA825a"
  const { connectWallet, currentAccount, disconnectWallet } =
    useContext(DaterrContext)
  return (
    <div className=" absolute top-0 w-full overflow-x-hidden uppercase pt-4">
      <div className=" z-100 relative z-20 items-center bg-purple-500 bg-opacity-0 lg:bg-opacity-50 rounded-xl pb-5  py-2 px-5 lg:flex">
        <div className=" item-center relative h-12 space-x-4 items-center flex">
          <a className="relative" href="/">
              <div className="relative h-12 w-12 rounded-xl border-2 border-white">
              <Image
                layout="fill"
                objectFit="cover"
                className="absolute cursor-pointer rounded-xl  "
                alt="header-image"
                src="/favicon.ico"
              />  

            </div>
          </a>       
        </div>

        <button
          aria-label="top right"
          className="hover:bg-filter-image-1 absolute right-5 top-3 h-10 w-10 transform rounded border-2 border-white bg-purple-500 text-gray-200 outline-none transition duration-200 ease-in-out hover:text-gray-200   active:bg-white lg:hidden"
          onClick={handleClick}
        >
          <div className={`${active ? 'hidden' : 'block'} mx-2.5 `}>
            <AiOutlineClose />
          </div>
          <div className={`${active ? 'animate-spin' : 'hidden'}  mx-2.5 `}>
            <AiFillStar />
          </div>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? 'w-full py-10 space-y-5 lg:space-y-0 bg-purple-500 bg-opacity-40 lg:bg-opacity-0 lg:bg-black rounded-xl p-5 lg:p-0 mt-10 lg:mt-0  lg:py-0 ' : 'hidden '
          }    mx-auto flex-shrink text-white lg:block lg:w-auto lg:flex-row-reverse `}
        >
   

     
          {currentAccount ? (
            <>


           
              <div className={style.currentAccount}>
                <Image
                  src={
                    'https://moralis.io/wp-content/uploads/2021/05/moralisWhiteLogo.svg'
                  }
                  alt="D8rr NFT Image after match"
                  height={20}
                  width={20}
                />
                <span className={style.accountAddress}>
                  {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
                </span>
              </div>
              <button
                className={style.authButton}
                onClick={() => disconnectWallet()}
              >
                Logout
              </button>
            </> 
          ) : (
            <button
              className={style.authButton}
              onClick={() => connectWallet()}
            >
              Login
            </button>
          )}  </div>
        </div>
      
    </div>
  )
}
export default Header
