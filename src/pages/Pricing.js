import { useNavigate } from 'react-router-dom'
import './Pricing.css'

export default function Pricing() {

    const navigate = useNavigate();

    return (
        <div className='pricing'>
            <div className="price-text">
                <h1 style={{ marginBottom: '20px' }}>Pricing</h1>
                <p>SStream offers a variety of plans to meet your entertainment needs.

                    As a SStream member, you are charged monthly on the date you signed up. A SStream account is for people who live together in a single household. Learn more about sharing SStream.</p>

            </div>


            <div className="pricing-table">
                <div className="devices">
                    <big className="space"> </big>
                    <big className="mobile">Mobile</big>
                    <big className="basic">Basic</big>
                    <big className="standard">Standard</big>
                    <big className="premium">Premium</big>

                </div>

                <div className="prices">
                    <h3>Price</h3>
                    <span>₹199</span>
                    <span>₹499</span>
                    <span>₹649</span>
                    <span>₹799</span>
                </div>

                <div className="quality">
                    <h3>Video Quality</h3>
                    <span>Good</span>
                    <span>Good</span>
                    <span>Better</span>
                    <span>Best</span>
                </div>

                <div className="resolution">
                    <h3>Resolution</h3>
                    <span>480p</span>
                    <span>720px</span>
                    <span>1080p</span>
                    <span>4k HDR</span>
                </div>

                <div className="numberofdevices">
                    <h3>Number of Devices</h3>
                    <span>1</span>
                    <span>1</span>
                    <span>2</span>
                    <span>4</span>
                </div>


            </div>


            {/* mobile-view  */}

            <div className="mobile-pricing-table">

                <div className="paise price-1">
                    <h2>
                        Mobile
                    </h2>
                    <div className="prices-content">
                        Price: 199 <br /><br />
                        Video Quality: Good <br /><br />
                        Resolution: 480p <br /><br />
                        Number of devices:1
                    </div>
                </div>
                <div className="paise price-2">
                    <h2>
                        Basic
                    </h2>
                    <div className="prices-content">
                        Price: 499 <br /><br />
                        Video Quality: Good <br /><br />
                        Resolution: 720p <br /><br />
                        Number of devices:1
                    </div>
                </div>
                <div className="paise price-3">
                    <h2>
                        Standard
                    </h2>
                    <div className="prices-content">
                        Price: 649 <br /><br />
                        Video Quality: Better <br /><br />
                        Resolution: 1080p <br /><br />
                        Number of devices:2
                    </div>
                </div>
                <div className="paise price-4">
                    <h2>
                        Premium
                    </h2>
                    <div className="prices-content">
                        Price: 799 <br /><br />
                        Video Quality: Best <br /><br />
                        Resolution: 4k <br /><br />
                        Number of devices:4
                    </div>
                </div>

            </div>

            <div className="price-button" onClick={() => navigate('/')}>Buy Now</div>

        </div>

    )
}
