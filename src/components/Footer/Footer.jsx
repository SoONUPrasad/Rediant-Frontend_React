import "./Footer.scss";
import down from "../../assets/png/down.png"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="categories">
        <h6>CATEGORIES</h6>
        <ul>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>
      </div>
      <div className="contact">
        <h6>CONTACT</h6>
        <ul>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div className="united-states">
        <p>United States <span><img src={down} alt="down" /></span></p>
      </div>
    </footer>
  );
};

export default Footer;
