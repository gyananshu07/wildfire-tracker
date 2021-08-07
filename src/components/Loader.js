import spinner from "./spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="Loading" />
      <h1>Loading Data</h1>
      <h3>Please Wait!</h3>
    </div>
  );
};

export default Loader;
