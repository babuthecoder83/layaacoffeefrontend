import React from 'react'
import HeroVideo from '../assets/video/hero-videos.mp4'

function ExperienceVideo() {
  return (
    <>
        <div className='experience__img-box'>
            <video src={HeroVideo} alt='' controls autoPlay/>
        </div>
    </>
  )
}

export default ExperienceVideo