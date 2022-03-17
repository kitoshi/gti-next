import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import VoiceListContent from './voicelist'
import InternetListContent from './internetlist'
import DataListContent from './datalist'
export default function LandingList(props) {
  const [landingdisplay, setLandingVisibility] = useState(true)
  const [activedisplay, setLandingDisplay] = useState('')
  const landingGridRef = useRef(null)

  function handleLandingVisibility() {
    if (landingdisplay === true) {
      setLandingVisibility(false)
    } else {
      setLandingVisibility(true)
    }
  }
  function handleLandingDisplay(e) {
    if (e === 'voice') {
      setLandingDisplay('VoiceListContent')
    } else if (e === 'internet') {
      setLandingDisplay('InternetListContent')
    } else if (e === 'data') {
      setLandingDisplay('DataListContent')
    }
  }

  useEffect(() => {
    if (props.landinglistfocus === 'Enterprise') {
      landingGridRef.current.style.border = '2px solid black'
    }
    //animated border here, make 100% wide element and shrink borders to show fake animation

    return () => {}
  }, [props.landinglistfocus])

  return (
    <>
      <VoiceListContent
        landingdisplay={landingdisplay}
        activedisplay={activedisplay}
        page={'index'}
      />
      <InternetListContent
        landingdisplay={landingdisplay}
        activedisplay={activedisplay}
        page={'index'}
      />
      <DataListContent
        landingdisplay={landingdisplay}
        activedisplay={activedisplay}
        page={'index'}
      />
      <div className='landing-content'>
        <h2>
          We <em className='orange-emphasis'>scale</em> your network
          infrastructure with your growing business
        </h2>
        <ul
          style={{
            listStyleType: 'none',
            display: 'grid',
            justifyContent: 'space-evenly',
            gridTemplateRows: '1fr 1fr 1fr',
            rowGap: '2%',
            marginTop: '10%'
          }}
          className='landing-list-container'
          ref={landingGridRef}
        >
          <li
            style={{
              width: '100%',
              gridRowStart: '1',
              gridRowEnd: '2',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '2%',
              marginLeft: '1%',
              cursor: 'pointer'
            }}
            className='landing-tiles'
            onClick={() => {
              handleLandingVisibility(), handleLandingDisplay('voice')
            }}
          >
            <Image
              src='/phone_animation.gif'
              alt='blueprint animation of a phone'
              layout='intrinsic'
              className='landing-image'
              width={150}
              height={150}
            />
            <p
              style={{
                width: '65%',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '5vw',
                paddingRight: '5vw'
              }}
            >
              <strong>Crystal clear</strong> voice calling where and when you
              want it.
            </p>
          </li>
          <li
            style={{
              width: '100%',
              gridRowStart: '2',
              gridRowEnd: '3',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '2%',
              marginLeft: '1%',
              cursor: 'pointer'
            }}
            className='landing-tiles'
            onClick={() => {
              handleLandingVisibility(), handleLandingDisplay('internet')
            }}
          >
            <Image
              src='/mesh_animation.gif'
              alt='texting on phone'
              layout='intrinsic'
              className='landing-image'
              width={150}
              height={150}
            />
            <p
              style={{
                width: '65%',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '5vw',
                paddingRight: '5vw'
              }}
            >
              The <strong>optimal</strong> internet connection for your
              business.
            </p>
          </li>
          <li
            style={{
              width: '100%',
              gridRowStart: '3',
              gridRowEnd: '4',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '2%',
              marginLeft: '1%',
              cursor: 'pointer'
            }}
            className='landing-tiles'
            onClick={() => {
              handleLandingVisibility(), handleLandingDisplay('data')
            }}
          >
            <Image
              src='/lock_animation.gif'
              alt='a lock morphing to checkmark'
              layout='intrinsic'
              className='landing-image'
              width={150}
              height={150}
            />
            <p
              style={{
                width: '65%',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '5vw',
                paddingRight: '5vw'
              }}
            >
              Robust data solutions where{' '}
              <strong>security and predictability</strong> count
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}
