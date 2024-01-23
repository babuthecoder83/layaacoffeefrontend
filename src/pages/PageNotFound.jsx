import React from 'react'
import { useNavigate } from "react-router-dom";
import { Container, Row } from 'reactstrap';

function PageNotFound() {

  const navigate = useNavigate();

  const backToHome = () =>{
    navigate('/')
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <p className='d-flex d-flex align-items-center'>Page Not Found!</p>
            <button onClick={backToHome} className='btn primary__btn'>Back to Home</button>    
          </Row>
        </Container>
      </section>
    </>
  )
}

export default PageNotFound