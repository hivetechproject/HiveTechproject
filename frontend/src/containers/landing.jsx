import Card from "../componets/card";

import One from '../assets/img/1.png'
import Two from '../assets/img/2.png'
import Three from '../assets/img/3.png'
import Four from '../assets/img/4.png'

import f1 from '../assets/img/f1.png'
import f2 from '../assets/img/f2.png'
import f3 from '../assets/img/f3.png'
import f4 from '../assets/img/f4.png'

import Hero from '../assets/img/Hero.png'
import Header from "../componets/header";
const Home = () => {
    return (
        <>
            <Header />
            <div className="hero">
                <img src={Hero} alt="" />
                <div className="text-area">
                    <p className="heading">Clothing Divine getting</p>
                    <p className="heading">Everyone’s Favourite</p>
                    <p className="para">This Season’s most - loved Styles</p>
                </div>
            </div>

            <div className="offer">
                <p>Get Up To 50% off</p>
                <p>On all products and brands</p>
                <div className="category-link">
                    <a href="#"><span>Shop woman's</span></a>

                    <a href="#"><span>Shop man's</span></a>
                </div>
            </div>

            <div className="categories">
                <span>Categories</span>
                <div className="category-wrapper">
                    <Card img={One} />
                    <Card img={Two} />
                    <Card img={Three} />
                    <Card img={Four} />
                </div>
            </div>

            <div className="offer-section">
                <span className="offer-heading">Offer</span>
                <div className="category-wraper">

                    <div className="offer-card">
                        <span className="main-text"></span>
                        <span className="subtext" style={{ color: '#C2E3FD' }}>On all the
                            Tshirts brands</span>
                        <button style={{ background: '#BECDBC', color: '#105262' }} className="button">GET NOW</button>
                        <img src={f1} alt="" />
                    </div>

                    <div className="offer-card">
                        <span className="main-text" style={{ color: '#F6F8F2' }}>UP TO 50% off</span>
                        <span style={{ color: '#F6F8F2' }} className="subtext">On all the
                            Bottom brands</span>
                        <button className="button" style={{ background: '#ECA927', color: '#000' }}>GET NOW</button>
                        <img src={f2} alt="" />
                    </div>

                    <div className="offer-card">
                        <span className="main-text" style={{ color: '#fff' }}>UP TO 25% off</span>
                        <span className="subtext" style={{ color: '#fff' }}>On all the Hats brands</span>
                        <button className="button" style={{ background: '#fff', color: '#000' }}>GET NOW</button>
                        <img src={f3} alt="" />
                    </div>

                    <div className="offer-card">
                        <span className="main-text" style={{ color: '#E8C7BB' }}>UP TO 30% off</span>
                        <span className="subtext" style={{ color: '#E8C7BB' }}>On all the Shirts brands</span>
                        <button className="button" style={{ background: '#C4977F', color: '#fff' }}>GET NOW</button>
                        <img src={f4} alt="" />
                    </div>
                </div>
            </div>

        </>
    )

}

export default Home;