import Nav from './Nav.jsx'
import "./header.scss"

const Header = () => {

    let headingStyle = { 
        color: "red", 
    }

    return (
        <div id='peak'>
            <header>
                <h1 style={headingStyle}>Header Text</h1>
            </header>

            <Nav />
        </div>
    )
}

export default Header;
