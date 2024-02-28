import "./Home.scss";
import Card from "../../components/Card/Card";
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard";
import SignUp from "../../components/Signup/SignUp";
import correct from "../../assets/png/correct.png";
import mark from "../../assets/png/Marks.png";
import downArrow from "../../assets/png/down.png";
import fiveStar from "../../assets/png/5star.png";
import fourAndHalfStar from "../../assets/png/4.1Star.png";
import fourStar from "../../assets/png/4star.png";
import cup from "../../assets/png/cup.png";
import diamond from "../../assets/png/diamond.png";
import BestValue from "../../components/value/BestValue";
import data from "../../data";

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
            <span>
              <img src={downArrow} alt="down-png" />
            </span>
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
        <div className="best-value">
          <BestValue value={"Best Choice"} png={cup} />
        </div>
        <Card
          rate={data.data1.rate}
          spanBold={data.data1.boldPara}
          paraOne={data.data1.para1}
          paraTwo={data.data1.para2}
          rateText={data.data1.rateText}
          star={fiveStar}
          number={data.data1.number}
        />
        <div className="best-value">
          <BestValue value={"Best Value"} png={diamond} />
        </div>
        <Card
          rate={data.data2.rate}
          spanBold={data.data2.boldPara}
          paraOne={data.data2.para1}
          paraTwo={data.data2.para2}
          rateText={data.data2.rateText}
          star={fourAndHalfStar}
          number={data.data2.number}
        />
        <Card
          rate={data.data3.rate}
          spanBold={data.data3.boldPara}
          paraOne={data.data3.para1}
          paraTwo={data.data3.para2}
          rateText={data.data3.rateText}
          star={fiveStar}
          number={data.data3.number}
        />
        <Card
          rate={"9.1"}
          rateText={"Very Good"}
          star={fourStar}
          number={"4"}
        />
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
      {console.log(data.data1.number)}
    </div>
  );
};

export default Home;
