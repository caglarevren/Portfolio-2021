import React from 'react'
import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiJavascript1,
    DiReact,
    DiGit,
} from 'react-icons/di'
import { SiSpringboot } from 'react-icons/si'
import { IoLogoVue } from 'react-icons/io5'

const Backpack = () => {
    return (
        <div className='container icon-outer-container' id='backpack'>
            <h3>Sırt Çantam</h3>
            <div className='icon-container'>
                <div className='html-icon-container'>
                    <DiHtml5 size={60} />
                    <p>HTML</p>
                </div>
                <div className='css-icon-container'>
                    <DiCss3 size={60} />
                    <p>CSS</p>
                </div>
                <div className='sass-icon-container'>
                    <DiSass size={60} />
                    <p>SASS</p>
                </div>
                <div className='bootstrap-icon-container'>
                    <DiBootstrap size={60} />
                    <p>BOOTSTRAP</p>
                </div>
                <div className='js-icon-container'>
                    <DiJavascript1 size={60} />
                    <p>JAVASCRIPT</p>
                </div>
                <div className='vue-icon-container'>
                    <IoLogoVue size={60} />
                    <p>VUE JS</p>
                </div>
                <div className='react-icon-container'>
                    <DiReact size={60} />
                    <p>REACT JS</p>
                </div>
                <div className='spring-icon-container'>
                    <SiSpringboot size={60} />
                    <p>SPRING BOOT</p>
                </div>
                <div className='git-icon-container'>
                    <DiGit size={60} />
                    <p>GIT</p>
                </div>
            </div>
        </div>
    )
}

export default Backpack
