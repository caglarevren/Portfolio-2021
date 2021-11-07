import React from 'react'
import logoBlack from '../Assets/Images/handwritten-black.png'
import logoWhite from '../Assets/Images/handwritten-white.png'
import SocialMediaIcons from './SocialMediaIcons'

const Footer = ({ lightMode }) => {
    return (
        <footer
            className={
                'footer-section-wrapper' + (lightMode ? ' bg-white' : '')
            }
        >
            {lightMode ? (
                <img
                    src={logoBlack}
                    alt='el yazısı logo'
                    className='logo-handwritten'
                />
            ) : (
                <img
                    src={logoWhite}
                    alt='el yazısı logo'
                    className='logo-handwritten'
                />
            )}

            <SocialMediaIcons />
            <div className='footer-year'>&copy; {new Date().getFullYear()}</div>
        </footer>
    )
}

export default Footer
