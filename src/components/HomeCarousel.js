import './HomeCarousel.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HomeCarousel(props) {
    
    return(
        <Carousel showThumbs={false}>
        <div>
            <img src="consult.jpg" />
            <p className="legend">Consult</p>
        </div>
        <div>
            <img src="design-1.jpg" />
            <p className="legend">Design</p>
        </div>
        <div>
            <img src="develop.jpg" />
            <p className="legend">Build</p>
        </div>
        </Carousel>
    )
}

export { HomeCarousel }