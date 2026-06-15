import "./Card.scss";

function Card() {
  return (
    <section id="card">
      <div className="container">
        <div className="card">
          <div className="card-sum">
            <img src="./card 1.svg" alt="logo" />
            <div className="sum-text">
                  <h1>
              SUMMER <br /> COLLECTION
            </h1>
            <h2>Up to 40% off</h2>
            </div>
          </div>
          <div className="card-sea">
            <img src="./card2.svg" alt="logo" />
             <div className="sea-text">
                 <h1>
              NEW SEASON , <br />
              NEW YOU
            </h1>
            <h2>Discover the latest trends</h2>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
