import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<NavigationBar></NavigationBar>}></Route> */}
          <Route element={<MainLayout></MainLayout>}>
            <Route path='/' element={<Home></Home>}></Route>
          
          
          </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
