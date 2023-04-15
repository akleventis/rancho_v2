import Head from 'next/head'

function HeadMeta() {
  return (
    <div>
      <Head>
        <title>RMCC</title>
        <meta name="description" content="Rancho Maria Mens Club" />
        <meta name="keywords" content="Rancho Maria Mens Club, Rancho, Maria, Mens, Club, Golf, RMCC" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏌🏻‍♂️</text></svg>" />
      </Head>
    </div>
  )
}

export default HeadMeta;