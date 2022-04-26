import axios from 'axios'

export default axios.create({
  baseURL: `http://192.166.219.118:8080/api`,
  // baseURL: `http://localhost:8080`,
})
