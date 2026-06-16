import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
<header id="header">
  <div className="container">
    <div className="header">
      <div className="header-logo-wrap">
        <img src="./public/header1.svg" alt="logo" />
        <img src="./public/header2.svg" alt="logo" />
      </div>

      <nav className="header-nav">
        <ul>
         <li><Link to="/">HOME</Link></li> 
         <li><Link to="/men">MEN</Link></li> 
          <li><a href="#">WOMEN</a></li>
          <li><a href="#">SHOES</a></li>
          <li><a href="#">ACCESSORIES</a></li>
         <li><Link to="/sale">SALE</Link></li> 
       
        </ul>
      </nav>

      <div className="header-actions">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <Search size={16} />
        </div>
        <Heart size={20} />
        <ShoppingCart size={20} />
        <UserRound size={20} />
      </div>
    </div>
  </div>
</header>
  );
}
export default Header;
