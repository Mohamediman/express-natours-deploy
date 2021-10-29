const NotFound = () => {
  return (
    <main className="main">
      <div className="error__title">
        <h2 className="heading-secondary heading-secondary-error">
          Something went wrong!!
        </h2>
        <p> Try again another time</p>
      </div>
      <div className="error__msg">
        The page you are looking not found. Please try a proper url
      </div>
    </main>
  );
};

export default NotFound;
