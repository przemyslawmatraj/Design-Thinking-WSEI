import React, { useEffect } from 'react'
import css from './index.module.scss'
import Card from '../../../components/Layout/Card'
import Paragraph from '../../../components/atoms/Paragraph'
import Container from '../../../components/Layout/Container'
import Stats from '../../../components/oragnisms/Stats'
import Calendar from '../../../components/molecules/Calendar'
import Announcement from '../../../components/oragnisms/Announcement'
import getTeamsIfEmpty from '../../../utils/getTeamsIfEmpty'

const AdminDashboard = () => {
  useEffect(() => {
    getTeamsIfEmpty()
  }, [])

  return (
    <Container>
      <div className={css.wrapper}>
        <h1 className={css.title}>Panel Administratora</h1>
        <Stats />
        <Card className={css.calendar}>
          <Paragraph tag="h3" title="NADCHODZĄCE TERMINY" />
          <Calendar />
        </Card>
        <Announcement />
      </div>
    </Container>
  )
}

AdminDashboard.propTypes = {}

export default AdminDashboard
