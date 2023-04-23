import Head from 'next/head'

const description = 'Rancho Maria Mens Club'
const content = 'Rancho Maria Mens Club, Rancho, Maria, Mens, Club, Golf, RMCC'
const iconSVG = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏌🏻‍♂️</text></svg>'

function HeadMeta() {
  return (
    <div>
      <Head>
        <title>RMCC</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={content}/>
        <link rel="icon" href={iconSVG} />
      </Head>
    </div>
  )
}

export default HeadMeta;