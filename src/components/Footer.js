import './Footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>

            </div>

            <div className="call"><big>Questions? Call 1-888-494-2581</big></div>

            <div className="footer-box">
                <div className="faq">
                    <p>FAQ</p>
                    <p>Investor Relations</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                    <p>SStream Origins</p>
                </div>
                <div className="Help-center">
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>

                </div>
                <div className="account">
                    <p>Account</p>
                    <p>Redeem Gift Cards</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>
                <div className="media-center">
                    <p>Media Center</p>
                    <p>Buy Gifts Card</p>
                    <p>Cooke Preferences</p>
                    <p>Legal Notices</p>
                </div>
            </div>

        </div>
    )
}
