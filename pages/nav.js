import Link from 'next/link'
import Image from 'next/image'
import PhoneSvg from '../components/phone'
import EmailSVG from '../components/email'
export default function Navbar(props) {
  return (
    <header>
      <nav
        style={{
          backgroundColor: 'var(--faux-eerie)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Link href={'/'}>
          <a>
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
            style={{
              color: 'var(--secondary-color)',
              marginLeft: 'auto'
            }}
            className='navbar-item'
          >
            Home
          </a>
        </Link>
        <Link href={'/services'}>
          <a
            style={{
              color: 'var(--secondary-color)',
              marginLeft: '2%'
            }}
            className='navbar-item'
          >
            Services
          </a>
        </Link>
        <Link href={'/about'}>
          <a
            style={{
              color: 'var(--secondary-color)',
              marginLeft: '2%'
            }}
            className='navbar-item'
          >
            About GTI
          </a>
        </Link>
        <Link href={'/contact'} style={{}}>
          <a
            style={{
              color: 'var(--secondary-color)',
              marginLeft: '2%'
            }}
            className='navbar-item'
          >
            Contact Us
          </a>
        </Link>
        <a>
          <PhoneSvg
            backgroundcolor={'#0d1427'}
            objectcolor={'#c97211ff'}
            scale={1}
            height={24}
            width={24}
          />
        </a>
        <a>
          <EmailSVG
            backgroundcolor={'#0d1427'}
            objectcolor={'#c97211ff'}
            scale={1}
            height={24}
            width={24}
          />
        </a>
      </nav>
    </header>
  )
}
