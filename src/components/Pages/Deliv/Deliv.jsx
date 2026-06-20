import { CreditCard, MapPinned, Truck, TruckElectric } from "lucide-react";
import "./Deliv.scss";

function Deliv() {
  return (
    <section id="deliv">
      <div className="container">
        <div className="deliv">
          <div className="features-bar">
            <div className="feature-item">
              <Truck />
              <div>
                <h4>FREE SHOPPING</h4>
                <p>On orders over $75</p>
              </div>
            </div>

            <div className="feature-item">
              <TruckElectric />
              <div>
                <h4>EASY RETURNS</h4>
                <p>30+day return policy</p>
              </div>
            </div>

            <div className="feature-item">
              <CreditCard />
              <div>
                <h4>SECURE PAYMENT</h4>
                <p>100% secure checkout</p>
              </div>
            </div>

            <div className="feature-item">
              <MapPinned />
              <div>
                <h4>STORES NEAR YOU</h4>
                <p>Find a C+ Style store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Deliv;
