import "./HorizontalCard.scss";
import download_1 from "../../assets/download_1.png";

const HorizontalCard = () => {
  return (
    <div className="h-main-container">
      <div className="img-container">
        <img src={download_1} alt="download_1" />
      </div>
      <div className="offers-container">
        <div className="offers">
          <span>20% Off</span>
          <span>Limited time</span>
        </div>
      </div>
      <div className="heading-container">
        <div className="heading">Webbuilder 1</div>
      </div>
      <div className="para-container">
        <p className="para">Computer Modern classic with wix support</p>
        <div className="price-container">
          <span className="price-1">$39.96</span>
          <span className="price-2">$49.96</span>
          <span className="price-3">(20% Off)</span>
        </div>
      </div>
      <button className="btn">View Deal</button>
    </div>
  );
};

export default HorizontalCard;
