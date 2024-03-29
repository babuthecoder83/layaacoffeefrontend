import React from 'react'
import './css/common-section.css'
import { Container, Row, Col } from 'reactstrap'

function CommonSection({title}) {
  return (
    <section className='common_section'>
        <Container>
            <Row>
                <Col lg='12'>
                    <h1>{title}</h1>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection