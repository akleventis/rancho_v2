import Frame from '../components/Frame.jsx'
import Button from '../components/Button.jsx'

const spreadsheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMqyO8FZgrMKpqRxWqjFaN07uWn52gPyoCf2biv1X1wfthMxcrUQ3FzP46u8EHki6EanfCqjQpmZ-T/pubhtml?widget=true&amp;headers=false'
const buttonURL = 'https://docs.google.com/spreadsheets/d/1sgu637RDSw7o_AE4EoP4TrOKlkUZLvSMv3YNL-9A1I8/edit?usp=sharing'
const buttonText = 'Click to view file'

const Spreadsheet = () => {
  return (
    <div className='spreadsheet'>
      <Button url={buttonURL} text={buttonText}/>
      <Frame url={spreadsheetURL} classNames='iframe-container'/>
    </div>
  );
};

export default Spreadsheet;
