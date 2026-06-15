import './Regist.scss'

function Regist() {
    return(
        <section id="regist">
            <div className="container">
                <div className="regist">
                    <div className="regist-text">
                        <h1>BE THE FIRST TO KNOW </h1>
                        <h2>Sign up for updates, new arrivals, exclusive offers.</h2>
                    </div>
                    <div className="regist-in">
                        <input type="email" placeholder='Enter your email ' />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Regist;