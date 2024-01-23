import React from 'react'
import './service-card.css'

function ServiceCard({item}) {
  const {imageURL, title, desc} = item;

  return (
    <>
      <div className='service__item mb-4'>
        <img src={imageURL} alt={title} className='service__img' />
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </>
  )
}

export default ServiceCard