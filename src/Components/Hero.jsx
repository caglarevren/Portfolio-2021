import React from 'react'
import herosvg from '../Assets/Images/hero.svg'
import { useTranslation } from 'react-i18next'
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
            </div>
            <div>
                <img src={herosvg} alt='hero' className='hero-img' />
            </div>
        </main>
    )
}

export default Hero
