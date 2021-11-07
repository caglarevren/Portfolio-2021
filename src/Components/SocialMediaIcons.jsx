import React from 'react'

import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs'

const SocialMediaIcons = () => {
    return (
        <div className='social-media-icons-wrapper'>
            <a
                href='https://www.linkedin.com/in/caglarevren/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <BsLinkedin size={30} className='mr-2 footer-social-icon' />
            </a>
            <a
                href='https://github.com/caglarevren'
                target='_blank'
                rel='noopener noreferrer'
            >
                <BsGithub size={30} className='mr-2 footer-social-icon' />
            </a>
            <a
                href='https://twitter.com/caglarevren_'
                target='_blank'
                rel='noopener noreferrer'
            >
                <BsTwitter
                    size={30}
                    className='mr-2 footer-social-icon-last-item'
                />
            </a>
        </div>
    )
}

export default SocialMediaIcons
