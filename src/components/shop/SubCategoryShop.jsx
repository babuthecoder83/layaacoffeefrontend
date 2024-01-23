import React, {useState, useEffect} from 'react'
import { Col } from 'reactstrap'

import SubCategoryCard from '../../shared/SubCategoryCard'

function SubCategoryShop({ categoryId }) {
  const apiurl = process.env.REACT_APP_API_URL + `/sub-categories?populate=*&filters[category][id]=` + categoryId

  const [subCategories, setsubCategories] = useState([])
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

            setsubCategories(json.data)
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
    {
      subCategories?.map(subCategory => (
        <Col lg='4' className='mb-4' key={subCategory.id}>
          <SubCategoryCard data={subCategory} />
        </Col>
      ))
    }
    </>
  )
}

export default SubCategoryShop