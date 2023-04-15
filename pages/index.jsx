const Home = () => {
  return (
    <div className='home'>
      <div className='iframe-container note'>
        <iframe
          src='https://docs.google.com/document/d/e/2PACX-1vQM-buMgYDrDkZ8WJCGuWydBxKXczKPoqUQMncJNLr7EcXsn27E7Zwz82iYQj1XUNXyXlGegVoDr8As/pub?embedded=true'
        ></iframe>
      </div>
      <div className='iframe-container calendar'>
        <iframe
          src='https://docs.google.com/document/d/e/2PACX-1vR06W4Ple2kApTdiNjbZBuyuQLUAUsCa8CYqvn58tzo8r2k1Um69eHj5BaaaNVsVDbCeDaCC1dkF7df/pub?embedded=true'
        ></iframe>
      </div>
    </div>
  );
};

export default Home;