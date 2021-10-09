
import { NavLink } from 'react-router-dom'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import MyButton from '../../Components/MyButton/MyButton'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import "./About.css"
const About = () => {
    return (
        <div>
                <Breadcrumb>
            <li class="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                <li class="breadcrumb-item active">About</li>
            </Breadcrumb>
            <div className="par-1 par">
                <div className="container">
                    <h4>
                    Our company
                   <br /> & our products.
                    </h4>
                </div>
            </div>
            <div className="container about-text">
                <p>
                We are a group of experienced & passionate individuals with a keen interest in fashion, fitness, fitness wear and accessories. We aim to create unique, stylish & affordable products which are the best in their category.

                </p>
                <p>
                As with the growing clothing fashion, taking it to vast trends, theepicapparel decided to jump in the industry with the top notch apparel to fulfill your desired fitness clothing needs. People of gym looks for "everything tapered" right ? so, we decided to provide you a better wave of fitness experience you always strive for.
                </p>
            </div>
            <div className="par-2 par">
            
            </div>
            <div className="container about-text ">
                <h4 className="mb-5">
                Our design philosophy is guided <br /> by form, fashion and functionality.
                </h4>
                <p className="pl-5">
                As with the growing clothing fashion, taking it to vast trends, theepicapparel decided to jump in the industry with the top notch apparel to fulfill your desired fitness clothing needs. People of gym looks for "everything tapered" right ? so, we decided to provide you a better wave of fitness experience you always strive for.
                </p>
            </div>
            <div className="par-3 par">
            
            </div>
            <div className="text-center my-5">
                <h1 style={{textTransform:"uppercase",letterSpacing:"3px",margin:"2rem 0"}}>Accessories are essentials
</h1>
<p className="mt-5">
We've got something cool in our category. <br /> Discover now !  
</p>
<MyButton className="btn-primary ">
        D I S C O V E R
      </MyButton>
      <NewsLetter/>
            </div>
        </div>
    )
}

export default About
