import Nav from './Nav.jsx'

const Header = ({ test, children }) => {

    return (
        <div>
            <Nav />

            <h1>Header</h1>
            <p>
                {false ? children : test}
            </p>
        </div>
    )
}

export default Header;