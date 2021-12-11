import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import GoUp from '../../GoUp'
import Button from 'react-bootstrap/Button'

import arrayMethodsImg from '../../../Assets/Images/JavaScriptArrayMethods/JavaScriptArrayMethods.png'
import forEachImg from '../../../Assets/Images/JavaScriptArrayMethods/forEachImg.png'
import mapImg from '../../../Assets/Images/JavaScriptArrayMethods/mapImg.png'
import filterImg1 from '../../../Assets/Images/JavaScriptArrayMethods/filterImg1.png'
import filterImg2 from '../../../Assets/Images/JavaScriptArrayMethods/filterImg2.png'
import sortImg1 from '../../../Assets/Images/JavaScriptArrayMethods/sortImg1.png'
import sortImg2 from '../../../Assets/Images/JavaScriptArrayMethods/sortImg2.png'
import sliceImg1 from '../../../Assets/Images/JavaScriptArrayMethods/sliceImg1.png'
import sliceImg2 from '../../../Assets/Images/JavaScriptArrayMethods/sliceImg2.png'

//Css Files
import '../../../Styles/Blog.css'

import { useTranslation } from 'react-i18next'

const ArrayMethods = ({ lightMode, setLightMode }) => {
    const { t } = useTranslation()

    return (
        <div className='center-text-outer-container'>
            <Helmet>
                <title>JavaScript Array Metodları | Çağlar Evren Blog</title>
                <meta
                    name='title'
                    content='JavaScript Array Metodları | Çağlar Evren Blog'
                />
                <meta
                    name='description'
                    content='Mutlaka bilmeniz gereken 5 JavaScript array metodu.'
                />
                <meta
                    itemprop='keywords'
                    content='JavaScript array metodları, forEach, map, filter, sort, reduce, javascript array, javascript, javascript blog'
                />
            </Helmet>
            <Navbar lightMode={lightMode} setLightMode={setLightMode} />
            <div className='container'>
                <h1 className='text-center center-elements-title'>
                    {t('array_methods_card_title')}
                </h1>
                <div className='d-flex justify-content-center'>
                    <img
                        src={arrayMethodsImg}
                        alt='JavaScript Array Methodları'
                        className='center-element-img'
                    />
                </div>
                <div className='center-text-content-container'>
                    <p className='mt-6'>{t('array_methods_opening')}</p>
                    <h3 className='mt-6 mb-3'>{t('array_methods_forEach')}</h3>
                    <p>{t('array_methods_forEach_desc')}</p>
                    <div className='code-container'>
                        <span>const fruits = [</span>
                        <span className='ml-3'>
                            &#123; name: 'banana', price: 10 &#125;
                        </span>
                        <span className='ml-3'>
                            &#123; name: 'apple', price: 8 &#125;
                        </span>
                        <span className='ml-3'>
                            &#123; name: 'tomato', price: 5 &#125;
                        </span>
                        <span>]</span>
                        <span className='mt-2'>
                            fruits.forEach((fruit) =&#62; &#123;
                        </span>
                        <span className='ml-3'>console.log(fruit.name)</span>
                        <span>&#125;)</span>
                    </div>
                    <p>{t('array_methods_forEach_conc')}</p>
                    <div className='my-4 sort-img-wrapper'>
                        <img
                            className='sort-img'
                            src={forEachImg}
                            alt='forEach array metodu'
                        />
                    </div>
                    <h3 className='mt-6 mb-3'>{t('array_methods_map')}</h3>
                    <p>{t('array_methods_map_desc')}</p>
                    <div className='code-container'>
                        <span>const numbers = [1 ,2, 3, 4, 5]</span>
                        <span>
                            const numbersDouble = numbers.map((number)
                            =&#62;number * 2)
                        </span>
                        <span>console.log(numbersDouble)</span>
                    </div>
                    <p>{t('array_methods_map_conc')}</p>
                    <div className='my-4 sort-img-wrapper'>
                        <img
                            className='sort-img'
                            src={mapImg}
                            alt='map array metodu'
                        />
                    </div>
                    <h3 className='mt-6 mb-3'>{t('array_methods_filter')}</h3>
                    <p>{t('array_methods_filter_desc')}</p>
                    <div className='code-container'>
                        <span className='mb-3'>
                            const numbers = [1 ,2, 3, 4, 5, 6]
                        </span>
                        <span>
                            const evenNumbers = numbers.filter((number) =&#62;
                            &#123;
                        </span>
                        <span className='ml-3'>return number % 2 === 0</span>
                        <span>&#125;)</span>
                        <span>console.log(evenNumbers)</span>
                        <span className='mt-3'>
                            const oddNumbers = numbers.filter((number) =&#62;
                            &#123;
                        </span>
                        <span className='ml-3'>return number % 2 === 1</span>
                        <span>&#125;)</span>
                        <span>console.log(oddNumbers)</span>
                    </div>
                    <div className='my-4 sort-img-wrapper'>
                        <img
                            className='sort-img'
                            src={filterImg1}
                            alt='filter array metodu 1'
                        />
                    </div>
                    <p>{t('array_methods_filter_examp')}</p>
                    <div className='code-container'>
                        <span>const people = [</span>
                        <span className='ml-3'>
                            &#123; name: 'Çağlar Evren', age: 28 &#125;
                        </span>
                        <span className='ml-3'>
                            &#123; name: 'Joe Biden', age: 79 &#125;
                        </span>
                        <span className='ml-3'>
                            &#123; name: 'Hakan Muhafız', age: 13 &#125;
                        </span>
                        <span>]</span>
                        <span className='mt-2'>
                            const adults = people.filter((person) =&#62;
                            person.age &#62;= 18)
                        </span>
                        <span className='mt-2'>console.log(adults)</span>
                    </div>
                    <div className='my-4 sort-img-wrapper'>
                        <img
                            className='sort-img'
                            src={filterImg2}
                            alt='filter array metodu 2'
                        />
                    </div>
                    <h3 className='mt-6 mb-3'>{t('array_methods_sort')}</h3>
                    <p>{t('array_methods_sort_desc')}</p>
                    <div className='code-container'>
                        <span>const products = [</span>
                        <span className='ml-3'>
                            &#123; name: 'Phone’', price: 8000, &#125;
                        </span>
                        <span className='ml-3'>
                            &#123; name: '‘computer’', price: 13000, &#125;
                        </span>
                        <span className='ml-3'>
                            &#123; name: '‘Guitar’', price: 1000, &#125;
                        </span>
                        <span>]</span>
                        <span className='mt-3'>
                            &#47;&#47; Sort By Price (Number)
                        </span>
                        <span>
                            products.sort((a, b) =&#62; a.price - b.price)
                        </span>
                        <span>console.log(products)</span>
                        <span className='mt-3'>
                            &#47;&#47; Sort By Name (String)
                        </span>
                        <span>
                            products.sort((a, b) =&#62;
                            a.name.localeCompare(b.name))
                        </span>
                        <span className='mt-2'>console.log(products)</span>
                    </div>
                    <div className='sort-image-wrapper my-4'>
                        <img
                            className='sort-img'
                            src={sortImg1}
                            alt='sort array metodu 1'
                        />
                        <img
                            className='sort-img'
                            src={sortImg2}
                            alt='sort array metodu 2'
                        />
                    </div>
                    <h3 className='mt-6 mb-3'>{t('array_methods_slice')}</h3>
                    <p>{t('array_methods_slice_desc')}</p>
                    <p className='mb-5'>{t('array_methods_slice_examp')}</p>
                    <div className='code-container'>
                        <span>const numbers = [1 ,2, 3, 4, 5]</span>
                        <span>const numbers2 = numbers.slice(1 ,4)</span>
                        <span>console.log(numbers)</span>
                        <span>console.log(numbers2)</span>
                    </div>
                    <div className='my-4 sort-img-wrapper'>
                        <img
                            className='sort-img'
                            src={sliceImg1}
                            alt='slice array metodu 1'
                        />
                    </div>
                    <p>{t('array_methods_slice_examp_1')}</p>
                    <p>{t('array_methods_slice_examp_1_1')}</p>
                    <p>{t('array_methods_slice_examp_2')}</p>
                    <div className='code-container'>
                        <span>const numbers = [1 ,2, 3, 4, 5]</span>
                        <span>const numbers3 = numbers.slice(-3)</span>
                        <span>console.log(numbers)</span>
                        <span>console.log(numbers3)</span>
                    </div>
                    <div className='my-4 sort-img-wrapper'>
                        <img
                            className='sort-img'
                            src={sliceImg2}
                            alt='slice array metodu 2'
                        />
                    </div>
                    <h3 className='mt-6 mb-3'>{t('final')}</h3>
                    <p className='mb-5'>{t('array_methods_final')}</p>
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

export default ArrayMethods
