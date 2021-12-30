import './HomeCarousel.css'
import { Carousel } from 'react-bootstrap'

function HomeCarousel(props) {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="consult.jpg"
                />
                <Carousel.Caption>
                <h2>Consult with our experienced professionals </h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="design-1.jpg"
                />
                <Carousel.Caption>
                <h2>Design your transformation with us</h2>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="develop.jpg"
                />
                <Carousel.Caption>
                <h2>Engineer your future</h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export { HomeCarousel }