import { useEffect, useState } from 'react'

const useFetch = (endpoint, type) => {
    const apiurl = process.env.REACT_APP_API_URL + endpoint

    const [data, setDate] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const options = {
            method: type,
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + process.env.REACT_APP_API_ACCESS_TOKEN
            }
          };

        const fetchData = async () =>{
            setLoading(true)

            try{
                const res = await fetch(apiurl, options);
                const json = await res.json()

                setDate(json.data)
                setLoading(false)
            }
            catch(error){
                setError(error)
                setLoading(false)
            }
        }

        fetchData()

    }, [apiurl])

    return { loading, error, data }
}

export default useFetch