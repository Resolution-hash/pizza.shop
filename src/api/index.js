import axios from "axios"

const URL = 'https://64d26a18f8d60b17436205f8.mockapi.io'

const api = {
  fetchPizzas: () => {
    const response = axios.get(`${URL}/items`)
    return response
  }
}

export default api