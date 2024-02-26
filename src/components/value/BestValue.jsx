import "./BestValue.scss";

// eslint-disable-next-line react/prop-types
const BestValue = ({ png, value }) => {
  return (
    <div className="best-container">
      <span>
        <img src={png} alt="cup" />
      </span>{" "}
      <span>{value}</span>
    </div>
  );
};

export default BestValue;
