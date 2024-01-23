import React, { useRef } from 'react'
import { CiSearch } from "react-icons/ci";
import {Col, Form, FormGroup } from 'reactstrap'

import './css/search-bar.css'

function SearchBar({title}) {
    const productRef = useRef('');

    const searchHandler = () =>{
        const product = productRef.current.value;

        if (product === ''){
            return alert('Search Product Empty!');
        }
    }
  return (
    <Col lg='12'>
        <div className='search__bar'>
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 from__group form__group-fast form_group_last'>
                    <span>
                        {/* Gap */}
                    </span>
                    <div>
                        <h6>Our {title}(s)</h6>
                        <input ref={productRef} type="text" id="search" placeholder='Search...' />
                    </div>
                </FormGroup>
                <span className='search_icon' type="submit" onClick={searchHandler}>
                    <CiSearch className='search__icon' />
                </span>
            </Form>
        </div>
    </Col>
  )
}

export default SearchBar