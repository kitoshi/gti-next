import Image from 'next/image'
import { useState, useEffect, useLayoutEffect } from 'react'

export default function LandingHeaderContent(props) {
  const [width, setWidth] = useState(0)
  const [activeword, setActiveWord] = useState([
    'b',
    'u',
    's',
    'i',
    'n',
    'e',
    's',
    's',
    'e',
    's'
  ])

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

  async function headlineTextSwitch() {
    let headlinelist = [
      'schools',
      'non-profits',
      'charities',
      'universities',
      'businesses'
    ]
    await new Promise((res) => setTimeout(res, 1000))
    for (const item of headlinelist) {
      let singlewordarray = item.split('')
      for (const [idx, letter] of singlewordarray.entries()) {
        let activecopy = [...activeword]
        setActiveWord(activecopy.splice(idx, 1, letter))
        console.log(activecopy)
        await new Promise((res) => setTimeout(res, 1000))
        if (idx === singlewordarray.length - 1) {
          let activemutatedarray = activecopy.splice(idx + 1)
          setActiveWord(activemutatedarray)
        }
      }
      await new Promise((res) => setTimeout(res, 5000))
    }
  }
  headlineTextSwitch()

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
        Enabling {activeword.join('')} to flow with{' '}
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
        >
          Enterprise{' '}
        </a>
        /{' '}
        <a
          onClick={() => {
            props.onLearnButtonClick(), handleFocusChange('Voice')
          }}
        >
          Voice{' '}
        </a>
        /{' '}
        <a
          onClick={() => {
            props.onLearnButtonClick(), handleFocusChange('Internet')
          }}
        >
          Internet{' '}
        </a>
        /{' '}
        <a
          onClick={() => {
            props.onLearnButtonClick(), handleFocusChange('Data')
          }}
        >
          Data
        </a>
      </p>
    </>
  )
}
