import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(url) {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    console.log('llamando a la API')
    axios(url)
      .then((resp) => {
        console.log(resp.data)
        setData(resp.data)
      })
      .catch((error) => setError(error.message))
  }, [])

  return [data, error]
}
