import { CircleChevronRight } from "lucide-react";
import "./Arrivel.scss";

function Arrivel() {
  return (
    <section id="arrival">
      <div className="container">
        <div className="arrival">
          <div className="arrival-text">
            <h1>NEW ARRIVALS</h1>
            <h2>View all <CircleChevronRight /> </h2>
          </div>
          <div className="arrival-imgs">
            <img src="./а4.jfif" alt="img" />
            <h3>Dress</h3>
            <h4>$32.99</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Arrivel;
