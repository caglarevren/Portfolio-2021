import React from 'react'
import { Link } from 'react-router-dom'
import notFoundImg from '../Assets/Images/notFound.svg'
import SocialMediaIcons from './SocialMediaIcons'
import { useTranslation } from 'react-i18next'

const PageNotFound = () => {
    const { t } = useTranslation()

    return (
        <section className='container'>
            <div className='page-not-found-wrapper'>
                <div>
                    <p className='page-not-found-number'>404</p>
                    <p className='page-not-found-text'>{t('page_not_found')}</p>
                    <SocialMediaIcons />
                    <Link to='/'>
                        <button className='btn btn-outline-danger'>
                            {t('back_to_home')}
                        </button>
                    </Link>
                </div>
                <img
                    src={notFoundImg}
                    alt='404'
                    className='page-not-found-img'
                />
            </div>
        </section>
    )
}

export default PageNotFound
