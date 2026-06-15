import "./Hero.scss";


function Hero() {
  return (
    <section id="hero">
      <div className="companent">
        <div className="hero">
          <img src="/Hero.png" alt="photo" />
          <div className="hero-text">
            <h1>
              WEAR YOUR <span>CONFIDENCE</span>
            </h1>
            <p>
              Trendy pieces. Timeless style. <br />
              C-Style has everything you need to look <br /> and feel your best
            </p>
            <div className="hero-btn">
              <button className="left">SHOP NEW IN</button>
              <button className="right">EXPLORE COLLECTIONS</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
