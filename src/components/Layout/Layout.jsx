import React from 'react'

import {Header, PoweredBy} from '../index'
import Routers from '../../routes/Routers'

function Layout() {
  return (
    <>
      <Header />
      <Routers />
      <PoweredBy />
    </>
  )
}

export default Layout