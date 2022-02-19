import Navbar from './nav'
import Hamburger from '../components/hamburger'

export default function HamburgerMenu(params) {
  return (
    <>
      <Hamburger></Hamburger>
      <Navbar style={{ display: 'flexbox', flexDirection: 'vertical' }} />
    </>
  )
}
