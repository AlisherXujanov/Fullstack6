import style from './header.scss'
import Theme from '../Theme'
import audioFile from '../../click.mp3'
import linkAudioFile from '../../link_click.mp3'
import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

function Nav() {
    const [theme, setTheme] = useState(false)

    function playAudio() {
        const audio = new Audio(linkAudioFile)
        audio.play()
    }
    function changeTheme() {
        const audio = new Audio(audioFile)
        audio.play()
        return setTheme(!theme)
    }

    return (
        <div>
            <nav className={theme ? "dark-theme" : "light-theme"} style={style}>
                <Link id="logo" to="/" onClick={playAudio}>Logo</Link>
                <Link to="/" onClick={playAudio}>Home</Link>
                <Link to="/About" onClick={playAudio}>About</Link>

                <a id='theme-link' href="#" onClick={changeTheme}>
                    <Theme theme={theme} />
                </a>
            </nav>
            <Outlet />
        </div>
    );
}

export default Nav;