import './Header.scss';
import { Search, Heart, ShoppingCart, User } from "lucide-react";

function Header() {
  return(
    <div id='header'>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <img src="./Logo1.png" alt="logo1" />
            <img src="./Logo2.png" alt="logo2" />
          </div>
          <div className="header-nav">
            <a href="#">NEW IN</a>
            <a href="#">MEN</a>
            <a href="#">WOMEN</a>
            <a href="#">SHOES</a>
            <a href="#">ACCESSORIES</a>
            <a href="#">SALE</a>
          </div>
          <div className="header-icons">
            <Search />
            <Heart />
            <ShoppingCart />
            <User />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header;
