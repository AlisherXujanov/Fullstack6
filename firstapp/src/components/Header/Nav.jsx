import style from './header.scss'
import Theme from '../Theme'

function Nav() {
    return (
        <nav style={style}>
            <a id="logo" href="#">Logo</a>

            <a href="#">Contacts</a>
            <a href="#">About</a>
            <a href="#">Profile</a>
            <a id='theme-link' href="#">
                <Theme />
            </a>
        </nav>
    );
}

export default Nav;