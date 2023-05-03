import * as yup from 'yup'

export const MembersSchema = yup.array().of(
    yup.object().shape({
      name: yup.string().required('Pole nie może być puste').min(3, 'Pole musi zawierać przynajniej 3 znaki'),
      surname: yup.string().required('Pole nie może być puste').min(3, 'Pole musi zawierać przynajniej 3 znaki'),
      email: yup.string().email('Niepoprawny adres email').required('Pole nie może być puste'),
      school: yup.string().required('Pole nie może być puste'),
      phone: yup.number('Nie poprawny numer telefonu').required('Pole nie może być puste').typeError('Niepoprawny numer telefonu'),
      address: yup.object().shape({
        street: yup.string().required('Pole nie może być puste'),
        number: yup.string().required('Pole nie może być puste'),
        postal: yup.string().max(6, 'Niepoprawny kod pocztowy').required('Pole nie może być puste').matches(/^[0-9]{2}-[0-9]{3}$/, { message: 'Niepoprawny kod pocztowy' }),
        city: yup.string().required('Pole nie może być puste'),
      }),
    })
).length(2, 'Musisz dodać przynajmniej 2 członków zespołu')

export const RegisterSchema = yup.object().shape({
  username: yup.string().required('Pole nie może być puste').min(3, 'Pole musi zawierać przynajniej 3 znaki'),
  password: yup.string().required('Pole nie może być puste').min(8, 'Pole musi zawierać przynajniej 8 znaków'),
  passwordMatch: yup.string().required('Pole nie może być puste').oneOf([yup.ref('password'), null], 'Hasła muszą być takie same'),
  email: yup.string().email('Niepoprawny adres email').required('Pole nie może być puste'),
  members: MembersSchema,
  rules: yup.boolean().oneOf([true], 'Musisz zaakceptować regulamin'),
  rules2: yup.boolean().oneOf([true], 'Musisz zaakceptować zgodę na przetwarzanie danych osobowych'),
})

export const SettingsSchema = yup.object().shape({
  username: yup.string().required('Pole nie może być puste').min(3, 'Pole musi zawierać przynajniej 3 znaki'),
  email: yup.string().email('Niepoprawny adres email').required('Pole nie może być puste'),
  members: MembersSchema,
})