import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import Navbar from '../Navbar'
import Footer from '../Footer'
import BlogCard from './BlogCard'

import { useTranslation } from 'react-i18next'

// Css Files
import '../../Styles/Blog.css'
import { Col, Row } from 'react-bootstrap'

// Blog Images
import avatarImg from '../../Assets/Images/avatarImg.JPG'
import centerElementsImg from '../../Assets/Images/CenterTextArticle/centerElementsMain.png'
import arrayMethodsImg from '../../Assets/Images/JavaScriptArrayMethods/JavaScriptArrayMethods.png'
import questionMarkImg from '../../Assets/Images/MyStory/questionMark.jpg'

const Blog = ({ lightMode, setLightMode }) => {
    const { t } = useTranslation()

    const blogContents = [
        {
            title: t('center_text_card_info'),
            info: t('center_text_card_info_second'),
            image: centerElementsImg,
            image_alt: t('center_text_image_alt'),
            avatarImg: avatarImg,
            avatar_img_alt: 'blog-avatar',
            date: t('center_text_card_date'),
            url: '/css-ile-element-ortalamak',
        },
        {
            title: t('array_methods_card_title'),
            info: t('array_methods_card_info'),
            image: arrayMethodsImg,
            image_alt: t('center_text_image_alt'),
            avatarImg: avatarImg,
            avatar_img_alt: t('array_methods_card_title'),
            date: t('array_methods_card_date'),
            url: '/javascript-array-metodlari',
        },
        {
            title: 'Üniversite Okumadan Nasıl Yazılımcı Oldum',
            info: 'Bu blog yazısında sizlere yazılımla ilgili hiç bir üniversite bölümü okumadan, nasıl yazılımcı olduğumdan bahsedeceğim.',
            image: questionMarkImg,
            image_alt: 'Soru işareti',
            avatarImg: avatarImg,
            avatar_img_alt: t('array_methods_card_title'),
            date: t('array_methods_card_date'),
            url: '/universite-okumadan-nasil-yazilimci-oldum',
        },
    ]

    return (
        <div className='blog-section-outer-container'>
            <Helmet>
                <title>Bütün Yazılar | Çağlar Evren Blog</title>
                <meta
                    name='title'
                    content='Bütün Yazılar | Çağlar Evren Blog'
                />
                <meta name='description' content='Çağlar Evren Blog.' />
            </Helmet>
            <Navbar lightMode={lightMode} setLightMode={setLightMode} />
            <section className='blog-section'>
                <div className='container'>
                    <div className='blog-section-text'>
                        <h1>Çağlar Evren Blog</h1>
                        <p>{t('blog_info')}</p>
                    </div>
                    <Row className='blog-section-general-row'>
                        {blogContents.map((blogContent) => (
                            <Col lg={4} key={blogContent.title}>
                                <Link to={blogContent.url}>
                                    <BlogCard blogContent={blogContent} />
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
            <Footer lightMode={lightMode} />
        </div>
    )
}

export default Blog
