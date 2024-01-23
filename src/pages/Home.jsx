import React from 'react'

import { Col, Container, Row } from 'reactstrap';

import WorldImg from '../assets/img/hero/world.png';

import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';

import Experience from './Experience';
import ExperienceVideo from './ExperienceVideo';

import CategoryShop from '../components/shop/CategoryShop';

import MasonryImageGallery from '../components/image-gallery/MasonryImageGallery';

import Testimonial from '../components/Testimonial/Testimonial';
import Newsletter from '../shared/Newsletter';

import { Footer } from '../components/index';

import '../styles/home.css'
import HomeSlider from '../components/Sliders/HomeSlider';
import VideoGallery from '../components/Video-gallery/VideoGallery';

function Home() {
  return (
    <>
    <HomeSlider />
    <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before you Go!'} /> 
                  <img src={WorldImg} alt="Banner" />
                </div>
                <h1>
                  Forgot yourself with the Dip your Lip to sip Our{' '}
                  <span className='highlight'>
                    Layaa Coffee Cup
                  </span>
                </h1>
                <p>
                  Concentrates an our integrity and business ethics,  comitments towards customers consistancy towards quality, we are procuring the good quality coffee beans.
                </p>
              </div>
            </Col>

            <VideoGallery />
            <SearchBar title={'Category'} />
          </Row>
        </Container>
      </section>
      
      {/* Services */}
      <section id="services">
        <Container>
          <Row>
          <Col lg='6'>
              <h5 className='service__subtitle'>What we Serve?</h5>
              <h2 className='service__title'>We Offer our best services</h2>
            </Col>
          </Row>
          <Row>
            <ServiceList />
          </Row>
        </Container>  
      </section>

      {/* Features */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className='mb-5'>
              <Subtitle subtitle={"Our Shop"} />
              <h2 className='our__shop-title'>Most Popular Selling Products</h2>
            </Col>
          </Row>
          <Row>
            <CategoryShop />
          </Row>
        </Container>
      </section>

      {/* Experience */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='experience__content'>
                <Subtitle subtitle={'Experience'}></Subtitle>
                <Experience />
              </div>

              {/*<div className="counter__wrapper d-flex align-items-center gap-5"></div> */}
            </Col>
            <Col lg='6'>
              <ExperienceVideo />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery */} 
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle="Gallery" />
              <h2 className='gallery__title'>
                Visit our Customer Gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonial */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className='testimonial__title'>What about fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/* NewsLetter */}
      <Newsletter />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home