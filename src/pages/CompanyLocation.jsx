import React, { useEffect, useState } from 'react'

function CompanyLocation() {
    const apiurl = process.env.REACT_APP_API_URL + '/social-link'

    const [googleLink, setGoogleLink] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const options = {
            method: 'GET',
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

                setGoogleLink(json.data.attributes)
                setLoading(false)
            }
            catch(error){
                setError(error)
                setLoading(false)
            }
        }

        fetchData()

    }, [apiurl])

  return (
    <div class="embed-responsive embed-responsive-16by9">
        <iframe title='layaacoffee' className='rounded-lg' src={googleLink.googleLocationLink} width="550" height="350">
        </iframe>
    </div>
  )
}

export default CompanyLocation