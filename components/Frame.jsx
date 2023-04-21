const Frame = ({ url, classNames }) => {
  return (
    <div className={classNames}>
      <iframe src={url} />
    </div>
  );
};

export default Frame;
