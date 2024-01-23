import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col} from 'reactstrap'

function PoweredBy() {
    const currentYear = new Date().getFullYear();
  return (
    <Container>
        <Row>
            <Col lg='12'>
                <div className='text-center pt-1 pb-1'>
                    <small>
                        Powered by {" "}
                        <Link to='https:\\www.blackjambul.com\'>
                            Blackjambul&#174; - {currentYear}
                        </Link>
                    </small>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default PoweredBy