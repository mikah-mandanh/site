import './Home.css'
import { HomeCarousel } from "./HomeCarousel"
import { Categories } from "./Categories"

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