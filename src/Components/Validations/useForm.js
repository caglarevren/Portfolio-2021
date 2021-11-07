import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const useForm = (validate) => {
    const loadingSpinner = document.querySelector('.loading-spinner')
    const alertSuccess = document.querySelector('.alert-success')

    const [values, setValues] = useState({
        nameSurname: '',
        email: '',
        message: '',
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors(validate(values))

        if (Object.keys(validate(values)).length === 0) {
            loadingSpinner.classList.remove('d-none')

            emailjs
                .sendForm(
                    'service_mkgmztb',
                    'template_txmsh9r',
                    e.target,
                    'user_6opjFyXm4aB2YhTjCmMZ9'
                )
                .then(
                    () => {
                        loadingSpinner.classList.add('d-none')
                        alertSuccess.classList.remove('d-none')
                        setValues({
                            nameSurname: '',
                            email: '',
                            message: '',
                        })
                        setTimeout(() => {
                            alertSuccess.classList.add('d-none')
                        }, 4000)
                    },
                    (err) => {
                        console.log(err)
                    }
                )
        }
    }

    return { handleChange, values, handleSubmit, errors }
}

export default useForm
