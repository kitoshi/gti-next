import VoiceListContent from '../components/content/voicelist'
import InternetListContent from '../components/content/internetlist'
import DataListContent from '../components/content/datalist'
import ContactForm from '../components/contactform'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import EnhanceVoiceContent from '../components/content/enchancelist'

export default function Services(props) {
  const [width, setWidth] = useState(0)
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
          <div className='services-header-image-container'>
            <Image
              src={'/chart_animation.gif'}
              alt='chart with arrow pointing up animation'
              layout='fill'
              objectFit='contain'
              priority
            />
          </div>
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            backgroundColor: 'var(--section-color)',
            color: 'var(--off-white)'
          }}
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
