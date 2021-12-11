import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import GoUp from '../../GoUp'
import Button from 'react-bootstrap/Button'

import centerElementsImg from '../../../Assets/Images/CenterTextArticle/centerElementsMain.png'
import textCenterImg from '../../../Assets/Images/CenterTextArticle/text_center_img.png'
import marginAutoImg from '../../../Assets/Images/CenterTextArticle/margin_auto.png'
import absoluteVerticalImg from '../../../Assets/Images/CenterTextArticle/absolute_vertical_element.png'
import flexAlignCenter from '../../../Assets/Images/CenterTextArticle/flex_align_center.png'

//Css Files
import '../../../Styles/Blog.css'

import { useTranslation } from 'react-i18next'

const CenterElement = ({ lightMode, setLightMode }) => {
    const { t } = useTranslation()

    return (
        <div className='center-text-outer-container'>
            <Helmet>
                <title>Css ile Elementleri Ortalamak | Çağlar Evren Blog</title>
                <meta
                    name='title'
                    content='Css ile Elementleri Ortalamak | Çağlar Evren Blog'
                />
                <meta
                    name='description'
                    content='Css ile elementleri ortalamak, web geliştirmede en çok kullanılan özelliklerden biridir.'
                />
                <meta
                    itemprop='keywords'
                    content='Css ile Elementleri Ortalamak, css ile div ortalamak, div ortalamak, element ortalamak, text ortalama, css ile yatay ortalama, css ile dikey ortalama, css, flexbox,'
                />
            </Helmet>
            <Navbar lightMode={lightMode} setLightMode={setLightMode} />
            <div className='container'>
                <h1 className='text-center center-elements-title'>
                    {t('center_text_card_info')}
                </h1>
                <div className='d-flex justify-content-center'>
                    <img
                        src={centerElementsImg}
                        alt='css element ortalama'
                        className='center-element-img'
                    />
                </div>
                <div className='center-text-content-container'>
                    <p className='mt-6 mb-3 center-text-blog-title'>
                        {t('center_text_blog_title')}
                    </p>
                    <p>{t('center_text_blog_desc')}</p>
                    <h3 className='mt-6 mb-3'>{t('center_text_opening')}</h3>
                    <p>{t('center_text_opening_desc')}</p>
                    <h3 className='mt-6 mb-3'>
                        {t('center_text_align_title')}
                    </h3>
                    <p>{t('center_text_align')}</p>
                    <div className='code-container'>
                        <span>&lt;div class="container"&gt;</span>
                        <span className='ml-3'>
                            &lt;p&gt;Hello World&lt;/p&gt;
                        </span>
                        <span>&lt;/div&gt;</span>
                    </div>
                    <div className='code-container'>
                        <span>.container &#123;</span>
                        <span className='ml-3'>width: 300px;</span>
                        <span className='ml-3'>height: 300px;</span>
                        <span className='ml-3'>background-color: tomato;</span>
                        <span className='mb-3'>&#125;</span>
                        <span>p &#123;</span>
                        <span className='ml-3 text-success'>
                            text-align: center;
                        </span>
                        <span className='ml-3'>color: white;</span>
                        <span className='ml-3'>font-size: 24px;</span>
                        <span>&#125;</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src={textCenterImg} alt='metni yatay ortalamak' />
                    </div>
                    <h3 className='mt-6 mb-3'>
                        {t('center_text_margin_auto')}
                    </h3>
                    <p>{t('center_text_margin_auto_desc')}</p>
                    <div className='code-container'>
                        <span>&lt;div class="container"&gt;</span>
                        <span className='ml-3'>
                            &lt;div class="child-element"&gt;&lt;/div&gt;
                        </span>
                        <span>&lt;/div&gt;</span>
                    </div>
                    <div className='code-container'>
                        <span>.container &#123;</span>
                        <span className='ml-3 text-success'>width: 300px;</span>
                        <span className='ml-3'>height: 300px;</span>
                        <span className='ml-3'>background-color: tomato;</span>
                        <span className='mb-3'>&#125;</span>
                        <span>.child-element &#123;</span>
                        <span className='ml-3'>width: 50px;</span>
                        <span className='ml-3'>height: 50px;</span>
                        <span className='ml-3'>background-color: blue;</span>
                        <span className='ml-3 text-success'>
                            margin: 0 auto;
                        </span>
                        <span>&#125;</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src={marginAutoImg} alt='margin auto' />
                    </div>
                    <h3 className='mt-6 mb-3'>
                        {t('center_text_horizontally_flexbox')}
                    </h3>
                    <p>{t('center_text_horizontally_flexbox_desc')}</p>
                    <div className='code-container'>
                        <span>&lt;div class="container"&gt;</span>
                        <span className='ml-3'>
                            &lt;div class="child-element"&gt;&lt;/div&gt;
                        </span>
                        <span>&lt;/div&gt;</span>
                    </div>
                    <div className='code-container'>
                        <span>.container &#123;</span>
                        <span className='ml-3'>width: 300px;</span>
                        <span className='ml-3'>height: 300px;</span>
                        <span className='ml-3'>background-color: tomato;</span>
                        <span className='ml-3 text-success'>
                            display: flex;
                        </span>
                        <span className='ml-3 text-success'>
                            justify-content: center;
                        </span>
                        <span className='mb-3'>&#125;</span>
                        <span>.child-element &#123;</span>
                        <span className='ml-3'>width: 50px;</span>
                        <span className='ml-3'>height: 50px;</span>
                        <span className='ml-3'>background-color: blue;</span>
                        <span>&#125;</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img src={marginAutoImg} alt='margin auto' />
                    </div>
                    <h3 className='mt-6 mb-3'>{t('center_text_vertically')}</h3>
                    <p>{t('center_text_vertically_desc')}</p>
                    <div className='code-container'>
                        <span>&lt;div class="container"&gt;</span>
                        <span className='ml-3'>
                            &lt;div class="child-element"&gt;&lt;/div&gt;
                        </span>
                        <span>&lt;/div&gt;</span>
                    </div>
                    <div className='code-container'>
                        <span>.container &#123;</span>
                        <span className='ml-3'>width: 300px;</span>
                        <span className='ml-3'>height: 300px;</span>
                        <span className='ml-3'>background-color: tomato;</span>
                        <span className='ml-3 text-success'>
                            display: flex;
                        </span>
                        <span className='ml-3 text-success'>
                            align-items: center;
                        </span>
                        <span className='mb-3'>&#125;</span>
                        <span>.child-element &#123;</span>
                        <span className='ml-3'>width: 50px;</span>
                        <span className='ml-3'>height: 50px;</span>
                        <span className='ml-3'>background-color: blue;</span>
                        <span>&#125;</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img
                            src={absoluteVerticalImg}
                            alt='elementi dikey ortalamak'
                        />
                    </div>
                    <h3 className='mt-6 mb-2'>
                        {t('center_element_vertically_horizontally')}
                    </h3>
                    <h3 className='mt-5 mb-3'>
                        {t('center_element_ver_hor_transform')}
                    </h3>
                    <p>{t('center_element_ver_hor_transform_desc')}</p>
                    <div className='code-container'>
                        <span>&lt;div class="container"&gt;</span>
                        <span className='ml-3'>
                            &lt;div class="child-element"&gt;&lt;/div&gt;
                        </span>
                        <span>&lt;/div&gt;</span>
                    </div>
                    <div className='code-container'>
                        <span>.container &#123;</span>
                        <span className='ml-3'>width: 300px;</span>
                        <span className='ml-3'>height: 300px;</span>
                        <span className='ml-3'>background-color: tomato;</span>
                        <span className='ml-3 text-success'>
                            position: relative;
                        </span>
                        <span className='mb-3'>&#125;</span>
                        <span>.child-element &#123;</span>
                        <span className='ml-3'>width: 50px;</span>
                        <span className='ml-3'>height: 50px;</span>
                        <span className='ml-3'>background-color: blue;</span>
                        <span className='ml-3 text-success'>
                            position: absolute;
                        </span>
                        <span className='ml-3 text-success'>top: 50%;</span>
                        <span className='ml-3 text-success'>left: 50%;</span>
                        <span className='ml-3 text-success'>
                            transform: translate(-50%, -50%);
                        </span>
                        <span>&#125;</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img
                            src={flexAlignCenter}
                            alt='elementi yatay ve dikey ortalamak'
                        />
                    </div>
                    <h3 className='mt-6 mb-3'>
                        {t('center_element_ver_hor_flexbox')}
                    </h3>
                    <p>{t('center_element_ver_hor_flexbox_desc')}</p>
                    <div className='code-container'>
                        <span>&lt;div class="container"&gt;</span>
                        <span className='ml-3'>
                            &lt;div class="child-element"&gt;&lt;/div&gt;
                        </span>
                        <span>&lt;/div&gt;</span>
                    </div>
                    <div className='code-container'>
                        <span>.container &#123;</span>
                        <span className='ml-3'>width: 300px;</span>
                        <span className='ml-3'>height: 300px;</span>
                        <span className='ml-3'>background-color: tomato;</span>
                        <span className='ml-3 text-success'>
                            display: flex;
                        </span>
                        <span className='ml-3 text-success'>
                            align-items: center;
                        </span>
                        <span className='ml-3 text-success'>
                            justify-content: center;
                        </span>
                        <span className='mb-3'>&#125;</span>
                        <span>.child-element &#123;</span>
                        <span className='ml-3'>width: 50px;</span>
                        <span className='ml-3'>height: 50px;</span>
                        <span className='ml-3'>background-color: blue;</span>
                        <span>&#125;</span>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <img
                            src={flexAlignCenter}
                            alt='elementi yatay ve dikey ortalamak'
                        />
                    </div>
                    <h3 className='mt-6 mb-3'>{t('final')}</h3>
                    <p className='mb-5'>{t('center_element_final')}</p>
                    <Link to='/blog'>
                        <Button variant='outline-danger' className='mb-5'>
                            {t('show_all_blog_posts')}
                        </Button>
                    </Link>
                </div>
            </div>
            <Footer lightMode={lightMode} />
            <GoUp />
        </div>
    )
}

export default CenterElement
