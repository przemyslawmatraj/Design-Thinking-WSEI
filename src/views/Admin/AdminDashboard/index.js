import React from 'react'
import css from './index.module.scss'
import Card from '../../../components/Layout/Card'
import Paragraph from '../../../components/atoms/Paragraph'
import Container from '../../../components/Layout/Container'
import Stats from '../../../components/oragnisms/Stats'
import Spinner from '../../../components/molecules/Spinner'
import Announcement from '../../../components/oragnisms/Announcement'
const AdminDashboard = () => (
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

AdminDashboard.propTypes = {}

export default AdminDashboard
