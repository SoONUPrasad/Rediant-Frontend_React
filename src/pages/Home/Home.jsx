import "./Home.scss";
import Card from "../../components/Card/Card";
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard";
import SignUp from "../../components/Signup/SignUp";
import correct from "../../assets/png/correct.png";
import mark from "../../assets/png/Marks.png";
import downArrow from "../../assets/png/down.png"
import fiveStar from "../../assets/png/5star.png"
import fourAndHalfStar from "../../assets/png/4.1Star.png"
import fourStar from "../../assets/png/4star.png"

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="heading-container">
        <h2>Best Website builder in the US</h2>

        <div className="update-container">
          <div className="update">
            <div className="update-text">
              <span>
                <img src={correct} alt="correct-svg" style={{ width: "7%" }} />
              </span>
              <span>Last Update - February 22, 2020</span>
            </div>
            <div className="advertising">
              <span>
                <img src={mark} alt="mark-png" />
              </span>
              <span>Advertising Disclosure</span>
            </div>
          </div>
          <div className="more">
            <span>Top Relevant</span>
            <span><img src={downArrow} alt="down-png" /></span>
          </div>
        </div>

        <div className="tools-container">
          <div className="tools">
            <span>Tools</span>
            <span>AWS Builder</span>
            <span>Start Build</span>
            <span>Build Supplies</span>
            <span>Tooling</span>
            <span>BlueHosting</span>
          </div>
        </div>

        <div className="hosting-container">
          <div className="hosting">
            <span>Home</span>&gt;
            <span>Hosting for all</span>&gt;
            <span>Hosting</span>&gt;
            <span>Hosting 6</span>&gt;
            <span>Hosting 5</span>
          </div>
        </div>
      </div>

      <div className="card-container">
        <Card rate={"9.8"} rateText={"Exceptional"} star={fiveStar}/>
        <Card rate={"9.5"} rateText={"Excellent"} star={fourAndHalfStar}/>
        <Card rate={"9.3"} rateText={"Exceptional"} star={fiveStar}/>
        <Card rate={"9.1"} rateText={"Very Good"} star={fourStar}/>
      </div>
      <div className="para">Related deals you might like for</div>
      <div className="horizontal-container">
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </div>
      <div className="signUp-container">
        <SignUp />
      </div>
    </div>
  );
};

export default Home;
