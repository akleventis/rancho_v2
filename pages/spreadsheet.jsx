const buttonText = 'Click to view file'

const Spreadsheet = () => {
  return (
    <div className='spreadsheet'>
      <div className='button-container'>
        <a
          rel='no-referrer'
          href='https://docs.google.com/spreadsheets/d/1sgu637RDSw7o_AE4EoP4TrOKlkUZLvSMv3YNL-9A1I8/edit?usp=sharing'
          className='button'
        >
          {buttonText}
        </a>
      </div>
      <div className='iframe-container'>
        <iframe
          src='https://docs.google.com/spreadsheets/d/e/2PACX-1vSMqyO8FZgrMKpqRxWqjFaN07uWn52gPyoCf2biv1X1wfthMxcrUQ3FzP46u8EHki6EanfCqjQpmZ-T/pubhtml?widget=true&amp;headers=false'
        ></iframe>
      </div>
    </div>
  );
};

export default Spreadsheet;
