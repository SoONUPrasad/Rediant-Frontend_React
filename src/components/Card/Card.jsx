import "./Card.scss";
import download_1 from "../../assets/download_1.png";
import blueDown from "../../assets/png/blueDown.png";
// eslint-disable-next-line react/prop-types
const Card = ({ rate, star, rateText, number }) => {
  return (
    <div className="main-container">
      <div className="number">{number}</div>
      {/* <div className="container"> */}
      <div className="img-container">
        <img src={download_1} alt="img" />
      </div>
      <div className="para-container">
        <p className="para para-1">
          <span className="text-b">
            WixPro 72-Inch Responsive website Builder- <span></span>
          </span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.
        </p>
        <div className="para para-text">
          <p className="text-b">Main highlights</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
            quod, quaerat, quasi, quidem, quibusdam, quod, quaerat, quasi.
          </p>
          <div className="see-more">
            Show more{" "}
            <span>
              <img src={blueDown} alt="show-more" />
            </span>
          </div>
        </div>
      </div>
      <div className="rating-container">
        <div className="star-container">
          <div className="rate_number">{rate}</div>
          <div className="rate_text">{rateText}</div>
          <div className="star">
            <img src={star} alt="star" />
          </div>
        </div>
        <button className="btn">view</button>
      </div>
    </div>
    // </div>
  );
};

export default Card;
