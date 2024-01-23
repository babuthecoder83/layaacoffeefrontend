import React, {useState, useEffect} from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './home-slider.css'

function HomeSlider() {
    const apiurl = process.env.REACT_APP_API_URL + '/hero-sliders?[populate][image][fields][1]=url'

    const [slider, setSlider] = useState([])
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
  
                setSlider(json.data)
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
        <div className='silder__content mt-2'>
            <Container>
                <Swiper
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        slider?.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <Row>
                                    <Col lg='12'>
                                        <img src={slide.attributes.image.data.attributes.url} alt="banner1" className='slider__img'/>
                                        <div className='mb-2 h-1'></div>
                                    </Col>
                                </Row>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </div>
    </>
  )
}

export default HomeSlider