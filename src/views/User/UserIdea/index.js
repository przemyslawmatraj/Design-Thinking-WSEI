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
    filesObject: { idea, application },
    pageNumber,
    onDocumentLoadSuccess,
    handleSubmmit,
    handleOnChange,
    size,
  } = useImportFile(
    {
      idea: {
        url: '',
        type: '',
      },
      application: {
        url: '',
        type: '',
      },
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
          <div id="preview1" ref={size}>
            {idea.type === 'application/pdf' ? (
              <>
                <Document file={idea.url} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} width={size.current.offsetWidth} />
                </Document>
              </>
            ) : (
              <img src={idea.url} alt="idea" />
            )}
          </div>
          <label htmlFor="idea" className={css.formInput}>
            <span>Prezentacja:</span>
            <input type="file" name="idea" id="idea" onChange={(e) => handleOnChange(e)} />
          </label>
          <div id="preview2">
            {application.type === 'application/pdf' ? (
              <>
                <Document file={application.url} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} width={size.current.offsetWidth} />
                </Document>
              </>
            ) : (
              <img src={application.url} alt="idea" />
            )}
          </div>
          <label htmlFor="application" className={css.formInput}>
            <span>Zgłoszenie:</span>
            <input type="file" name="application" id="application" onChange={(e) => handleOnChange(e)} />
          </label>
          <input type="submit" value="Wyślij" />
        </form>
      </div>
    </Container>
  )
}

export default UserIdea
