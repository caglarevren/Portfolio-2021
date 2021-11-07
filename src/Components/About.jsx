import React from 'react'
import about from '../Assets/Images/aboutphoto.jpg'

import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()

    return (
        <section className='about-section-container' id='about'>
            <div className='container'>
                <h3 className='about-title'>HAKKIMDA</h3>
                <div className='about-inner-container'>
                    <img src={about} alt='about me' />
                    <div>
                        <p>{t('about_info')}</p>
                        <p>{t('technologies')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
