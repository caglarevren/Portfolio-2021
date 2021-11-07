export default function validateInfo(values) {
    let errors = {}

    // Name & Surname
    if (!values.nameSurname) {
        errors.nameSurname = 'Lütfen adınızı ve soyadınızı giriniz.'
    }

    // Email
    if (!values.email) {
        errors.email = 'Lütfen E-mail adresinizi giriniz'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Lütfen geçerli bir E-mail adresi giriniz'
    }

    // Message
    if (!values.message) {
        errors.message = 'Lütfen mesajınızı giriniz'
    }

    return errors
}
