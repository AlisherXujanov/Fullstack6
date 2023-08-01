import style from './header.scss'
import Theme from '../Theme'
import audioFile from '../../click.mp3'
import { useState } from 'react'

function Nav() {
    const [theme, setTheme] = useState(false)

    function changeTheme() {
        const audio = new Audio(audioFile)
        audio.play()
        return setTheme(!theme)
    }

    return (
        <nav className={theme ? "dark-theme" : "light-theme"} style={style}>
            <a id="logo" href="#">Logo</a>

            <a href="#">Contacts</a>
            <a href="#">About</a>
            <a href="#">Profile</a>
            <a id='theme-link' href="#" onClick={changeTheme}>
                <Theme theme={theme} />
            </a>
        </nav>
    );
}

export default Nav;