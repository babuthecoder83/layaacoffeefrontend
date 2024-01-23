import React, {useState, useEffect} from 'react'
import { Col } from 'reactstrap'
import CategoryCard from '../../shared/CategoryCard'

function CategoryShop() {
  const apiurl = process.env.REACT_APP_API_URL + '/categories?[populate][image][fields][1]=url&sort[1]=id'

    const [categories, setCategories] = useState([])
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

              setCategories(json.data)
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
        categories?.map(category => (
          <Col lg='4' className='mb-4' key={category.id}>
            <CategoryCard data={category} />
          </Col>
        ))
      }
    </>
  )
}

export default CategoryShop