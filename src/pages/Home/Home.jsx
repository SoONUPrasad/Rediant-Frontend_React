import "./Home.scss";
import Card from "../../components/Card/Card";
import HorizontalCard from "../../components/HorizontalCard/HorizontalCard";
import SignUp from "../../components/Signup/SignUp";

const Home = () => {
  return (
    <div className="home-main-container">
      <div className="heading-container">
        <h2>Best Website builder in the US</h2>

        <div className="update-container">
          <div className="update">
            <div className="update-text">
              <span>Last Update - February 22, 2020</span>
            </div>
            <div className="advertising">
              <span>Advertising Disclosure</span>
            </div>
          </div>
          <div className="more">
            <span>Top Relevant</span>
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
        <Card />
        <Card />
        <Card />
        <Card />
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
