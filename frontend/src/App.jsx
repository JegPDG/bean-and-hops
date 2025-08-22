import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<NavigationBar></NavigationBar>}></Route> */}
          <Route element={<MainLayout></MainLayout>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/menu' element={<Menu></Menu>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
          
          </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
