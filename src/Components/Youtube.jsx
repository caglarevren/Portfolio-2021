import React from 'react'

import youtubepng from '../Assets/Images/youtube.png'
import Button from 'react-bootstrap/Button'
import { AiFillPlayCircle } from 'react-icons/ai'

import { useTranslation } from 'react-i18next'

const Youtube = ({ lightMode }) => {
    const { t } = useTranslation()

    return (
        <section
            className={
                'youtube-outer-container' + (lightMode ? ' bg-white' : '')
            }
            id='youtube'
        >
            <div className='container'>
                <h3>YouTube</h3>
                <div className='youtube-inner-container'>
                    <div className='youtube-image-container'>
                        <a
                            href='https://www.youtube.com/channel/UCjxrKeIDHHGDQa4yoSv8qZQ'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={youtubepng}
                                className='youtube-img'
                                alt='youtube channel'
                            />

                            <AiFillPlayCircle size={60} />
                        </a>
                    </div>
                    <div className='youtube-info-container'>
                        <p>{t('youtube_info_one')}</p>
                        <p>{t('youtube_info_two')}</p>
                        <div className='youtube-btn-container'>
                            <a
                                href='https://www.youtube.com/channel/UCjxrKeIDHHGDQa4yoSv8qZQ'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Button variant='outline-danger'>
                                    {t('youtube_btn')}
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Youtube
