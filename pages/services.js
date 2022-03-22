import VoiceListContent from '../components/content/voicelist'
import InternetListContent from '../components/content/internetlist'
import DataListContent from '../components/content/datalist'
import ContactForm from '../components/contactform'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import EnhanceVoiceContent from '../components/content/enchancelist'

export default function Services(props) {
  const [width, setWidth] = useState(0)
  const enhancedRef = useRef(null)
  const voiceRef = useRef(null)
  const internetRef = useRef(null)
  const dataRef = useRef(null)

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

  function onEnhancedButtonClick() {
    enhancedRef.current.scrollIntoView()
  }
  function onVoiceButtonClick() {
    voiceRef.current.scrollIntoView()
  }
  function onInternetButtonClick() {
    internetRef.current.scrollIntoView()
  }
  function onDataButtonClick() {
    dataRef.current.scrollIntoView()
  }

  return (
    <>
      <header
        style={
          width > 800
            ? { display: 'none' }
            : {
                display: 'flex',
                backgroundColor: 'var(--off-white)',
                paddingTop: '4%',
                marginTop: '0',
                paddingLeft: '3%'
              }
        }
      >
        <a href={'/'} className='header-home-link' alt='logo home link'>
          <Image
            src={'/logo_only_clr_sm.png'}
            alt='GTI logo'
            layout='fixed'
            width={24}
            height={24}
          />
          &nbsp;Global Telemanagement Inc.
        </a>
      </header>
      <main>
        <section
          className='services-first-section'
          style={{
            backgroundColor: 'var(--bg-color)',
            alignItems: 'center',
            position: 'relative',
            height: '100vh'
          }}
        >
          <div className='services-header-image-container'>
            <h1
              style={{
                marginTop: '0',
                paddingTop: '10%',
                paddingLeft: '3.5%',
                position: 'absolute',
                top: '5%',
                left: '0',
                zIndex: '1'
              }}
            >
              Specialized enterprise infrastructure tailored to your business.
            </h1>
            <Image
              src={'/gear_animation.gif'}
              alt='spinning gears animation'
              layout='fill'
              objectFit='contain'
              priority
            />
          </div>

          <nav>
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
              onClick={onEnhancedButtonClick}
              tabIndex='0'
            >
              Enhanced Voice
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
              onClick={onVoiceButtonClick}
              className='landing-button-contact'
            >
              Voice
            </button>
            <button
              style={{
                width: '33%',
                height: '50px',
                borderRadius: '12px',
                borderStyle: 'solid',
                border: 'none',
                marginRight: '5%',
                fontSize: 'medium'
              }}
              onClick={onInternetButtonClick}
              className='landing-button-contact'
            >
              Internet
            </button>
            <button
              style={{
                color: 'white',
                width: '33%',
                height: '50px',
                borderRadius: '12px',
                border: 'none',

                fontSize: 'medium'
              }}
              className='landing-button'
              onClick={onDataButtonClick}
              tabIndex='0'
            >
              Data
            </button>
          </nav>
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            backgroundColor: 'var(--section-color)',
            color: 'var(--off-white)'
          }}
          ref={enhancedRef}
        >
          <EnhanceVoiceContent />
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            backgroundColor: 'var(--off-white)',
            color: 'var(--font-color)',
            paddingLeft: '0',
            paddingRight: '0'
          }}
          ref={voiceRef}
        >
          <VoiceListContent page={'services'} width={width} />
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--bg-color)',
            paddingTop: '15px',
            paddingLeft: '0',
            paddingRight: '0'
          }}
          ref={internetRef}
        >
          <InternetListContent page={'services'} />
        </section>

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            backgroundColor: 'var(--bg-color)',
            color: 'var(--font-color)',
            paddingLeft: '0',
            paddingRight: '0'
          }}
          ref={dataRef}
        >
          <DataListContent page={'services'} />
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '15px',
            backgroundColor: 'var(--section-color)',
            color: 'white'
          }}
          ref={props.contactRef}
        >
          <ContactForm />
        </section>
        <section>
          <footer
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <p>
              2017 Global Telemanagement Inc. Global Telemanagement Inc.
              200-1892 W. Broadway Vancouver B.C. V6J 1Y9 604-637-4772
            </p>
          </footer>
        </section>
      </main>
    </>
  )
}
