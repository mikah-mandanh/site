import './HomeCarousel.css'
import { Carousel } from 'react-bootstrap'

function HomeCarousel(props) {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="consult.jpg"
                alt="Consult with our experienced team"
                />
                <Carousel.Caption>
                <h3>Consulting Services</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="design-1.jpg"
                alt="Design your transformation with us"
                />
                <Carousel.Caption>
                <h3>Design</h3>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="develop.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Build Software</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export { HomeCarousel }