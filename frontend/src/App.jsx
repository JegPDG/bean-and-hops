import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Posts from './pages/Posts';
import Location from './pages/Location';
import Reviews from './pages/Reviews';
import MenuItemDetail from './pages/MenuItemDetail';
import MenuItemsAll from './pages/MenuItemsAll';


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<NavigationBar></NavigationBar>}></Route> */}
          <Route element={<MainLayout></MainLayout>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route element={<Menu></Menu>}>
              <Route path='/menu' element={<Menu></Menu>}></Route>
              <Route path='/menu/items' element={<MenuItemsAll></MenuItemsAll>}></Route>
              <Route path='/menu/item-detail' element={<MenuItemDetail></MenuItemDetail>}></Route>
              <Route path='/menu/item-detail/:itemname' element={<MenuItemDetail></MenuItemDetail>}></Route>

            </Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/about-us' element={<AboutUs></AboutUs>}></Route>
            <Route path='/posts' element={<Posts></Posts>}></Route>
            <Route path='/location' element={<Location></Location>}></Route>
            <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          
          </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
