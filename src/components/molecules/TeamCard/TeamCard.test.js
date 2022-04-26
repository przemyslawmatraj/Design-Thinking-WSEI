import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TeamCard from './TeamCard'
import DefaultImg from '../../../assets/graphics/default.webp'

test('should render TeamCard image', () => {
  render(
    <TeamCard
      name="testowy zespół"
      img={DefaultImg}
      leaderEmail="test@wsei.edu.pl"
      leaderPhone={12830324748}
      statusTitle="sprawdzony"
      statusContent="testowy status content"
    />
  )
  const img = screen.getByRole('img')
  expect(img).toBeVisible()
  expect(img).toHaveAttribute('src')
  expect(img).toHaveAttribute('alt')
})
