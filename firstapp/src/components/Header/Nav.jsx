import style from './header.scss'

function Nav() {
    return (
        <nav style={style}>
            <a id="logo" href="#">Logo</a>
            <a href="#">Contacts</a>
            <a href="#">About</a>
            <a href="#">Profile</a>
        </nav>
    );
}

export default Nav;