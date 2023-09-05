import style from './header.scss'
import Theme from '../Theme'
import Footer from './Footer.jsx'
import audioFile from '../../Assets/Sounds/click.mp3'
import linkAudioFile from '../../Assets/Sounds/link_click.mp3'

import { Outlet, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'



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

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollHeihgt = window.scrollY
            if (scrollHeihgt < 300) {
                document.querySelector('nav').style.backgroundColor = '#ffffff30'
            } else {
                document.querySelector('nav').style.backgroundColor = '#1f1f1f'
            }
        })
    }, [window.scrollY])

    return (
        <div>
            <nav className={theme ? "dark-theme" : "light-theme"} style={style}>
                <Link id="logo" to="/" onClick={playAudio}>Logo</Link>
                <Link to="/" onClick={playAudio}>Home</Link>
                <Link to="/about" onClick={playAudio}>About</Link>
                <Link to="/posts" onClick={playAudio}>Posts</Link>
                <Link to="/translation" onClick={playAudio}>Translation</Link>
                <Link to="/email" onClick={playAudio}>Emails</Link>

                <a id='theme-link' href="#" onClick={changeTheme}>
                    <Theme theme={theme} />
                </a>
            </nav>

            <div id='outlet'>
                <Outlet />
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Nav;