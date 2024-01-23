import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import './css/news-letter.css'

/*import PostManImg from '../assets/img/newsletter/postman.png' */
import PostManImg from '../assets/img/banners/cat_banner.jpg' 

function Newsletter() {
  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='newsletter__content'>
              <h2>Now Francies open.</h2>
              <div className="newsletter__input">
                <input type="email" id="subscribeMail" placeholder='Enter your Email' />
                <button className='btn newsletter__btn'>
                  Join
                </button>
              </div>
              <p>
                We appreciate your visit to our website. Feel free to explore and make yourself at home! and Grateful for your presence on our site. Explore, enjoy, and thanks for being here!
              </p>
            </div>
          </Col>
          <Col lg='6'>
            <div className="newletter__img">
              {/*<img src={PostManImg} alt="postman" /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Newsletter