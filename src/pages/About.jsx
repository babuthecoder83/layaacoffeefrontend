import React, {useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Subtitle from '../shared/Subtitle';
import ReactMarkdown from 'react-markdown'

import OwnerTalk from './OwnerTalk';

function About() {
    const apiurl = process.env.REACT_APP_API_URL + '/about'

    const [about, setAbout] = useState([])
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

                setAbout(json.data.attributes)
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
    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'About Us!'} /> 
                    <h2 className='mt-5'>{about.tag}</h2>
                    <br />
                    <h3>Our Slogan</h3>
                    <p class="font-weight-light">
                        <b>
                            {about.slogan}
                        </b>
                    </p>
                    <br/>
                    <p className='mb-5'>
                        <ReactMarkdown>
                            {about.paragraph1}
                        </ReactMarkdown>
                        <ReactMarkdown>
                        {about.paragraph2}
                        </ReactMarkdown>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Owner Talk!'} />
                    <OwnerTalk />
                </Col>
            </Row>
        </Container>
    </section>
    </>    
  )
}

export default About