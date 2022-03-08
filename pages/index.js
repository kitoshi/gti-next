import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LandingListContent from '../components/content/landinglistcontent'
import LandingHeaderContent from '../components/content/landingheadercontent'
import BottomLineContent from '../components/content/bottomlinelistcontent'
import { useRef, useState } from 'react'
import ContactForm from '../components/contactform'
import Navbar from '../components/navbar'
import AdaptingContent from '../components/content/adaptingcontent'
import ClosingContent from '../components/content/closingcontent'
export default function Home(props) {
  const contactRef = useRef(null)
  const learnRef = useRef(null)
  const headerRef = useRef(null)

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
      <Navbar onContactButtonClick={onContactButtonClick} />
      <section
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <LandingHeaderContent
          onLearnButtonClick={onLearnButtonClick}
          onContactButtonClick={onContactButtonClick}
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
          <LandingListContent />
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
            flexDirection: 'column'
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
            2017 Global Telemanagement Inc. Global Telemanagement Inc. 200-1892
            W. Broadway Vancouver B.C. V6J 1Y9 604-637-4772
          </p>
        </footer>
      </section>
    </>
  )
}
