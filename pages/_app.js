import '../styles/globals.css'
import dynamic from "next/dynamic"
require("@solana/wallet-adapter-react-ui/styles.css")
import { SpotifyProvider } from '../context/context'
import { BrowserRouter } from 'react-router-dom'

const WalletConnectionProvider = dynamic(
  ()=> import('../context/WalletConnectionProvider'),
  {
    ssr:false
  },
)
// 
function MyApp({ Component, pageProps }) {
  return( 
      <WalletConnectionProvider>
        <SpotifyProvider>
          <Component {...pageProps} />
        </SpotifyProvider>
      </WalletConnectionProvider>
  )
}

export default MyApp
