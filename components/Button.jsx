const Button = ({ url, text }) => {
  return (
    <div className='button-container'>
      <a rel='no-referrer' href={url} className='button'>
        {text}
      </a>
    </div>
  );
};

export default Button;
