import React from 'react'
import Container from '../../../components/Layout/Container'
import useAuth from '../../../hooks/useAuth'
import css from './index.module.scss'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5'
import useImportFile from '../../../hooks/useImportFile'
import Message from '../../Message'

const UserIdea = () => {
  const {
    auth: { data },
  } = useAuth()

  const {
    filesObject,
    pageNumber,
    onDocumentLoadSuccess,
    handleSubmmit,
    handleOnChange,
    size,
    loading,
    error,
    success,
  } = useImportFile(
    {
      idea: {},
      application: {},
    },
    '/insertIdea'
  )

  if (!data.enabled) {
    return null
  } else if (data.id === 2) {
    return <Message status={'error'} type={'testUser'} />
  }

  return (
    <Container>
      <div className={css.center}>
        <form
          id="upload"
          className={css.form}
          onSubmit={(e) => {
            handleSubmmit(e)
          }}
        >
          {Object.keys(filesObject).map((key, i) => {
            return (
              <div key={key}>
                <div id={`preview${i}`} ref={size}>
                  {filesObject[key].type === 'application/pdf' ? (
                    <>
                      <Document file={filesObject[key].url} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} width={size.current.offsetWidth} />
                      </Document>
                    </>
                  ) : (
                    <img src={filesObject[key].url} alt={key} />
                  )}
                </div>
                <label htmlFor={key} className={css.formInput}>
                  <span>Prezentacja:</span>
                  <input type="file" name={key} id={key} onChange={(e) => handleOnChange(e)} />
                </label>
              </div>
            )
          })}
          <input type="submit" value="Wyślij" disabled={!!error || success || loading} />
          {loading && <div className={css.loading}>Wysyłanie...</div>}
          {error && <div className={css.error}>{error}</div>}
          {success && <div className={css.success}>Wysłano</div>}
        </form>
      </div>
    </Container>
  )
}

export default UserIdea
