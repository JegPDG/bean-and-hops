import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavigationBar = (props) => {
  const {menuOpen, setMenuOpen} = props;
  const navigate = useNavigate();

  // const [menuOpen, setMenuOpen] = React.useState(false);

  const links = [
    {
      label: "Menu",
      navigation: '/menu/items',
    },
    {
      label: "Contact",
      navigation: '/contact',

    },
     {
      label: "Location",
      navigation: '/location',

    },
    {
      label: "Posts",
      navigation: '/posts',

    },
    {
      label: "About Us",
      navigation: '/about-us',

    },
    
  ]

  return (
    <>
      <div className='bg-bg-dark-500/70 h-16 border-b-white/40 border-b w-screen flex justify-center items-center'>
        <div className='flex w-full max-w-5xl items-center justify-between h-full pl-6 pr-6 relative'>
          <div className='flex items-center cursor-pointer h-full gap-2'
            onClick={ () => {
              navigate('/')
              window.scrollTo(0, 0)
            }}
          >
            <img className='size-10 md:size-16' 
              src={assets.bean_and_hops_white} alt="" />
            <p className='text-sm font-bold md:text-sm lg:text-2xl'>BEAN AND HOPS</p>
          </div>

          {/* Burger button */}
          <button
            className={`md:hidden ml-2 z-50 ${menuOpen ? 'hidden' : 'block'}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="w-8 h-8 text-white" />
          </button>

          {/* Fullscreen overlay menu for mobile */}
          {menuOpen && (
            <div className="fixed inset-0 bg-bg-dark-500 bg-opacity-95 flex flex-col items-center justify-center z-40 md:hidden transition-all">
              <button
                className="absolute top-6 right-6"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="w-10 h-10 text-white" />
              </button>
              <ul className="flex flex-col gap-8 text-3xl font-bold text-white">
                {links.map((link, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      navigate(link.navigation)
                      window.scrollTo(0, 0)
                      setMenuOpen(false)
                    }}
                    className="cursor-pointer hover:text-amber-400 hover:bg-white/10 transition"
                  >
                    {link.label}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Desktop links */}
          <div className="hidden md:block h-full lg:flex lg:justify-center lg:items-center">
            <ul className="flex flex-row text-lg h-full items-center justify-center">
              {links.map((link, index) => (
                <li
                  key={index}
                  onClick={() => {
                    navigate(link.navigation)
                    window.scrollTo(0, 0)
                  }}
                  className="cursor-pointer pl-4 pr-4 hover:bg-white/10 h-full transition flex items-center"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    
    </>
  )
}

export default NavigationBar