import Nav from './Nav.jsx'
import "./header.scss"
import CarouselComponent from '../CarouselComponent'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div id='peak'>
            <header id='top-id'>
               <CarouselComponent />
            </header>

            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                    <Link to={'test/'}>Test</Link>
                </li>
            </ul>

            <Nav />
        </div>
    )
}

export default Navigation;
