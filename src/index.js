import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import reportWebVitals from './reportWebVitals'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

import 'flag-icon-css/css/flag-icon.min.css'

import './Styles/index.css'
import App from './App'

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['tr', 'en'],
        fallbackLng: 'tr',
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
    })

const loadingMarkup = (
    <div>
        <h2 className='fallback'>Loading...</h2>
    </div>
)

ReactDOM.render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
)
reportWebVitals()
