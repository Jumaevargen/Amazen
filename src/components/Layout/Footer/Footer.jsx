import './Footer.scss'

function Footer(){
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-top">

          <div className="footer-col">
            <h4>SHOP</h4>
            <ul>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Men</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CUSTOMER CARE</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Size Guide</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>ABOUT US</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              <a href="#"><img src="./footer1.svg" alt="logo" /></a>
              <a href="#"><img src="./footer2.svg" alt="logo" /></a>
              <a href="#"><img src="./footer3.svg" alt="logo" /></a>
              <a href="#"><img src="./footer4.svg" alt="logo" /></a>
            </div>

            <p className="download-title">Download our app</p>
            <div className="app-buttons">
              <a href="#" className="app-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
              </a>
              <a href="#" className="app-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" />
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Amazen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer