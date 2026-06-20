import { CircleArrowRight } from "lucide-react"
import "./Men.scss"

function Men() {
    return(
        <section id="men">
            <div className="container">
                <div className="men">
                    <div className="men-img">
                        <img src="./Men nav 1.png" alt="Men" />
                        <div className="men-text">
                            <h1>MEN</h1>
                            <p>Timeless style. Modern edge.</p>
                        </div>
                    </div>
                    <div className="men-content">
                        <div className="men-card">
                        <img src="./T short men 13.svg" alt="T" />
                        <h2>T-Shirts</h2>
                        </div>
                        <div className="men-card">
                        <img src="./T short men 12.svg" alt="T2" />
                        <h2>T-Shirts</h2>
                        </div>
                    </div>
                    <div className="best-content">
                        <h3>BEST SELLERS</h3>
                        <div className="best-text">
                            <h4>View all</h4>
                            <CircleArrowRight />
                        </div>
                    </div>
                    <div className="best-cards">
                        <div className="best-img">
                            <img src="./Best1.png" alt="1" />
                            <h6>Basic T-Shirt <br /> 
                            <span>$19.99</span></h6>
                        </div>
                        <div className="best-img">
                            <img src="./Best1.png" alt="1" />
                            <h6>Basic T-Shirt <br /> 
                            <span>$19.99</span></h6>
                        </div>
                    </div>
                    <div className="best-banner">
                        <div className="banner-img">
                            <img src="HHHH 1.png" alt="" />
                            <div className="banner-text">
                                <h4>NEW ARRIVALS</h4>
                                <h5>Shop the latest pieces.</h5>
                                <div className="banner-btn">
                                <button>SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="banner-img">
                            <img src="HHHH 2.png" alt="" />
                            <div className="banner-text">
                                <h4>NEW ARRIVALS</h4>
                                <h5>Shop the latest pieces.</h5>
                                <div className="banner-btn">
                                <button>SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Men