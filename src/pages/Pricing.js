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

            <div className="price-button" onClick={() => navigate('/')}>Buy Now</div>

        </div>

    )
}
