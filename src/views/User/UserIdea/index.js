import React from 'react'
// import css from './index.module.scss'
import useAuth from '../../../hooks/useAuth'
import Container from '../../../components/Layout/Container'
import Button from '../../../components/atoms/Button'

const UserIdea = () => {
  const {
    auth: { data },
  } = useAuth()

  if (data.enabled && data.idea === null) {
    window.location.href = `https://docs.google.com/forms/d/e/1FAIpQLSenhy3XR6Fn3E7JUY5aBBkxkijMjQzC3qvTU_2tdA_T36QLmQ/viewform?usp=pp_url&entry.1334767853=${data.email}`
    return
  }

  return 'Recenzja Twojego pomysłu została zakończona. Dziękujemy za udział w konkursie! :) Oto komentarz recenzenta: '
}

export default UserIdea
