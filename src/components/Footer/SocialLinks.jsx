import React, {useState, useEffect } from 'react'
import { RiYoutubeFill } from "react-icons/ri";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

import { Link } from 'react-router-dom'

function SocialLinks() {
    const apiurl = process.env.REACT_APP_API_URL + '/social-link'

    const [socialLink, setSocialLink] = useState([])
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

                setSocialLink(json.data.attributes)
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
    <div className="social__links d-flex align-items-center gap-4">
        <span>
            <Link to={socialLink.youtubeLink}>
                <RiYoutubeFill />
            </Link>
        </span>
        <span>
            <Link to={socialLink.facebookLink}>
                <FaSquareFacebook />
            </Link>
        </span>
        <span>
            <Link to={socialLink.instagramLink}>
                <FaInstagramSquare />   
            </Link>
        </span>
    </div>
  )
}

export default SocialLinks