import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="search">
        <input type="text"></input>
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
