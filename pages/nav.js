import Link from 'next/link'
import Image from 'next/image'
import PhoneSvg from '../components/phone'
import EmailSVG from '../components/email'
import HamburgerSVG from '../components/hamburger'
import { useState, useEffect } from 'react'
export default function Navbar(props) {
  const [width, setWidth] = useState(0)
  const [navdisplay, setDisplay] = useState(false)

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateWidth)
    updateWidth()
    if (width > 800) {
      setDisplay(true)
    }
    if (width <= 800) {
      setDisplay(false)
    }
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [width])

  function updateDisplay() {
    if (navdisplay === false) {
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  }

  return (
    <nav
      style={{
        backgroundColor: 'var(--faux-eerie)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <button
        style={width > 800 ? { display: 'none' } : { display: 'inline' }}
        className='hamburger'
        onTouchEnd={updateDisplay}
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
