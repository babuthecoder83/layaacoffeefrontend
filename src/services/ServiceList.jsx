import React from 'react'

import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import CustomerImg from '../assets/img/services/customer.png';
import ExperienceImg from '../assets/img/services/experience.png';
import ProductsImg from '../assets/img/services/products.png';
import ServeImg from '../assets/img/services/Serve.png';
import FactoryImg from '../assets/img/services/factory.png';
import CorporateImg from "../assets/img/services/corporate.png"

const serviceData =[
  {
    imageURL: ProductsImg,
    title: "10 +",
    desc: "Products"
  },
  {
    imageURL: ExperienceImg,
    title: "20 +",
    desc: "Year Experience"
  },
  {
    imageURL: CustomerImg,
    title: "10,000 +",
    desc: "Happy Customers"
  },
  {
    imageURL: ServeImg,
    title: "20,000 +",
    desc: "Cups"
  },
  {
    imageURL: CorporateImg,
    title: "100 +",
    desc: "Corporate Customer"
  },
  {
    imageURL: FactoryImg,
    title: "4000 Sq ft",
    desc: "Factory"
  }
]

function ServiceList() {
  return (
    <>
      {
        serviceData.map((item, index) => 
        (
          <Col lg='4' className='item-center' key={index}>
            <ServiceCard item={item} />
          </Col>
        ))
      }
    </>
  )
}

export default ServiceList