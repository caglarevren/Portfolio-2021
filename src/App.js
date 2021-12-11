import { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

//Components
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Backpack from './Components/Backpack'
import Youtube from './Components/Youtube'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import GoUp from './Components/GoUp'
import PageNotFound from './Components/PageNotFound'

// Blog
import Blog from './Components/Blog/Blog'
import CenterElement from './Components/Blog/BlogPosts/CenterElement'
import ArrayMethods from './Components/Blog/BlogPosts/ArrayMethods'
import MyStory from './Components/Blog/BlogPosts/MyStory'

//Css Files
import './Styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    // Getting Theme From LocalStorage
    const getTheme = () => {
        return JSON.parse(localStorage.getItem('theme')) || false
    }

    const [lightMode, setLightMode] = useState(getTheme())

    // Seting Theme to LocalStorage
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(lightMode))
    }, [lightMode])

    return (
        <Router>
            <HelmetProvider>
                <Helmet>
                    <title>Çağlar Evren | Frontend Developer</title>
                    <meta
                        name='title'
                        content='Çağlar Evren | Frontend Developer'
                    />
                    <meta
                        name='description'
                        content='Merhaba ben Çağlar Evren. Mühendis, frontend developer ve blog yazarıyım. İyi yazılımcılar işlerine tutkuyla yaklaşır, daha iyileri ise paylaşarak.'
                    />
                    <meta
                        itemprop='keywords'
                        content='Çağlar Evren, Caglar Evren, Frontend Developer, Frontend Developer Antalya, JavaScript Developer, HTML, HTML5, CSS, CSS3, JavaScript, ReactJs, React, JQuery JavaScript Blog, React Blog, CSS Blog, HTML Blog'
                    />
                </Helmet>
                <div
                    className={lightMode ? 'bg-lightest' : 'bg-darkest'}
                    id='home'
                >
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <Fragment>
                                    <Navbar
                                        lightMode={lightMode}
                                        setLightMode={setLightMode}
                                    />
                                    <Hero />
                                    <About />
                                    <Backpack />
                                    <Youtube lightMode={lightMode} />
                                    <Contact lightMode={lightMode} />
                                    <Footer lightMode={lightMode} />
                                    <GoUp />
                                </Fragment>
                            }
                        />
                        <Route
                            path='/blog'
                            element={
                                <Blog
                                    lightMode={lightMode}
                                    setLightMode={setLightMode}
                                />
                            }
                        />
                        <Route
                            path='/css-ile-element-ortalamak'
                            element={
                                <CenterElement
                                    lightMode={lightMode}
                                    setLightMode={setLightMode}
                                />
                            }
                        />
                        <Route
                            path='/javascript-array-metodlari'
                            element={
                                <ArrayMethods
                                    lightMode={lightMode}
                                    setLightMode={setLightMode}
                                />
                            }
                        />
                        <Route
                            path='/universite-okumadan-nasil-yazilimci-oldum'
                            element={
                                <MyStory
                                    lightMode={lightMode}
                                    setLightMode={setLightMode}
                                />
                            }
                        />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </div>
            </HelmetProvider>
        </Router>
    )
}

export default App
