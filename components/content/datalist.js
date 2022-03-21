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
      containerRef.current.style.backgroundColor = 'var(--bg-color)'
      containerRef.current.style.color = 'var(--font-color)'
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
              paddingBottom: '10%'
            }
          : { display: 'none' }
      }
      ref={containerRef}
      className='landing-list-item'
      onClick={() => {
        if (props.handleLandingVisibility === undefined) {
          //if on page with no props passed
          handleContainerVisibility()
        } else {
          handleContainerVisibility(), props.handleLandingVisibility()
        }
      }}
    >
      <h3>Data</h3>
      <h4>Robust, Reliable, Predictable, Secure, and Private</h4>
      <h5> Reliable and Secure Networking Services You Can Count On.</h5>
      <p>
        Connect your locations across the country on a completely private
        network with the most direct, lowest latency data transfer routes for
        your mission-critical applications. Completely protected from any events
        that affect the internet (including hacking and performance).
      </p>
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
