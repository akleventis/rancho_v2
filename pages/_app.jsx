import "../styles/globals.scss";

const title = "Rancho Maria Mens Club";

const pages = {
  Home: "/",
  Spreadsheet: "/spreadsheet",
};

const Nav = () => {
  return (
    <header>
      <nav>
        <h3>
          <a href="/">
            {title}
            <img src="rm_logo.png" />
          </a>
        </h3>
        <div>
          {Object.entries(pages).map(([key, route]) => (
            <a key={key} href={route}>
              {key}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
