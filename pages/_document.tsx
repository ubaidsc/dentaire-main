import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link key="googleFont" rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link key="googleFont2" rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link key="alata" href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
