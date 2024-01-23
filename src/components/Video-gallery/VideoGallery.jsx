import React, { useState, useEffect } from 'react'
import { Col } from 'reactstrap'

import SlideVideo1 from '../../assets/video/Video_Slide1.mp4'
import SlideVideo2 from '../../assets/video/Video_Slide2.mp4'
import SlideVideo3 from '../../assets/video/Video_Slide3.mp4'

function VideoGallery() {
  return (
    <>
        <Col lg='2'>
            <div className="hero__img-box">
                <video src={SlideVideo1} alt='' controls autoPlay/>
            </div>
        </Col>
        <Col lg='2'>
            <div className="hero__img-box mt-4">
                <video src={SlideVideo2} alt='' controls/>
            </div>
        </Col>
        <Col lg='2'>
            <div className="hero__img-box mt-5">
                <video src={SlideVideo3} alt='' controls/>
            </div>
        </Col>
    </>
  )
}

export default VideoGallery