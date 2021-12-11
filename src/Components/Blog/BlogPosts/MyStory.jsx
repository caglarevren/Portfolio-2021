import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import GoUp from '../../GoUp'
import Button from 'react-bootstrap/Button'

//Css Files
import '../../../Styles/Blog.css'

import { useTranslation } from 'react-i18next'

const MyStory = ({ lightMode, setLightMode }) => {
    const { t } = useTranslation()

    return (
        <div className='center-text-outer-container'>
            <Helmet>
                <title>
                    Universite Okumadan Nasıl Yazılımcı Oldum | Çağlar Evren
                    Blog
                </title>
                <meta
                    name='title'
                    content='Universite Okumadan Nasıl Yazılımcı Oldum | Çağlar Evren Blog'
                />
                <meta
                    name='description'
                    content='Yazılım ile ilgili hiçbir bölüm okumdan, nasıl yazılımcı oldum.'
                />
                <meta
                    itemprop='keywords'
                    content='Yazılımcı nasıl olunur, üniversite okumadan yazılımcı olmak, nasıl yazılımcı olurum, yazılım, yazılım maaşları, yazılım nasıl iş bulurum'
                />
            </Helmet>
            <Navbar lightMode={lightMode} setLightMode={setLightMode} />
            <div className='container'>Hello World</div>
            <Footer lightMode={lightMode} />
            <GoUp />
        </div>
    )
}

export default MyStory
