import React, { useState, useEffect } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

import { useTranslation } from 'react-i18next'

const GoUp = () => {
    const { t } = useTranslation()

    const [isVisable, setIsVisable] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisable(true)
        } else {
            setIsVisable(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
    }, [])

    const goToTop = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 64,
        })
    }

    return (
        <button
            className={
                'btn-go-up' + (isVisable ? ' opacity-100' : ' opacity-0')
            }
            href='#home'
            onClick={goToTop}
            type='button'
        >
            <AiOutlineArrowUp />
            <span>{t('go_up')}</span>
        </button>
    )
}

export default GoUp
