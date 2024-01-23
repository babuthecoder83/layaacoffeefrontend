import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Card, CardBody } from 'reactstrap'
import { FiCoffee } from "react-icons/fi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

import './css/shop-card.css'

function ProductCard({ data }) {
  return (
    <>
      <Col>
        <div className='tour__card'>
          <Card>
            <div className='tour__img'>
              <img src={data.attributes.image.data.attributes.url} alt="shop-img" />
                {
                  data.attributes.isFeatured ? 
                  <span>Featured</span> 
                  : 
                  ''
                }
            </div>
            <CardBody>
              <div className='card__top d-flex align-items-center justify-content-between'>
                <span className='tour__location d-flex align-items-center gap-1'>
                  {
                    data.attributes.isDrink ? 
                    <FiCoffee /> 
                    : 
                    <GiForkKnifeSpoon /> 
                  }
                </span>
                <span className='tour__rating d-flex align-items-center gap-1'>
                  <FaStar /> 
                  {data.attributes.rating}
                </span>
              </div>
              <div className='card__top d-flex align-items-center justify-content-between'>
              <h5 className='tour__title'>
                <Link to={`/product/${data.id}`}>
                    {data.attributes.name}
                </Link>
              </h5>
              </div>
              <div className='card__bottom d-flex align-items-center justify-content-between'>
              <small className='text-truncate'>
                {data.attributes.description }
              </small>
              </div>
              <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
                <h5>
                  {data.attributes.isFeatured} 
                  <span className='tour__title'>
                    {data.attributes.price === 0 || data.attributes.price === 0.00 ? '' : data.attributes.currency + ": " + data.attributes.price + "/-" } 
                  </span>
                </h5>
                <button className='btn booking__btn'>
                  <Link to={`/product/${data.id}`}>
                    More...
                  </Link>
                </button>
              </div>
            </CardBody>
          </Card>
        </div>
      </Col>
    </>
  )
}

export default ProductCard