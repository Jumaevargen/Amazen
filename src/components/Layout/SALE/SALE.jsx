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
          <h1>FALTER</h1>
          <div className="fil-text">
            <h2>Filter</h2>
            <select>
              <option value="popular">Popular</option>
              <option value="csocs">Csocs</option>
              <option value="shlepka">shlepka</option>
              <option value="argen gay">argen gay</option>
            </select>
            <h4>100 dpmg</h4>
          </div>
          <div className="filter-img">
            <img src="./saleLogo1.svg" alt="logo" />
            <div className="fil-com">
              <h1>New Balance </h1>
              <div className="fil-bn">
                <h2>34.99$ - </h2>
                <h3>sale up 20%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SALE;
