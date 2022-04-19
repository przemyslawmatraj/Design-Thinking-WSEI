import React, { useState, useEffect } from 'react'
import css from './index.module.scss'
import { useParams } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import Container from '../../../components/Layout/Container'
import Card from '../../../components/Layout/Card'
import img from '../../../assets/graphics/default.svg'
import Paragraph from '../../../components/atoms/Paragraph'
import axios from '../../../utils/axios'
import Token from '../../../utils/token'
const SingleTeam = () => {
  const { id } = useParams()
  const { teams } = useAuth()
  const team = teams.find((team) => team.id === Number(id))

  const [review, setReview] = useState({
    review: '',
    status: '',
  })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setError('')
    setSuccess(false)
  }, [review])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post(
        `/admin/setQualifcationStatusAndComment/${id}`,
        {
          review: review.review,
          status: review.status,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Token.get()}`,
          },
        }
      )
      .then((res) => {
        setSuccess(true)
        setLoading(false)
        window.location.reload()
      })
      .catch((err) => {
        setError('Wystąpił błąd podczas przetwarzania danych')
        setLoading(false)
      })
  }

  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value })
  }

  return (
    <Container>
      <h1 className={css.title}>Zespół {team?.username}</h1>
      <Card className={css.card}>
        <img src={img} alt="" />
        <div className={css.mainInfo}>
          <Paragraph tag="h4" title={team?.username} color="black" content={team?.email} />
          <Paragraph
            tag="h4"
            title="Status Zespołu"
            color="black"
            content={team?.idea ? team.idea.status : 'Oczekuje na akceptację'}
          />
        </div>

        <h2>Członkowie i ich adresy</h2>
        <div className={css.members}>
          {team?.members.map((member, index) => (
            <div key={member.id} className={css.member}>
              <h3>
                Członek {index + 1}
                {index === 0 && ' - Lider'}
              </h3>
              <div className={css.element}>{member.name}</div>
              <div className={css.element}>{member.surname}</div>
              <div className={css.element}>
                {member.address.street} {member.address.number}
              </div>
              <div className={css.element}>{member.address.city}</div>
              <div className={css.element}>{member.address.postalCode}</div>
              <div className={css.element}>{member.school}</div>
              <div className={css.element}>{member.email}</div>
              <div className={css.element}>Tel. {member.phoneNumber}</div>
            </div>
          ))}
        </div>
      </Card>
      <Card className={css.card}>
        <h2>Wszystkie wysłane pliki</h2>
        <iframe
          className={css.iframe}
          title="Zgłoszenia"
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3rj41_cdHx-59PEyzMT3I1waAk0lUxePUwIRh5uMM7_gva8vkduN0qU4ZbvtdSi1dNkiPzMkxcXYi/pubhtml?gid=1152197457&amp;single=true&amp;widget=true&amp;headers=false&amp;output=html"
        ></iframe>
      </Card>
      <Card className={css.card}>
        <form className={css.reviewForm} onSubmit={handleSubmit}>
          <Paragraph tag="h2" title="RECENZJA POMYSŁU" />
          {error && <Paragraph tag="span" color="error" title={error} />}
          {success && <Paragraph tag="span" color="green" title="Pomyślnie wysłano recenzję" />}
          {loading && <Paragraph tag="span" title="Wysyłanie..." />}

          <label htmlFor="status">
            <Paragraph tag="h4" title="Status:" />
            <input
              type="text"
              name="status"
              id="status"
              placeholder="Status"
              value={review.status}
              onChange={handleChange}
              requierd
            />
          </label>
          <label htmlFor="review">
            <Paragraph tag="h4" title="Recenzja:" />
            <textarea
              name="review"
              id="review"
              rows="10"
              placeholder="Treść recencji"
              value={review.review}
              onChange={handleChange}
              required
            />
          </label>
          <input type="submit" className={css.submit} value="Zrecenzuj" />
        </form>
      </Card>
      {team?.idea?.status && (
        <Card className={css.card}>
          <Paragraph tag="h3" title="Aktualna Recenzja" content={team.idea.review} />
        </Card>
      )}
    </Container>
  )
}

export default SingleTeam
