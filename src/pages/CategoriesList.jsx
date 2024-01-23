import React from 'react'
import { Container, Row } from 'reactstrap'

import CommonSection from '../shared/CommonSection';
import Subtitle from './../shared/Subtitle'
import SearchBar from './../shared/SearchBar'

import CategoryShop from '../components/shop/CategoryShop';

import '../styles/categories.css'

function CategoriesList() {
  return (
    <>
      <CommonSection title={'All Categories'} />
      <section>
        <Container>
          <Subtitle subtitle={"Category List"} />
          <Row>
            {/* <SearchBar title={'Categories'} /> */}
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            <CategoryShop />
          </Row>
        </Container>
      </section>
    </>
  )
}

export default CategoriesList