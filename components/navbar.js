import Link from 'next/link'
import Image from 'next/image'
import HamburgerSVG from './svg/hamburger'
import { useState, useEffect, useRef } from 'react'
export default function Navbar(props) {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [navdisplay, setDisplay] = useState(false)
  const hamburgerRef = useRef(null)

  useEffect(() => {
    function updateWidth() {
      setWidth(() => window.innerWidth)
      setHeight(() => window.innerHeight)
    }
    window.addEventListener('resize', updateWidth)
    updateWidth()
    if (width > 800) {
      hamburgerRef.current.style.borderRadius = '0%'
      setDisplay(() => true)
    }
    if (width <= 800) {
      setDisplay(() => false)
    }
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [width])

  useEffect(() => {
    function moveNav() {
      if (
        width <= 800 &&
        hamburgerRef.current.style.bottom !== '10px' &&
        window.scrollY > 20
      ) {
        setTimeout(() => {
          hamburgerRef.current.style.removeProperty('top')
          hamburgerRef.current.style.bottom = '10px'
        }, 250)
      }
      if (window.scrollY <= 20) {
        setTimeout(() => {
          hamburgerRef.current.style.removeProperty('bottom')
          hamburgerRef.current.style.top = '7px'
        }, 250)
      }
    }
    window.addEventListener('scroll', moveNav)

    return () => {
      window.removeEventListener('scroll', moveNav)
    }
  }, [width])

  function updateDisplay(e) {
    e.preventDefault()
    if (navdisplay === false) {
      setDisplay(() => true)
    } else {
      setDisplay(() => false)
    }
  }

  return (
    <nav
      ref={hamburgerRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        top: '7px',
        right: '10px'
      }}
    >
      <Link href={'/'}>
        <a
          style={
            navdisplay === false ? { display: 'none' } : { display: 'inline' }
          }
        >
          <Image
            src='/logo_only_clr_sm.png'
            alt='logo'
            width={'32'}
            height={'32'}
            quality={'100'}
            className='rounded-logo'
          ></Image>
        </a>
      </Link>
      <Link href={'/'}>
        <a
          style={
            navdisplay === false ? { display: 'none' } : { display: 'inline' }
          }
          className='navbar-item first-nav-link'
        >
          Home
        </a>
      </Link>
      <Link href={'/services'}>
        <a
          style={
            navdisplay === false ? { display: 'none' } : { display: 'inline' }
          }
          className='navbar-item'
        >
          Services
        </a>
      </Link>
      <Link href={'/about'}>
        <a
          style={
            navdisplay === false ? { display: 'none' } : { display: 'inline' }
          }
          className='navbar-item'
        >
          About
        </a>
      </Link>

      <a
        style={
          navdisplay === false ? { display: 'none' } : { display: 'inline' }
        }
        href='#bottom contact'
        className='navbar-item last-nav-link'
        onClick={props.onContactButtonClick}
      >
        Contact
      </a>

      <button
        style={width > 800 ? { display: 'none' } : { display: 'inline' }}
        className='hamburger'
        onClick={updateDisplay}
        aria-label='Nav Menu'
      >
        <HamburgerSVG width={'24'} height={'24'}>
          Nav Menu
        </HamburgerSVG>
      </button>
    </nav>
  )
}
