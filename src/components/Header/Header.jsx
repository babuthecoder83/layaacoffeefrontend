import React from 'react'
import { Container, Row, Button} from 'reactstrap'

import { NavLink, Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

import { CiMenuFries } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

import { nav_links } from '../../assets/data/Links'

import Logo from '../../assets/img/header/logo.png'

import "./header.css"

function Header() {
  {/* 
  const headerRef = useRef(null)

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () =>{
      if (document.body.scrollTop >  80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }
      else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc();

    return window.removeEventListener('scroll', stickyHeaderFunc)
  })
  */}

  return (
    <header className='header sticky__header' id='home'>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
            {/* menu */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5 p-2">
                {
                  nav_links.map((item, index)=>(
                    <li className='nav__item' key={index}>
                      {item.isSamePage ? 
                        <ScrollLink 
                          to={item.path} 
                          spy={true} 
                          smooth={true}
                          duration={500}
                          className='scroll_Menu'
                        >
                          {item.display}
                        </ScrollLink> 
                        : 
                        <NavLink 
                          to={item.path} 
                          className={navClass => navClass.isActive ? 'active__link': ''}
                        >
                          {item.display}
                        </NavLink> }
                    </li>    
                  ))
                }
              </ul>
            </div>

            <div className='nav__right d-flex align-items-center gap-4'>
              <div className="nav__btns d-flex align-items-center gap-4">
                {/*
                <RouterLink to="/signup">
                  <Button className='btn primary__btn'>
                    Sign Up
                  </Button>
                </RouterLink>
               */}
                <RouterLink to="/cart">
                  <Button className='btn accent__btn'>
                    <LuShoppingCart />
                  </Button>
                </RouterLink>
              </div>
              <span className='mobile__menu'>
                <CiMenuFries />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header