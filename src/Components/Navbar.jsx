import React from 'react'
import logoblack from '../Assets/Images/logoblack.png'
import logowhite from '../Assets/Images/logowhite.png'
import { IoMdPlanet } from 'react-icons/io'
import { IoSunny } from 'react-icons/io5'
import { AiOutlineGlobal, AiFillStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import Dropdown from 'react-bootstrap/Dropdown'

import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

import cookies from 'js-cookie'

const Navbar = ({ lightMode, setLightMode }) => {
    // For Multi-language
    const { t } = useTranslation()

    const languages = [
        {
            code: 'tr',
            name: 'Türkçe',
            country_code: 'tr',
        },
        {
            code: 'en',
            name: 'English',
            country_code: 'gb',
        },
    ]

    const currentLanguageCode = cookies.get('i18next') || 'tr'

    const handleSmoothScroll = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 64,
        })
    }

    return (
        <nav
            className={
                'navbar-wrapper' +
                (lightMode ? ' bg-lightest-border' : ' bg-darkest-border')
            }
        >
            {lightMode ? (
                <Link to='/'>
                    <img src={logoblack} alt='logo-black' className='logo' />
                </Link>
            ) : (
                <Link to='/'>
                    <img src={logowhite} alt='logo-white' className='logo' />
                </Link>
            )}
            <ul className='navbar-item-wrapper'>
                <li className='mr-2'>
                    <Link to='/blog'>
                        <AiFillStar size={20} className='mr-1' />
                        BLOG
                    </Link>
                </li>
                <li className='mr-2'>
                    <a href='#about' onClick={handleSmoothScroll}>
                        {t('about_me')}
                    </a>
                </li>
                <li className='mr-2'>
                    <a href='#backpack' onClick={handleSmoothScroll}>
                        {t('technologies_navbar')}
                    </a>
                </li>
                <li className='mr-2'>
                    <a href='#youtube' onClick={handleSmoothScroll}>
                        YOUTUBE
                    </a>
                </li>
                <li>
                    <a href='#contact' onClick={handleSmoothScroll}>
                        {t('contact')}
                    </a>
                </li>
            </ul>

            <div className='d-flex align-items-center'>
                <Link to='/blog' className='blog-navbar-right'>
                    <AiFillStar size={20} className='mr-1' />
                    BLOG
                </Link>
                <Dropdown>
                    <Dropdown.Toggle
                        id='dropdown-basic'
                        variant='outline-danger'
                        className='mr-2'
                    >
                        <AiOutlineGlobal size={30} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {languages.map(({ code, name, country_code }) => (
                            <Dropdown.Item
                                key={country_code}
                                onClick={() => i18next.changeLanguage(code)}
                                disabled={code === currentLanguageCode}
                            >
                                <span
                                    className={`flag-icon flag-icon-${country_code} mr-1`}
                                    style={{
                                        opacity:
                                            code === currentLanguageCode
                                                ? 0.5
                                                : 1,
                                    }}
                                ></span>
                                {name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <div
                    className='dark-mode-icon-wrapper'
                    onClick={() => setLightMode(!lightMode)}
                >
                    {lightMode ? (
                        <IoSunny size={30} />
                    ) : (
                        <IoMdPlanet size={30} />
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
