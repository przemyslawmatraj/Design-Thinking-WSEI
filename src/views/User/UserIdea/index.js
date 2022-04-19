import React from 'react'
import Container from '../../../components/Layout/Container'
import useAuth from '../../../hooks/useAuth'
import Message from '../../Message'

const UserIdea = () => {
  const {
    auth: { data },
  } = useAuth()
  console.log(data)
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
      <h1>{data.idea?.status}</h1>
      <p>Recenzja Twojego pomysłu została zakończona. Dziękujemy za udział w konkursie! :) Oto komentarz recenzenta:</p>
      <p>{data.idea?.review}</p>
    </Container>
  )
}

export default UserIdea
