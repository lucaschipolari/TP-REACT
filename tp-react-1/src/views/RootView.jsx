import React from 'react'
import { Outlet } from 'react-router-dom';
import {MyNavbar} from '../components/Navbar/navbar';
import { Footer } from '../components/Footer/footer';

const RootView = () => {
  return (
    <> 
    <header >
     <MyNavbar/>
    </header>
    <main className='text-center'>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default  RootView;