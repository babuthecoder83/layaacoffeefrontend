import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row } from 'reactstrap'

import CommonSection from '../shared/CommonSection';
import Subtitle from './../shared/Subtitle'
import SearchBar from './../shared/SearchBar'

import ProductShop from '../components/shop/ProductShop';

import '../styles/categories.css'

function ProductList() {
    const { id } = useParams();
  return (
    <>
      <CommonSection title={'Products'} />
      <section>
        <Container>
          <Subtitle subtitle={"Product List"} />
          <Row>
            {/* <SearchBar title={'Product'} /> */}
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            <ProductShop subCategoryId={id} />
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ProductList