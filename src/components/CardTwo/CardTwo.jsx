import "./CardTwo.scss";
import download_1 from "../../assets/download_1.png";
import blueDown from "../../assets/png/blueDown.png";
import blueTick from "../../assets/png/Blue.png";
// eslint-disable-next-line react/prop-types

const CardTwo = ({
  rate,
  star,
  rateText,
  number,
  spanBold,
  paraOne,
  paraTwo,
}) => {
  return (
    <div className="main-container">
      <div className="number2">{number}</div>
      {/* <div className="container"> */}
      <div className="img-container">
        <img src={download_1} alt="img" />
        <div className="img-text">CDK</div>
      </div>
      <div className="para-container">
        <p className="para para-1">
          <span className="text-b">
            {spanBold} <span></span>
          </span>
          {paraOne}
        </p>
        <div className="para para-text">
          <p className="text-b">Main highlights</p>
          <div className="highlight-container">
            <div className="p1">
              <span>9.9</span>Building Responsive
            </div>
            <div className="p2">
              <span>8.9</span>Cool
            </div>
            <div className="p3">
              <span>8.9</span>Docs{" "}
            </div>
          </div>
          <div className="doc-container">
            Why we love it
            <div className="p">
              <span>
                <img src={blueTick} alt="blue" />
              </span>
              Documentation
            </div>
            <div className="p">
              <span>
                <img src={blueTick} alt="blue" />
              </span>
              Easy Use
            </div>
            <div className="p">
              <span>
                <img src={blueTick} alt="blue" />
              </span>
              Out Of Box
            </div>
          </div>
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

export default CardTwo;
