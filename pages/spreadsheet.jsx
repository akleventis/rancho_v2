import Frame from '../components/Frame.jsx'

const spreadsheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSMqyO8FZgrMKpqRxWqjFaN07uWn52gPyoCf2biv1X1wfthMxcrUQ3FzP46u8EHki6EanfCqjQpmZ-T/pubhtml?widget=true&amp;headers=false'
const buttonURL = 'https://docs.google.com/spreadsheets/d/1sgu637RDSw7o_AE4EoP4TrOKlkUZLvSMv3YNL-9A1I8/edit?usp=sharing'
const buttonText = 'Click to view file'

const Button = () => {
  return (
    <div className='button-container'>
      <a rel='no-referrer' href={buttonURL} className='button'>{buttonText}</a>
    </div>
  )
}


const Spreadsheet = () => {
  return (
    <div className='spreadsheet'>
      <Button />
      <Frame url={spreadsheetURL} classNames='iframe-container'/>
    </div>
  );
};

export default Spreadsheet;
