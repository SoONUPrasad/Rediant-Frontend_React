import "./Navbar.scss";
// import search from "../../assets/svg/search-svgrepo-com.svg";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="search">
        <input type="text">
          {/* <img src={search} alt="search"/> */}
        <Logo />
        </input>
      </div>
      <ul className="nav-links">
        <li>Categories</li>
        <li>Website Builders</li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>Today's deals</li>
      </ul>
    </nav>
  );
};

export default Navbar;
