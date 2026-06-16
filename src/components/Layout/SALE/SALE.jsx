import "./SALE.scss";

function SALE() {
  return (
    <section id="sale">
      <div className="container">
        <div className="sale">
          <img className="sale-img" src="./sale2.png" alt="photo" />
          <div className="sale-inf">
            <div className="sale-text">
              <h1>SALE</h1>
              <h2>Lip In 10% ofl on white lind SPyfils</h2>
            </div>
            <div className="sale-photo">
              <img src="./sale1.svg" alt="logo" />
            </div>
          </div>
        </div>
         <div className="filter">
          <div className="filter-header">
            <h1>FALTER</h1>

            <div className="filter-controls">
              <span>Filter</span>
              <select>
                <option value="popular">Popular</option>
                <option value="csocs">Csocs</option>
                <option value="shlepka">Shlepka</option>
              </select>
            </div>

            <span className="filter-count">100 dpmg</span>
          </div>

          <div className="filter-grid">
            <div className="product-card">
              <div className="card-img">
                <img src="./saleLogo1.svg" alt="New Balance" />
              </div>
              <h3>New Balance</h3>
              <div className="card-price">
                <span className="price">34.99$</span>
                <span className="sale">- sale up 20%</span>
              </div>
            </div>

            <div className="product-card">
              <div className="card-img">
                <img src="./saleLogo2.svg" alt="Nike Air" />
              </div>
              <h3>Nike Air</h3>
              <div className="card-price">
                <span className="price">62.99$</span>
                <span className="sale">- sale up 30%</span>
              </div>
            </div>

            <div className="product-card">
              <div className="card-img">
                <img src="./saleLogo3.svg" alt="Nike shoots" />
              </div>
              <h3>Nike shoots</h3>
              <div className="card-price">
                <span className="price">1200$</span>
                <span className="sale">- sale up 0%</span>
              </div>
            </div>

            <div className="product-card">
              <div className="card-img">
                <img src="./saleLogo4.svg" alt="Nike Air 2" />
              </div>
              <h3>Nike Air 2</h3>
              <div className="card-price">
                <span className="price">39.99$</span>
                <span className="sale">- sale up 40%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SALE;
