import { CircleArrowRight } from "lucide-react"
import "./Women.scss"

function Women() {
    return(
        <section id="women">
            <div className="container">
                <div className="women">
                    <div className="women-img">
                        <img src="./Women1.png" alt="Women" />
                        <div className="women-text">
                            <h1>Women </h1>
                            <p>Elevated style for every moment</p>
                        </div>
                    </div>
                    <div className="women-content">
                        <div className="women-card">
                            <img src="./cards1.svg" alt="card1" />
                            <h2>Dresses</h2>
                        </div>
                        <div className="women-card">
                            <img src="./cards2.svg" alt="card2" />
                            <h2>Top</h2>
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
                            <img src="./wcards1.png" alt="" />
                            <h6>Slipn Dress <br />
                            <span>$36.99</span></h6>
                        </div>
                        <div className="best-img">
                            <img src="wcards2.png" alt="" />
                            <h6>Slipn Dress <br />
                            <span>$36.99</span></h6>
                        </div>
                    </div>
                    <div className="best-banner">
                        <div className="banner-img">
                            <img src="Banner1.jpg" alt="1" />
                            <div className="banner-text">
                                <h4>NEW ARRIVALS</h4>
                                <h5>Shop the latest pieces.</h5>
                                <div className="banner-btn">
                                    <button>SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="banner-img">
                            <img src="Baner2.png" alt="banner" />
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

export default Women