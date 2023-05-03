import React from 'react'

import css from './index.module.scss'
import useAuth from '../../../hooks/useAuth'
import Container from '../../../components/Layout/Container'
import { Link } from 'react-router-dom'
import Message from '../../Message'
import FirstStepInput from '../../../components/atoms/FirstStepInput'
import MemberInput from '../../../components/atoms/MemberInput'
import { SettingsSchema } from '../../../utils/validationSchemas'
import useChangeTeamSettings from '../../../hooks/useChangeTeamSettings'
import {useForm, useFieldArray} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { faCirclePlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { initialMember } from '../../../utils/initialData'


const UserSettings = () => {
  const [deleteAccount, setDeleteAccount] = React.useState(false)
  const {
    auth: { data },
  } = useAuth()


  const  { register, handleSubmit, control, watch, formState : {isValid, errors}, getValues } = useForm({
    resolver: yupResolver(SettingsSchema),
    defaultValues: {
      username: data?.username,
      email: data?.email,
      members: data?.members,
    },
    mode: 'all',
  })


  const { changeTeamSettings, isLoading, errMsg } = useChangeTeamSettings()
  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  const handleDeleteAccount = () => {
    setDeleteAccount(!deleteAccount)
  }

  return (
    <Container>
      <div className={css.title}>
        <h1>Ustawienia Zespołu</h1>
        <h2>
          Zespół <strong>{data.username}</strong>
        </h2>
      </div>
      <div className={css.data}>
        <Container>
          <>
            {isLoading && 'Ładownie...'}
            <div className={css.bottom}>
              <form onSubmit={handleSubmit(changeTeamSettings)} autoComplete="off" className={css.form}>
                {errMsg && (
                  <p className={css.formError} aria-live="assertive">
                    {errMsg}
                  </p>
                )}
                <div className={css.stepOne}>
                  <h2 className={css.stepTitle}>Podstawowe dane zespołu</h2>
                  
                    <FirstStepInput errorMessage={errors.username?.message} fieldName="username" register={register} label="Nazwa zespołu:" getValues={getValues}/>
                    <FirstStepInput errorMessage={errors.email?.message} fieldName="email" register={register} label="Email:" isDisabled={true} getValues={getValues}/>
                    
                  
                  <div className={css.stepOneGroup}>
                    chcesz zmienić hasło? <Link to="/changePassword">kliknij tutaj</Link>
                  </div>
                </div>
                <div>
                <h2>Dane zespołu</h2>
        <div>
          <p>Zespół musi posiadać od 2 do 5 członków</p>
          <p>Aktualna ilość członków: {watch('members')?.length}</p>
        </div>
      </div>
      <div className={css.memberForm}>
        {fields.map((member, index) => (
            <div className={css.member} key={member.id}>

              <div className={css.memberTitle}>
                <h3>
                  Członek {index + 1}
                  {index === 0 && ' - Lider zespołu '}
                  <span>{' ' + member.name}</span>
                </h3>
                {index !== 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    <FontAwesomeIcon icon={faTimes} /> Usuń członka
                  </button>
                )}
              </div>
              
              <MemberInput index={index} errorMessage={errors.members?.[index]?.name?.message} fieldName="name" register={register} label="Imię:" getValues={getValues}/>
              <MemberInput index={index} errorMessage={errors.members?.[index]?.surname?.message} fieldName="surname" register={register} label="Nazwisko:" getValues={getValues}/>
              <MemberInput index={index} errorMessage={errors.members?.[index]?.email?.message} fieldName="email" register={register} label="Email:" getValues={getValues}/>
              <MemberInput index={index} errorMessage={errors.members?.[index]?.phone?.message} fieldName="phone" register={register} label="Telefon:" getValues={getValues}/>
              <MemberInput index={index} errorMessage={errors.members?.[index]?.school?.message} fieldName="school" register={register} label="Szkoła:" getValues={getValues}/>

              <h4>Adres członka</h4>

              <MemberInput index={index} isAddress={true} errorMessage={errors.members?.[index]?.address?.street?.message} fieldName="street" register={register} label="Ulica:" getValues={getValues}/>
              <MemberInput index={index} isAddress={true} errorMessage={errors.members?.[index]?.address?.number?.message} fieldName="number" register={register} label="Numer domu/mieszkania:" getValues={getValues}/>
              <MemberInput index={index} isAddress={true} errorMessage={errors.members?.[index]?.address?.city?.message} fieldName="city" register={register} label="Miasto:" getValues={getValues}/>
              <MemberInput index={index} isAddress={true} errorMessage={errors.members?.[index]?.address?.postal?.message} fieldName="postal" register={register} label="Kod pocztowy:" getValues={getValues}/>

            </div>
          ))}
        <button
          type="button"
          onClick={() => {
            append(initialMember)
          }}
          className={css.addMemberBtn}
        >
          <FontAwesomeIcon icon={faCirclePlus} />
          Dodaj kolejnego członka
        </button>
                </div>
                {deleteAccount && <Message type="deleteAccount" status="question" />}
                <div className={css.stepOneSubmit}>
                  <button type="submit" className={css.stepOneButton} disabled={!isValid}>
                    Zatwierdź zmiany
                  </button>
                  <button type="button" onClick={handleDeleteAccount} className={css.stepOneButton}>
                    Usunięcie konta
                  </button>
                </div>
              </form>
            </div>
          </>
        </Container>
      </div>
    </Container>
  )
}

export default UserSettings
