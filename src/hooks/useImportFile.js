import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import axios from '../utils/axios'
import Token from '../utils/token'

/**
 * @param {object} initial - initial state of filesObject
 * @example
 * const initial = {
 *   file1: {},
 *   file2: {},
 * }
 * @param {string} backendUrl - url to backend
 * @example
 * const backendUrl = '/insertIdea'
 * @returns {object} - object with filesObject, pageNumber, onDocumentLoadSuccess, handleSubmmit, handleOnChange, size, loading, error, success
 **/

const useImportFile = (initial, backendUrl) => {
  const [filesObject, setFilesObject] = useState(initial)
  const [pageNumber, setPageNumber] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const size = useRef()

  const onDocumentLoadSuccess = () => setPageNumber(1)

  const handleSubmmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (Object.keys(filesObject).some((key) => filesObject[key].url === '')) {
      setError('Pewien plik nie został wybrany, proszę wybrać plik')
      setLoading(false)
      return
    }

    const formData = new FormData(e.target)
    await axios
      .post(backendUrl, formData, {
        headers: {
          Authorization: `Bearer ${Token.get()}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .catch((err) => {
        setError('Coś poszło nie tak')
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleOnChange = (e) => {
    const { name, files } = e.target
    if (files[0].size > 1048576) {
      setError('Plik jest za duży')
      return
    }
    const fileReader = new FileReader()
    fileReader.readAsDataURL(files[0])
    fileReader.onload = (e) => {
      setFilesObject((prev) => ({
        ...prev,
        [name]: {
          url: e.target.result,
          type: files[0].type,
        },
      }))
    }
    setError('')
    setSuccess(false)
  }
  return {
    filesObject,
    pageNumber,
    onDocumentLoadSuccess,
    handleSubmmit,
    handleOnChange,
    size,
    loading,
    error,
    success,
  }
}

useImportFile.propTypes = {
  initial: PropTypes.object.isRequired,
}

export default useImportFile
