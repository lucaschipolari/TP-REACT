import React from 'react'
import { Outlet } from 'react-router-dom';
import {NavbarMain} from '../components/Navbar/navbar';
import { Footer } from '../components/Footer/footer';

const RootView = () => {
  return (
    <> 
    <header >
     <NavbarMain/>
    </header>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default  RootView;