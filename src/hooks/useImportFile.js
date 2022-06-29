import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import axios from '../utils/axios'
import Token from '../utils/token'

const useImportFile = (initial, backendUrl) => {
  const [filesObject, setFilesObject] = useState(initial)
  const [pageNumber, setPageNumber] = useState()
  const size = useRef()

  const onDocumentLoadSuccess = () => setPageNumber(1)

  const handleSubmmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    await axios
      .post(backendUrl, formData, {
        headers: {
          Authorization: `Bearer ${Token.get()}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .catch((err) => {
        console.log('Coś poszło nie tak', err)
      })
  }

  const handleOnChange = (e) => {
    const { name, files } = e.target
    const fileReader = new FileReader()
    fileReader.readAsDataURL(files[0])
    fileReader.onload = (e) => {
      setFilesObject({
        ...filesObject,
        [name]: {
          url: e.target.result,
          type: files[0].type,
        },
      })
    }
  }
  return { filesObject, pageNumber, onDocumentLoadSuccess, handleSubmmit, handleOnChange, size }
}

useImportFile.propTypes = {
  initial: PropTypes.object,
}

export default useImportFile
