import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function LandingHeaderContent(props) {
  const [width, setWidth] = useState(0)
  const [activeword, setActiveWord] = useState('business')

  useEffect(() => {
    function updateWidth() {
      setWidth(() => window.innerWidth)
    }
    window.addEventListener('resize', updateWidth)
    updateWidth()
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [width])

  function handleFocusChange(e) {
    props.setLandingListFocus(e)
  }

  useEffect(() => {
    headlineTextSwitch()
    setInterval(() => {
      headlineTextSwitch()
    }, 24000)
    async function headlineTextSwitch() {
      let headlinelist = [
        'schools',
        'non-profits',
        'charities',
        'universities',
        'businesses'
      ]

      for (const item of headlinelist) {
        await new Promise((res) => setTimeout(res, 4000))
        setActiveWord(item)
      }
    }
    return () => {}
  }, [])

  return (
    <>
      <header
        style={width < 800 ? { display: 'inherit' } : { display: 'none' }}
      >
        <Image
          src={'/logo_only_clr_sm.png'}
          alt='GTI logo'
          layout='fixed'
          width={24}
          height={24}
        />
        &nbsp;Global Telemanagement Inc.
      </header>
      <h1
        style={{
          paddingLeft: '2%',
          paddingRight: '2%',
          height: '100%',
          width: '100%',
          justifyContent: 'center'
        }}
      >
        Enabling {activeword} to flow with{' '}
        <em className='orange-emphasis'>change</em> in order to grow.
      </h1>
      <div
        className='landing-button-box'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <button
          style={{
            color: 'white',
            width: '33%',
            height: '50px',
            borderRadius: '12px',
            border: 'none',
            marginRight: '5%',
            fontSize: 'medium'
          }}
          className='landing-button'
          onClick={props.onLearnButtonClick}
        >
          Learn More
        </button>
        <button
          style={{
            width: '33%',
            height: '50px',
            borderRadius: '12px',
            borderStyle: 'solid',
            border: 'none',
            fontSize: 'medium'
          }}
          onClick={props.onContactButtonClick}
          className='landing-button-contact'
        >
          Contact Us
        </button>
      </div>

      <p
        style={{
          textTransform: 'uppercase',
          fontSize: 'medium',
          textAlign: 'center'
        }}
      >
        /{' '}
        <a
          onClick={() => {
            props.onLearnButtonClick(), handleFocusChange('Enterprise')
          }}
          href='#enterprise information list'
        >
          Enterprise{' '}
        </a>
        /{' '}
        <a
          onClick={() => {
            props.onLearnButtonClick(), handleFocusChange('Voice')
          }}
          href='#voice information list'
        >
          Voice{' '}
        </a>
        /{' '}
        <a
          onClick={() => {
            props.onLearnButtonClick(), handleFocusChange('Internet')
          }}
          href='#internet information list'
        >
          Internet{' '}
        </a>
        /{' '}
        <a
          onClick={() => {
            props.onLearnButtonClick(), handleFocusChange('Data')
          }}
          href='#data information list'
        >
          Data
        </a>
      </p>
    </>
  )
}
