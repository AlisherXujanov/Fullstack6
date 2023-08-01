import style from './header.scss'
import Theme from '../Theme'
import { useState } from 'react'

function Nav() {
    const [theme, setTheme] = useState('light')

    return (
        <nav className={theme ? "dark-theme" : "light-theme"} style={style}>
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