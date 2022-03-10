import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document'
  import LeftNav from '../components/LeftNav'

  class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx)
  
      return initialProps
    }
    
  
    render() {
      return (
        <Html>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Staatliches&display=swap" rel="stylesheet" />
          <link href='https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Open+Sans:wght@300;400&family=Staatliches&display=swap' />
          <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
          </Head>
            <LeftNav/>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      )
    }
  }
  
  export default MyDocument