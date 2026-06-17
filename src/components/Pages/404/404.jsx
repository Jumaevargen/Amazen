import { Home } from 'lucide-react'
import './404.scss'



function NotFound(){
    return (
        <section id='NotFound'>
            
        <div className="container">
            <div className="NotFound">
                <div className="NotFound-text">
                    <h1>404</h1>
                    <h2>PAGE NOT FOUND</h2>
                    <p>Oops! The page you're looking for <br /> couldn't be found.</p>
                    <button>BACK TO HOME</button>
                </div>
                <div className="NotFound-img">
                    <img src="/404.img.svg" alt="image" />
                </div>
            </div>
        </div>
        </section>
    )
}


export default NotFound