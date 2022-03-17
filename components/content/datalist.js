import { useRef, useLayoutEffect, useEffect, useState } from 'react'

export default function DataListContent(props) {
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
      containerRef.current.style.backgroundColor = 'var(--off-white)'
    }

    return () => {}
  }, [containerRef, props.page])
  return (
    <div
      style={
        (props.landingdisplay === false &&
          props.activedisplay === 'DataListContent') ||
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
      onClick={handleContainerVisibility}
    >
      <h3>Data Services</h3>
      <h3>Predictable, Secure, and Private</h3>
      <h3>Robust Reliable Services You Can Count On.</h3>
      <h4>
        Secure and reliable networking solutions. Connect your locations across
        the country on a completely private network with the most direct, lowest
        latency data transfer routes for your mission-critical applications.
        Completely protected from any events that affect the internet (including
        hacking and performance).
      </h4>
      <ul>
        <li>
          MPLS Proven best of breed predictable secure multipoint connections
          with CoS
        </li>
        <li>Switched Ethernet Cost competitive multipoint solutions</li>
        <li>Private Line Point to point secure predictable solutions</li>
        <li>
          Bonded Solutions Fully redundant solutions: Bandwidth aggregation and
          auto failover with IP preservation across multiple underlying carriers
          and technologie
        </li>
      </ul>
    </div>
  )
}
