import '/styles/globals.css'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
export default function App({ Component, pageProps }) {

  return (
  <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
  </Head>
    <Component {...pageProps} />
    <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"/>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"/>
    <Script src="https://kit.fontawesome.com/168a7e912d.js" crossOrigin="anonymous" />
  </>
  )
}
