import React from 'react'
import css from './index.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Message from '../Message'
import Container from '../../components/Layout/Container'
import doc1 from '../../assets/docs/regulamin_konkursu_WSEI_Ep.pdf'
import registerTop from '../../assets/graphics/registerTop.webp'
import { faCirclePlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from '../../utils/validationSchemas'
import FirstStepInput from '../../components/atoms/FirstStepInput'
import MemberInput from '../../components/atoms/MemberInput'
import useRegisterNewTeam from '../../hooks/useRegisterNewTeam'
import { initialMember, defaultRegisterValues } from '../../utils/initialData'

const RegisterPage = () => {
  const { register, handleSubmit, control, watch, formState: { errors, isValid}, getValues } = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues: defaultRegisterValues,
    mode: 'all',
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  const { registerNewTeam, errFromServer, isSuccess, response, isLoading } = useRegisterNewTeam()

  if (isSuccess) {
    <div className={css.success}>
          {response?.status && isSuccess ? (
            <Message type="signUp" status={response?.status === 200 ? 'success' : 'error'} email={
              getValues('email')
            } />
          ) : (
            <Message type="signUp" status={'error'} />
          )}
        </div>
  }


  return (
    <Container>
      
        <>
          <div className={css.top}>
            <div className={css.title}>
              <h1>Elevator Pitch</h1>
              <h2>Formularz rejestracyjny Konkursu</h2>
            </div>
            <img className={css.imgTop} src={registerTop} alt="Grafika przedstawiająca forumlarz rejestracyjny" />
          </div>
          {isLoading && 'Ładownie...'}
          <div className={css.bottom}>
            <div className={css.asideColumn}></div>
            <form onSubmit={handleSubmit(registerNewTeam)} autoComplete="off" className={css.form}>
              {errFromServer && (
                <p className={css.formError} aria-live="assertive">
                  {errFromServer}
                </p>
              )}
              <div className={css.stepOne}>
                <h2 className={css.stepTitle}>Krok 1</h2>
                <h3 className={css.stepSubTitle}>Wprowadź podstawowe dane zespołu</h3>
                <FirstStepInput errorMessage={errors.username?.message} fieldName="username" register={register} label="Nazwa zespołu:" getValues={getValues}/>
                <FirstStepInput errorMessage={errors.email?.message} fieldName="email" register={register} label="Email:" getValues={getValues}/>
                <FirstStepInput errorMessage={errors.password?.message} fieldName="password" register={register} label="Hasło:" getValues={getValues} />
        
                 
                <FirstStepInput errorMessage={errors.passwordMatch?.message} fieldName="passwordMatch" register={register} label="Powtórz hasło:" getValues={getValues}/>
              </div>
              <div className={css.title}>
        <h2>Krok 2</h2>
        <h3>Wprowadź dane członków zespołu</h3>
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
              <h2 className={css.stepTitle}>Krok 3</h2>
              <h3 className={css.stepSubTitle}>Przeczytaj i zaakceptuj regulamin konkursu</h3>
              <div className={css.stepOneSubmit}>
                <label className={css.checkbox}>
                  <input type="checkbox" {...register('rules')} />
                  Akceptuje postanowienia <a href={doc1}>Regulaminu</a>
                  <span className={css.star}>*</span>
                </label>
                {errors.rules && <p className={css.formError}>{errors.rules.message}</p>}
                <label className={css.checkbox}>
                  <input type="checkbox" {...register('rules2')} />
                  Wyrazam zgodę na przetwarzanie danych osobowych zgodnie z ustawą o ochronie danych osobowych w związku
                  z rejestracją zespołu. Podanie danych jest dobrowolne, ale niezbędne do przetworzenia prośby o
                  rejestrację zespołu. Zostatem poinformowany, Przysługuje mi prawo dostepu do swoich danych, możliwości
                  ich poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych osobowych jest Wysza
                  Szkoła Ekonomii i Informatyki w Krakowie.
                  <span className={css.star}>*</span>
                </label>
                {errors.rules2 && <p className={css.formError}>{errors.rules2.message}</p>}
                <button
                  type="submit"
                  className={css.stepOneButton}
                  disabled={!isValid}
                >
                  Zarejestruj zespół
                </button>
              </div>
            </form>
            <div className={css.asideColumn}></div>
          </div>
          
        </>
    </Container>
  )
}

export default RegisterPage
