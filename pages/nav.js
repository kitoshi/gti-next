import Link from 'next/link'
import Image from 'next/image'
import PhoneSvg from '../components/svg/phone'
import EmailSVG from '../components/svg/email'
import HamburgerSVG from '../components/svg/hamburger'
import { useState, useEffect, useRef } from 'react'
export default function Navbar(props) {
  const [width, setWidth] = useState(0)
  const [navdisplay, setDisplay] = useState(false)
  const hamburgerRef = useRef(null)

  /*useEffect(() => {
    function closeHamburgerNav(e) {
      if (e.target.value !== hamburgerRef) {
        setDisplay(() => false)
      }
    }
    document.querySelector('body').addEventListener('click', closeHamburgerNav)

    return () => {
      document
        .querySelector('body')
        .removeEventListener('click', closeHamburgerNav)
    }
  }, [navdisplay])*/

  useEffect(() => {
    function updateWidth() {
      setWidth(() => window.innerWidth)
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
        hamburgerRef.current.style.bottom !== '2vh' &&
        window.scrollY !== 0
      ) {
        hamburgerRef.current.style.right = '-5vh'
        setTimeout(() => {
          hamburgerRef.current.style.removeProperty('top')
          hamburgerRef.current.style.right = '1vh'
          hamburgerRef.current.style.bottom = '2vh'
        }, 250)
      }
      if (window.scrollY === 0) {
        hamburgerRef.current.style.right = '-5vh'
        setTimeout(() => {
          hamburgerRef.current.style.removeProperty('bottom')
          hamburgerRef.current.style.right = '1vh'
          hamburgerRef.current.style.top = '2vh'
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
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        top: '1vh',
        right: '1vw'
      }}
    >
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
          className='navbar-item'
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
      <Link href={'/contact'} style={{}}>
        <a
          style={
            navdisplay === false ? { display: 'none' } : { display: 'inline' }
          }
          className='navbar-item'
        >
          Contact
        </a>
      </Link>
      <a
        style={
          navdisplay === false ? { display: 'none' } : { display: 'inline' }
        }
      >
        <PhoneSvg
          backgroundcolor={'#0d1427'}
          objectcolor={'#c97211ff'}
          scale={1}
          height={24}
          width={24}
        />
      </a>
      <a
        style={
          navdisplay === false ? { display: 'none' } : { display: 'inline' }
        }
      >
        <EmailSVG
          backgroundcolor={'#0d1427'}
          objectcolor={'#c97211ff'}
          scale={1}
          height={24}
          width={24}
        />
      </a>
    </nav>
  )
}
