import React, {useState, useEffect} from 'react'
import { Col } from 'reactstrap'

import ProductCard from '../../shared/ProductCard'

function ProductShop({ subCategoryId }) {
  const apiurl = process.env.REACT_APP_API_URL + `/products?populate=*&filters[sub_category]=` + subCategoryId

  const [products, setProducts] = useState([])
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

            setProducts(json.data)
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
      products?.map(product => (
        <Col lg='4' className='mb-4' key={product.id}>
          <ProductCard data={product} />
        </Col>
      ))
    }
    </>
  )
}

export default ProductShop