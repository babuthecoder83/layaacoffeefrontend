import React, {useState, useEffect} from 'react'

import Mansory, { ResponsiveMasonry } from 'react-responsive-masonry'

function MasonryImageGallery() {

  const apiurl = process.env.REACT_APP_API_URL + '/galleries?populate[image][fields][1]=url'

    const [gallery, setGallery] = useState([])
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

                setGallery(json.data)
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
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Mansory gutter='1rem'>
            {
                gallery.map((item,index)=>(
                    <img className='masonry__img' src={item.attributes.image.data.attributes.url} alt="gallery" key={index} style={{'width': '100%', 'display': 'block', 'borderRadius': '10px'}} />
                ))
            }
        </Mansory>
    </ResponsiveMasonry>
  )
}

export default MasonryImageGallery