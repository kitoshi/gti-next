import Head from 'next/head'
import LandingListContent from '../components/content/landinglist'
import LandingHeaderContent from '../components/content/landingheader'
import BottomLineContent from '../components/content/bottomlinelist'
import { useRef, useState, useEffect } from 'react'
import ContactForm from '../components/contactform'
import AdaptingContent from '../components/content/adapting'
import ClosingContent from '../components/content/closing'
import Image from 'next/image'

export default function Home(props) {
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
  const contactRef = useRef(null)
  const learnRef = useRef(null)
  const headerRef = useRef(null)
  const [landinglistfocus, setLandingListFocus] = useState('')

  function onLearnButtonClick() {
    learnRef.current.scrollIntoView()
  }
  function onContactButtonClick() {
    contactRef.current.scrollIntoView()
  }

  return (
    <>
      <Head>
        <title>
          Custom Telecom Solutions Provider - Global Telemanagement Inc
        </title>
        <meta
          name='description'
          content='Business Information for Global Telemanagement Inc'
        />
        <meta
          content='width=device-width, initial-scale=1.0'
          name='viewport'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
        <Image
          src={'/logo_only_clr_sm.png'}
          alt='GTI logo'
          layout='fixed'
          width={24}
          height={24}
        />
        &nbsp;Global Telemanagement Inc.
      </header>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh'
        }}
      >
        <LandingHeaderContent
          onLearnButtonClick={onLearnButtonClick}
          onContactButtonClick={onContactButtonClick}
          setLandingListFocus={setLandingListFocus}
          headerRef={headerRef}
        />
      </section>
      <main>
        <section
          style={{
            backgroundColor: 'var(--section-color)',
            paddingTop: '15px',
            color: 'white'
          }}
          ref={learnRef}
        >
          <LandingListContent landinglistfocus={landinglistfocus} />
        </section>

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
          }}
        >
          <AdaptingContent />
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--section-color)',
            paddingTop: '15px',
            color: 'white'
          }}
        >
          <BottomLineContent />
        </section>

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          ref={contactRef}
        >
          <ClosingContent />
          <ContactForm />
        </section>
      </main>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '15px',
          backgroundColor: 'var(--section-color)',
          color: 'white'
        }}
      >
        <footer
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <p>
            2022 Global Telemanagement Inc. Global Telemanagement Inc. 200-1892
            W. Broadway Vancouver B.C. V6J 1Y9 604-637-4772
          </p>
        </footer>
      </section>
    </>
  )
}
