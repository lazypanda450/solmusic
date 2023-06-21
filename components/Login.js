import React, { useEffect, useState } from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { Payment } from './Payment'
import DemoPage from '../pages/demopage'
import {TiStarOutline} from 'react-icons/ti'
import {FaGithub} from 'react-icons/fa'

const styles = {
    loginPage:`w-screen h-screen bg-white flex flex-col sm:flex-row justify-center`,
    text:`text-2xl text-black p-10` 
}
function Login() {
  const [demo,setDemo] = useState(false)
  const wallet = useWallet()
  
    if(demo) return <DemoPage isPaid={'demo'}/>
    if(wallet.connected) return<Payment/>
  return (
    <div className={styles.loginPage}>
      <div class="p-8 h-full sm:min-h-screen flex flex-col justify-center relative overflow-hidden sm:py-12">
        <div class="max-w-7xl mx-auto">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div className={`flex flex-col items-center m-16`}>
                <p className={styles.text}>Connect Your Wallet</p>
                <button className='bg-purple-700 rounded '> 
                  <WalletMultiButton/>
                </button>
              </div>
              </div>
          </div>
        </div>
      </div>

      <div class="p-8 h-full sm:min-h-screen flex flex-col justify-center relative overflow-hidden sm:py-12">
        <div class="max-w-7xl mx-auto">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div className={`flex flex-col items-center m-16`}>
                <p className={styles.text}>Or Try Limited Trial</p>
                <button type="button" class="m-1 focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded text-base px-5 py-2.5  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={()=>setDemo(true)}
                >
                Free DEMO</button>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className='text-black flex fixed bottom-2'>
      <div class="max-w-7xl mx-auto">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-4 py-3 pb-1 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <a href="https://github.com/ekcmuhammed08/solana-spotify-clone" target="_blank" className='flex text-base font-sans font-medium'>
                <TiStarOutline size={22}/> STAR US <FaGithub size={30} className='pb-1'/>
              </a> 
            </div>
          </div>
      </div>  
      </div>
    </div>
  )
}

export default Login