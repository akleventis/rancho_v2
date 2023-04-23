import '../styles/globals.scss';
import HeadMeta from '../components/HeadMeta.jsx'
import Nav from '../components/Nav.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadMeta />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
