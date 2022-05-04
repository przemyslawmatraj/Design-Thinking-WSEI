import React from 'react'
import Container from '../../../components/Layout/Container'
import useAuth from '../../../hooks/useAuth'
import Message from '../../Message'
import Card from '../../../components/Layout/Card'
import { returnStatus } from '../../../constants/dropdownOptions'
import Paragraph from '../../../components/atoms/Paragraph'
import css from './index.module.scss'
const UserIdea = () => {
  const {
    auth: { data },
  } = useAuth()

  if (data.enabled && !data.idea && !data.roles.some(({ role }) => ['TEST'].includes(role))) {
    window.location.href = `https://docs.google.com/forms/d/e/1FAIpQLSenhy3XR6Fn3E7JUY5aBBkxkijMjQzC3qvTU_2tdA_T36QLmQ/viewform?usp=pp_url&entry.1334767853=${data.email}`
    return null
  } else if (!data.enabled) {
    return null
  } else if (data.id === 2) {
    return <Message status={'error'} type={'testUser'} />
  }

  return (
    <Container>
      <div className={css.center}>
        <Card flexDirection={'column'} className={css.card}>
          <Paragraph tag="h1" title={returnStatus(data.idea?.status)} content={data.idea?.review} />
        </Card>
      </div>
    </Container>
  )
}

export default UserIdea
