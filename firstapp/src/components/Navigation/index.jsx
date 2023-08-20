import Nav from './Nav.jsx'
import "./header.scss"
import CarouselComponent from '../CarouselComponent'

const Navigation = () => {
    return (
        <div id='peak'>
            <header id='top-id'>
               <CarouselComponent />
            </header>

            <Nav />
        </div>
    )
}

export default Navigation;
