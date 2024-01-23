import React from 'react'
import { FiCoffee } from "react-icons/fi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

import { Card, CardBody, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import './css/shop-card.css';

function ShopCard({cat, isProduct}) {
   
  return (
    <Col>
            <div className='tour__card'>
                <Card>
                    <div className='tour__img'>
                        <img src={cat.attributes.image.data.attributes.url} alt="shop-img" />
                        {cat.attributes.isFeatured ? <span>Featured</span> : ''}
                    </div>
                    <CardBody>
                        <div className='card__top d-flex align-items-center justify-content-between'>
                            <span className='tour__location d-flex align-items-center gap-1'>
                                {cat.attributes.isDrink ? <FiCoffee /> : <GiForkKnifeSpoon /> }
                            </span>
                            <span className='tour__rating d-flex align-items-center gap-1'>
                                <FaStar /> {cat.attributes.rating}
                            </span>
                        </div>

                        <h5 className='tour__title'>
                            {isProduct ? <Link to={`/category/product/${cat.id}`}>{cat.attributes.name}</Link> : <Link to={`/category/${cat.id}`}>{cat.attributes.name}</Link>}
                        </h5>
                        <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
                            <h5>{cat.attributes.isFeatured} <span> {/* price per plate or cup */}  </span></h5>

                            <button className='btn booking__btn'>
                                {isProduct ? <Link to={`/category/product/${cat.id}`}>More...</Link> : <Link to={`/category/${cat.id}`}>More...</Link>}
                            </button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Col>
  )
}

export default ShopCard