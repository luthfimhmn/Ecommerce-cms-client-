import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommece-cms.herokuapp.com/'
})

export default instance
