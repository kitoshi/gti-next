import { useRef, useLayoutEffect, useEffect, useState } from 'react'

export default function InternetListContent(props) {
  const containerRef = useRef(null)
  const [containerVisibility, setContainerVisibility] = useState(true)

  function handleContainerVisibility() {
    if (containerVisibility === true && props.page !== 'services') {
      setContainerVisibility(false)
    } else {
      setContainerVisibility(true)
    }
  }

  useEffect(() => {
    if (containerVisibility === true && props.page !== 'services') {
    } else if (containerVisibility === false && props.page !== 'services') {
      containerRef.current.style.display = 'none'
    }

    return () => {}
  }, [containerVisibility, containerRef, props.page])

  useLayoutEffect(() => {
    if (props.page === 'services') {
      containerRef.current.style.position = 'relative'
    }

    return () => {}
  }, [containerRef, props.page])

  return (
    <div
      style={
        (props.landingdisplay === false &&
          props.activedisplay === 'InternetListContent') ||
        props.page !== 'index'
          ? {
              display: 'inline',
              position: 'absolute',
              left: '0',
              backgroundColor: 'var(--section-color)',
              zIndex: '2',
              paddingLeft: '3%',
              paddingRight: '3%',
              paddingBottom: '10%'
            }
          : { display: 'none' }
      }
      ref={containerRef}
      onClick={() => {
        handleContainerVisibility(), props.handleLandingVisibility()
      }}
    >
      <h3>Internet Services</h3>
      <h3>The Best Connection for your business.</h3>
      <h3>Internet for Business</h3>
      <h4>
        High-speed, dedicated internet access, with the features you need to
        connect with customers, partners, and employees.
      </h4>
      <ul>
        <li>Fiber Internet. Robust high bandwidth scalable solutions</li>
        <li>
          LTE Wireless business continuity solutions integrated into your
          primary solution
        </li>
        <li>
          Fixed Wireless Primary and truly redundant secondary internet
          connections with uncapped traffic
        </li>
        <li>ADSL Competitive yet robust broadband solutions</li>
        <li>Coax-Cable Low cost broadband solutions</li>
        <li>
          Bonded Internet Fully redundant solutions: Bandwidth aggregation and
          auto failover with IP preservation across multiple underlying carriers
          and technologie
        </li>
      </ul>
    </div>
  )
}
