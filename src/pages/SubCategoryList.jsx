import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row } from 'reactstrap'

import CommonSection from '../shared/CommonSection';
import Subtitle from './../shared/Subtitle'
import SearchBar from './../shared/SearchBar'

import SubCategoryShop from '../components/shop/SubCategoryShop';

import '../styles/categories.css'

function SubCategoryList() {
    const { id } = useParams();
  return (
    <>
      <CommonSection title={'Sub Categories'} />
      <section>
        <Container>
          <Subtitle subtitle={"Sub-Category List"} />
          <Row>
            {/* <SearchBar title={'Sub-Categories'} /> */}
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          <Row>
            <SubCategoryShop categoryId={id} />
          </Row>
        </Container>
      </section>
    </>      
  )
}

export default SubCategoryList