import '../styles/globals.css';

const title = 'Rancho Maria Mens Club'

const pages = {
  'Spreadsheet': '/spreadsheet',
  'Calendar': '/',
  'Presidents Note': '/note',
};


const Header = () => {
  return (
    <h3>
      <a href='/'>{title}</a>
    </h3>
  );
};

const Nav = () => {
  return (
    <header>
      <Header />
      <nav>
        {Object.entries(pages).map(([key, route]) => (
          <a className='route' key={key} href={route}>
            {key}
          </a>
        ))}
      </nav>
    </header>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <div className='container'>
          <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
