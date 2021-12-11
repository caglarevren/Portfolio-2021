import React from 'react'
import { Link } from 'react-router-dom'
import herosvg from '../Assets/Images/hero.svg'
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button'
import { FaArrowRight } from 'react-icons/fa'
import SocialMediaIcons from './SocialMediaIcons'

const Hero = () => {
    const { t } = useTranslation()

    return (
        <main className='container hero-container'>
            <div>
                <p>{t('hello_me')}</p>
                <h1>ÇAĞLAR EVREN</h1>
                <p>Frontend Developer</p>
                <SocialMediaIcons />
                <Link to='/blog'>
                    <Button variant='outline-danger' className='read-a-blog'>
                        {t('read_a_blog')}
                        <FaArrowRight className='ml-2' />
                    </Button>
                </Link>
            </div>
            <div>
                <img src={herosvg} alt='hero' className='hero-img' />
            </div>
        </main>
    )
}

export default Hero
