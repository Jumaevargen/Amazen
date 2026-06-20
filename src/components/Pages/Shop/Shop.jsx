import { CircleChevronRight } from "lucide-react";
import "./Shop.scss";

function Shop() {
  return (
    <section id="shop">
      <div className="container">
        <div className="shop">
          <div className="shop-text">
            <h1>SHOP BY CATEGORY</h1>
            <h2>View all <CircleChevronRight /> </h2>
          </div>
          <div className="shop-imgs">
            <img src="./а4.jfif" alt="img" />
            <h3>Dress</h3>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
