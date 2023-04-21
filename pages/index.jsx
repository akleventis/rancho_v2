import Frame from '../components/Frame.jsx';

const noteURL = "https://docs.google.com/document/d/e/2PACX-1vQM-buMgYDrDkZ8WJCGuWydBxKXczKPoqUQMncJNLr7EcXsn27E7Zwz82iYQj1XUNXyXlGegVoDr8As/pub?embedded=true";
const calendarURL ="https://docs.google.com/document/d/e/2PACX-1vR06W4Ple2kApTdiNjbZBuyuQLUAUsCa8CYqvn58tzo8r2k1Um69eHj5BaaaNVsVDbCeDaCC1dkF7df/pub?embedded=true";

const Home = () => {
  return (
    <div className="home">
      <Frame url={noteURL} classNames={"iframe-container note"} />
      <Frame url={calendarURL} classNames={"iframe-container calendar"} />
    </div>
  );
};

export default Home;
