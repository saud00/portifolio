// import '../styles/index.css'
import React from 'react'
import 'tailwindcss/tailwind.css'

import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import FirstTImeGif from '../components/FirstTImeGif'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    let timeout = setTimeout(():void => {
        setLoading(false)
    
        }, 4000);
    
        return () => { clearTimeout(timeout) }
  },[])

  return(
    <>
    {
      loading ?
      <FirstTImeGif/>
      :
    <Layout>
      <Component {...pageProps} />
    </Layout>
  }
</>
    )

}
export default MyApp
