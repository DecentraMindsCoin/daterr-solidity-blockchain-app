import '../styles/globals.css'
import { DaterrProvider } from '../context/DaterrContext'
import { MoralisProvider } from 'react-moralis'
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://k1ghz9lktpcw.usemoralis.com:2053/server"
      appId="jB7H63HM8GDDenvPzzjdu3P6kfba2thmWwfWgwWJ"
    >
      <DaterrProvider>
        <Component {...pageProps} />
      </DaterrProvider>
    </MoralisProvider>
  )
}

export default MyApp
