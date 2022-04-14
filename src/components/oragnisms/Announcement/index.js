import React, { useState, useEffect } from 'react'
import css from './index.module.scss'
import Card from '../../Layout/Card'
import Paragraph from '../../atoms/Paragraph'
import axios from '../../../utils/axios'

const Announcement = () => {
  const [announcement, setAnnouncement] = useState({
    title: '',
    announcement: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    setAnnouncement({
      ...announcement,
      [e.target.name]: e.target.value,
    })
  }
  useEffect(() => {
    setError('')
    setSuccess(false)
  }, [announcement])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const token = localStorage.getItem('token') || null
    await axios
      .post('/admin/annouce', announcement, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAnnouncement({
          topic: '',
          text: '',
        })
        setError('')
        setSuccess(true)
        setLoading(false)
        console.log(res)
      })
      .catch((err) => {
        setError('Coś poszło nie tak')
        setSuccess(false)
        setLoading(false)
      })
  }

  return (
    <>
      <Card className={css.announcement} id="announcements">
        <Paragraph tag="h2" title="WYŚLIJ OGŁOSZENIE DO WSZYSTKICH ZESPOŁÓW" />
        {error && <Paragraph tag="span" color="error" title={error} />}
        {success && <Paragraph tag="span" color="green" title="Pomyślnie wysłano ogłoszenie" />}
        {loading && <Paragraph tag="span" title="Wysyłanie..." />}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            <Paragraph tag="h4" title="Tytuł:" />
            <input
              type="text"
              name="topic"
              id="title"
              placeholder="Tytuł"
              value={announcement.topic}
              onChange={handleChange}
              requierd
            />
          </label>
          <label htmlFor="announcement">
            <Paragraph tag="h4" title="Treść" />
            <textarea
              name="text"
              id="announcement"
              rows="10"
              placeholder="Treść ogłoszenia:"
              value={announcement.text}
              onChange={handleChange}
              required
            />
          </label>
          <input type="submit" className={css.submit} value="Wyślij ogłoszenie" />
        </form>
      </Card>
    </>
  )
}

export default Announcement
