import Link from 'next/link'
import Image from 'next/image'
export default function Navbar() {
  return (
    <header>
      <nav>
        <Image
          src='/logo_only_clr_sm.png'
          alt='logo'
          width={'64'}
          height={'64'}
        ></Image>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
        <Link href={'/services'}>
          <a>Services</a>
        </Link>
        <Link href={'/about'}>
          <a>About GTI</a>
        </Link>
        <Link href={'/contact'}>
          <a>Contact Us</a>
        </Link>
      </nav>
    </header>
  )
}
