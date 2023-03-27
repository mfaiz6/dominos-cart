import './navbar.css'
import logo from '../../assets/logo_white.svg'

const Navbar = () => {
    
    return (
        <>
            <div className="navbarSection">


                <div className="navLogoContainer">
                    <span className="material-symbols-outlined menuToggler">menu</span>
                    <img src={logo} alt="logo" />
                </div>


                <div className="navOptionsContainer">
                    <hr className='navOptionBorder' />
                    <div className="navOption">
                        <i className='material-symbols-outlined navLocationToggles'>radio_button_unchecked</i>
                        <span>Delivery</span>
                        <div className='navOptionchecked'></div>
                    </div>

                    <div className="navOption navPickupColor">
                        <i className='material-symbols-outlined navLocationToggles'>radio_button_unchecked</i>
                        <span>Pick up/ Dine in</span>
                    </div>

                </div>


                <div className="navLocationContainer">

                    <div>
                        <i className="material-symbols-outlined navLocation">edit_location_alt</i>
                    </div>

                    <div className='navLocationText'>
                        <p>Select Location</p>
                        <p className='navLocationSubText'>Select location for accurate menu listings</p>
                    </div>

                    <div>
                        <i className="material-symbols-outlined navLocationEdit">edit</i>
                    </div>

                </div>


                <div className="navAccountContainer">

                    <div>
                        <span className="material-symbols-outlined navAccount">account_circle</span>
                    </div>

                    <div className='navAccountText'>
                        <p className='navAccountTextHead'>My Account</p>
                        <p className='navAccountTextSubHead'>Login / Signup</p>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Navbar