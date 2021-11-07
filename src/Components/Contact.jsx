import React from 'react'
import useForm from './Validations/useForm.js'
import validate from './Validations/validateInfo.js'
import Alert from 'react-bootstrap/Alert'
import { useTranslation } from 'react-i18next'

const Contact = ({ lightMode }) => {
    const { t } = useTranslation()
    const { handleChange, values, handleSubmit, errors } = useForm(validate)

    return (
        <section className='contact-section-container' id='contact'>
            <div className='container'>
                <h3>{t('contact')}</h3>

                <div
                    className={
                        'contact-section-inner' +
                        (lightMode ? ' contact-bg-light-border' : '')
                    }
                >
                    <p className='contact-form-text'>{t('contact_form')}</p>
                    <p className='contact-form-info'>
                        {t('contact_form_info')}
                    </p>
                    <form id='form' onSubmit={handleSubmit}>
                        <div className='input-container'>
                            <label htmlFor='nameSurname'>
                                {t('contact_form_name_surname')}
                            </label>
                            <input
                                type='text'
                                name='nameSurname'
                                id='nameSurname'
                                placeholder={t('contact_form_name_placeholder')}
                                value={values.nameSurname}
                                onChange={handleChange}
                                className={errors.nameSurname ? 'error' : ''}
                                maxLength='100'
                            />
                            {errors.nameSurname && <p>{errors.nameSurname}</p>}
                        </div>
                        <div className='input-container'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder={t(
                                    'contact_form_email_placeholder'
                                )}
                                value={values.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                maxLength='100'
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>
                        <div className='input-container'>
                            <label htmlFor='message'>
                                {t('contact_form_message')}
                                <span className='message-length'>
                                    ({3000 - values.message.length})
                                </span>
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                rows='5'
                                placeholder={t(
                                    'contact_form_message_placeholder'
                                )}
                                value={values.message}
                                onChange={handleChange}
                                className={errors.message ? 'error' : ''}
                                maxLength='3000'
                            ></textarea>
                            {errors.message && <p>{errors.message}</p>}
                        </div>
                        <Alert
                            variant='success'
                            className='alert-success d-none'
                        >
                            {t('contact_form_message_success')}
                        </Alert>
                        <div className='send-message-btn-container'>
                            <button className='btn-send-message' type='submit'>
                                <div className='loading-spinner d-none'></div>
                                <span>{t('contact_form_send_message')}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
