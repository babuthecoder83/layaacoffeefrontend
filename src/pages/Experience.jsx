import React, {useState, useEffect } from 'react'

function Experience() {
    const apiurl = process.env.REACT_APP_API_URL + '/experience'

    const [experience, setExperience] = useState([])
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
  
                setExperience(json.data.attributes)
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
    <>
        <h2 className='mb-2'>
            {experience.title}
        </h2>
        <br />
        <p>
            {experience.description}
        </p>
    </>
  )
}

export default Experience