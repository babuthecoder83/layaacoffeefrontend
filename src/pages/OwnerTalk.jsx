import React, {useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function OwnerTalk() {
    const apiurl = process.env.REACT_APP_API_URL + '/owner-talk'

    const [ownerTalk, setOwnerTalk] = useState([])
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

                setOwnerTalk(json.data.attributes)
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
        <h5 className='mt-5'>
            {ownerTalk.ownerName}
        </h5>
        <span className='font-weight-light'>-( {ownerTalk.position} )</span>
        <br />
        <p className='mt-2 mb-5'>
            <ReactMarkdown>
                {ownerTalk.paragraph1}
            </ReactMarkdown>
            <ReactMarkdown>
                {ownerTalk.paragraph2}
            </ReactMarkdown>
            <ReactMarkdown>
                {ownerTalk.paragraph3}
            </ReactMarkdown>
        </p>
    </>
  )
}

export default OwnerTalk