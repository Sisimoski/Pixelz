import React from 'react'
import Carousel from "react-bootstrap/Carousel"
import baner from "../../media/baner2.jpg"
import pc from "../../media/pclogo.png"
import nin from "../../media/nintendo.png"
import xbox from "../../media/xboxlogo.jpg"
import ps4 from "../../media/pslogo.png"
import "./style.css"
function Intro() {
    return (
        <div className="karuzela">
            <Carousel fade>
                <Carousel.Item interval={500}>
                    <img
                        className="photo"
                        src={baner}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="photo"
                        src={pc}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="photo"
                        src={xbox}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="photo"
                        src={nin}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="photo"
                        src={ps4}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Intro
