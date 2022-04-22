import React, { useEffect } from 'react'
import css from './index.module.scss'
import Card from '../../../components/Layout/Card'
import Paragraph from '../../../components/atoms/Paragraph'
import Container from '../../../components/Layout/Container'
import Stats from '../../../components/oragnisms/Stats'
import Spinner from '../../../components/molecules/Spinner'
import Announcement from '../../../components/oragnisms/Announcement'
import axios from '../../../utils/axios'
import useAuth from '../../../hooks/useAuth'
import Token from '../../../utils/token'
const AdminDashboard = () => {
  const { teams, setTeams } = useAuth()

  useEffect(() => {
    const getTeams = async () => {
      const token = Token.get('token')
      if (token && teams.length === 0) {
        try {
          const res = await axios.get('/admin/getTeams', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          })
          setTeams(res.data)
        } catch (err) {
          console.log(err)
        }
      }
    }
    getTeams()
  })
  return (
    <Container>
      <div className={css.wrapper}>
        <h1 className={css.title}>Panel Administratora</h1>
        <Stats />
        <Card className={css.spinner}>
          <Paragraph tag="h3" title="NADCHODZĄCE TERMINY" />
          <Spinner />
        </Card>
        <Announcement />
      </div>
    </Container>
  )
}

AdminDashboard.propTypes = {}

export default AdminDashboard
