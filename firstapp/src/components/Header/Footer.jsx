import logo from '../../Assets/Images/logo.png'

function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <img
                    src={logo}
                    alt="AC logo"
                    width={30} height={40}
                />
                ©️ 2023 <br />
                by Alisher Company and Fullstack Co.
            </div>

            <div className="right">
                <ul>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact AC</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
                <ul>
                    <li><a href="#">API</a></li>
                    <li><a href="#">Training</a></li>
                    <li><a href="#">Status</a></li>
                    <li><a href="#">Security</a></li>
                </ul>
                <ul>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Docs</a></li>
                </ul>
                <span id='go-to-top'>
                    <a href="#top-id">🔝</a>
                </span>
            </div>
        </div>
    );
}

export default Footer;