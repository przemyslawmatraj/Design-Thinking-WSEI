import React, { useState, useEffect } from 'react'
import css from './index.module.scss'
import axios from '../../../utils/axios'
import undraw from '../../../assets/graphics/undrawContact.svg'

const Contact = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setError('')
  }, [contact])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, message } = contact
    if (email === '' || name === '' || message === '') {
      setError('Wypełnij wszystkie pola!')
      return
    }
    setLoading(true)
    await axios
      .post('/contact-form', JSON.stringify({ email, name, message }), {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.error) {
          setError('Błąd połączenia z serwerem!')
          setLoading(false)
        } else {
          setContact({ name: '', email: '', message: '' })
          setLoading(false)
          setSuccess(true)
        }
      })
      .catch((err) => {
        setError('Błąd połączenia z serwerem!')
        setLoading(false)
      })
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  }

  return (
    <div className={css.container} id="contact">
      <h1 className={css.title}>Napisz do nas</h1>
      <p className={css.description}>Czekamy na Twoje pytania!</p>
      <div className={css.bottom}>
        {error && <p className={css.error}>{error}</p>}
        {success && <p className={css.success}>Wiadomość została wysłana!</p>}
        {loading && <p className={css.success}>Wysyłanie wiadomości...</p>}
        <form className={css.form} name="contact" onSubmit={handleSubmit}>
          <label htmlFor="contact-email">Email:</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleOnChange}
            placeholder="Podaj swój email"
            className={css.input}
            required
            id="contact-email"
          />
          <label htmlFor="contact-name">Imię:</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleOnChange}
            placeholder="Podaj swoje imię"
            className={css.input}
            required
            id="contact-name "
          />
          <label htmlFor="contact-message">Wiadomość:</label>
          <input
            type="textarea"
            name="message"
            value={contact.message}
            onChange={handleOnChange}
            placeholder="Podaj swoją wiadomość"
            className={css.input}
            required
            id="contact-message"
          />
          <input type="submit" value="Wyślij" />
        </form>
        <img loading="lazy" className={css.undraw} src={undraw} alt="kontakt email" />
      </div>
    </div>
  )
}

export default Contact
