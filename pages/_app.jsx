import "../styles/globals.scss";
import Head from '../components/HeadMeta.jsx'
import Nav from '../components/Nav.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
