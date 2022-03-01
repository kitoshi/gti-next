const HamburgerSVG = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={props.height}
    width={props.width}
    viewBox='0 0 100 60'
  >
    <rect y='0' width='100' height='10'></rect>
    <rect y='30' width='100' height='10'></rect>
    <rect y='60' width='100' height='10'></rect>
  </svg>
)

export default HamburgerSVG
