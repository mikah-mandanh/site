import { Link } from 'react-router-dom'

import './Home.css'
import { HomeCarousel } from "./HomeCarousel"

function Home(props) {
    return(
    <div className="App">
        <header className="App-header">
            M &amp; Anh Services - Coming Soon
        </header>
        <HomeCarousel />
        <div>
            <Link to="/Consult"> Schedule your Free Consultation Today</Link>
        </div>
    </div>
    )
}

export { Home }