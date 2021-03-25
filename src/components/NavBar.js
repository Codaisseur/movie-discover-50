import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ marginRight: 15 }}>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/discover'>Discover Movies</Link>
      </div>
    </div>
  );
};

export default NavBar;
