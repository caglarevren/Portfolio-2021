import { useState, useEffect, Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

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
            <div className={lightMode ? 'bg-lightest' : 'bg-darkest'} id='home'>
                <Routes>
                    <Route
                        path='/'
                        exact
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
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
