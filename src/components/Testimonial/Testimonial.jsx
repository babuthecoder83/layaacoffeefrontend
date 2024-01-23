import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import useFetch from '../../hook/useFetch';

function Testimonial() {

  const {loading, data, error} = useFetch('/testimonials?sort[0]=id:asc')

  return (
    <Swiper
    slidesPerView={2}
    spaceBetween={30}
    loop={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    {
      data?.map(testimonial => (
        <SwiperSlide key={testimonial.id}>
          <div className="testimonial py-4 px-3 mb-3">
            <p className='mb-3'>
              "{testimonial.attributes.description}"
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
              
            <div>
            <h6 className='mb-0 mt-3 fw-bold'>
              {testimonial.attributes.name}
            </h6>
            <p>
              {testimonial.attributes.position}
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>
    ))
    }
  </Swiper>
  )
}

export default Testimonial