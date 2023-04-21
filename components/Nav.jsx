const title = "Rancho Maria Mens Club";
const logo = 'rm_logo.png'

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
            <img src={logo} />
          </a>
        </h3>
        <div>
          {Object.entries(pages).map(([key, route]) => (
            <a key={key} href={route}>{key}</a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav