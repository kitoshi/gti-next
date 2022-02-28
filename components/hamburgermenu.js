import Navbar from '../pages/nav'
import Hamburger from './svg/hamburger'

export default function HamburgerMenu(params) {
  return (
    <>
      <Hamburger></Hamburger>
      <Navbar style={{ display: 'flexbox', flexDirection: 'vertical' }} />
    </>
  )
}
