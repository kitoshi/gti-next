import Link from 'next/link'
import Image from 'next/image'
import HamburgerSVG from './svg/hamburger'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
export default function Navbar(props) {
  if (typeof document === 'undefined') {
    useLayoutEffect = useEffect
  }
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [navdisplay, setDisplay] = useState(false)
  const [navtop, setNavTop] = useState(true)
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

  useLayoutEffect(() => {
    function moveNav() {
      if (hamburgerRef.current.style.bottom !== '10px' && window.scrollY > 20) {
        hamburgerRef.current.style.removeProperty('top')
        hamburgerRef.current.style.bottom = '10px'

        setNavTop(false)
      }
      if (window.scrollY <= 20) {
        hamburgerRef.current.style.removeProperty('bottom')
        hamburgerRef.current.style.top = '7px'
        setNavTop(true)
      }
    }

    window.addEventListener('scroll', moveNav)

    return () => {
      window.removeEventListener('scroll', moveNav)
    }
  }, [hamburgerRef, navdisplay])

  function updateDisplay(e) {
    if (navdisplay === false) {
      setDisplay(true)
    } else {
      if (width > 800) {
        return null
      } else {
        setDisplay(false)
      }
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
      className='global-nav'
    >
      <Link href={'/'}>
        <a
          style={
            navdisplay === false || (navdisplay === true && width < 800)
              ? { display: 'none' }
              : { display: 'inline' }
          }
          onClick={updateDisplay}
        >
          <Image
            src='/logo_only_clr_sm.png'
            alt='logo'
            width={'24'}
            height={'24'}
            quality={'100'}
            className='rounded-logo'
          ></Image>
        </a>
      </Link>
      <button
        style={
          width < 800 && navtop == true
            ? { display: 'inline' }
            : { display: 'none' }
        }
        className='hamburger'
        onClick={updateDisplay}
        aria-label='Nav Menu'
      >
        <HamburgerSVG />
      </button>
      <Link href={'/'}>
        <a
          style={
            navdisplay === false ? { display: 'none' } : { display: 'inline' }
          }
          className='navbar-item first-nav-link'
          onClick={updateDisplay}
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
          onClick={updateDisplay}
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
          onClick={updateDisplay}
        >
          About
        </a>
      </Link>
      <Link href={'/contact'}>
        <a
          style={
            navdisplay === false ? { display: 'none' } : { display: 'inline' }
          }
          className='navbar-item last-nav-link'
          onClick={updateDisplay}
        >
          Contact
        </a>
      </Link>

      <button
        style={
          width < 800 && navtop == false
            ? { display: 'inline' }
            : { display: 'none' }
        }
        className='hamburger'
        onClick={updateDisplay}
        aria-label='Nav Menu'
      >
        <HamburgerSVG />
      </button>
    </nav>
  )
}
