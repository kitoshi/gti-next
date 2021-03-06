import { useRef, useLayoutEffect, useState, useEffect } from 'react'
import Image from 'next/image'
export default function VoiceListContent(props) {
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
      containerRef.current.style.zIndex = '0'
    }
    return () => {}
  }, [containerRef, props.page])

  return (
    <div
      style={
        (props.landingdisplay === false &&
          props.activedisplay === 'VoiceListContent') ||
        props.page !== 'index'
          ? {
              display: 'flex',
              flexDirection: 'column',
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
      <h4>
        Scalable, Crystal Clear Voice, Call Control solutions delivered where
        and when you want them.
      </h4>
      <p>
        Your voice services give that personal touch to your client contact.
        Ensure your branding is supported with:
      </p>

      <ul>
        <li>
          SIP Trunking Flexibility, multiple options. Reduce toll charges and
          create a local presence
        </li>
        <li>
          PRI Circuit Robust proven solutions utilizing your existing equipment
        </li>
        <li>
          Managed Voice End to end systems utilizing our strategic partners
        </li>
        <li>
          Enhanced Voice Integrated services that augment and streamline your
          business operations with specialized features and integration into
          your existing CRM infrastructure
        </li>
      </ul>
      <div style={{ position: 'relative', height: '25vh' }}>
        <Image
          src={'/network_server.jpg'}
          alt='router with network cables connected'
          layout='fill'
        />
      </div>
    </div>
  )
}
