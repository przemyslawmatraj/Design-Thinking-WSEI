export const singleTeam = [
  {
    name: 'Zaakceptowany',
    value: 'ACCEPTED',
  },
  {
    name: 'Odrzucony',
    value: 'REJECTION_OF_ACCEPTANCE',
  },
  {
    name: 'Oczekujący',
    value: 'PENDING',
  },
  {
    name: 'Zakwalifikowany',
    value: 'QUALIFIED',
  },
]

export const returnStatus = (status) => {
  switch (status) {
    case 'ACCEPTED':
      return 'Zaakceptowany'
    case 'REJECTION_OF_ACCEPTANCE':
      return 'Odrzucony'
    case 'PENDING':
      return 'Oczekujący'
    case 'QUALIFIED':
      return 'Zakwalifikowany'
    default:
      return 'Brak statusu'
  }
}
