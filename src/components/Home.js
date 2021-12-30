import './Home.css'
import { HomeCarousel } from "./HomeCarousel"

function Home(props) {
    return(
    <div className="App">
        <header className="App-header">
            M &amp; Anh Services - Coming Soon
        </header>
        <HomeCarousel />
    </div>
    )
}

export { Home }