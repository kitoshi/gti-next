import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import LandingList from '../components/landinglist'
import LandingHeader from '../components/landingheader'
import BottomLine from '../components/bottomlinelist'
import { useRef } from 'react'
import ContactForm from '../components/contactform'
export default function Home(props) {
  const contactRef = useRef(null)
  const learnRef = useRef(null)
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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section
        style={{
          paddingRight: '2.5%',
          paddingLeft: '2.5%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <LandingHeader
          onLearnButtonClick={onLearnButtonClick}
          onContactButtonClick={onContactButtonClick}
        />
      </section>
      <main className={styles.container}>
        <section
          style={{
            backgroundColor: 'var(--section-color)',
            paddingTop: '15px',
            color: 'white'
          }}
          ref={learnRef}
        >
          <h2
            style={{
              margin: '0'
            }}
          >
            We <em className='orange-emphasis'>scale</em> your network
            infrastructure with your growing business
          </h2>

          <LandingList />
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
          }}
        >
          <h3>
            Adapting to a <em className='orange-emphasis'>changing</em>{' '}
            environment
          </h3>
          <p>
            Companies need to change and move forward to stay ahead of their
            competitors. We have an established track record of supporting
            business in adapting to these changes since 1995.{' '}
          </p>
          <div style={{ position: 'relative', height: '25vh' }}>
            <Image src='/fiber.jpg' alt='fiber cable' layout='fill' />
          </div>
          <p>
            We provide you with Telecom solutions and reliable support that
            enables you to focus on your core business to succeed in this
            rapidly changing business environment. We like to think that we are
            Momma Bear, and that your Telecom services are the cubs that we need
            to fiercely protect and support.
          </p>
        </section>
        <BottomLine />
        <section
          ref={contactRef}
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h3>
            Bringing a world of Telecom{' '}
            <em className='orange-emphasis'>solutions</em> to your business{' '}
          </h3>
          <p>
            Technology is driving significant changes in the marketplace: Today,
            the world&apos;s leading retailer has no physical stores, the
            world&apos;s largest taxi company owns no vehicles, and the
            world&apos;s biggest hotel company owns no buildings. To thrive,
            your business needs to embrace technology changes. We&apos;re here
            to help and support you in moving forward.
          </p>
          <p>
            Please leave use your email and a preferred time to chat and we will
            discuss your business requirements.
          </p>
          <ContactForm />
        </section>
      </main>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '15px',
          backgroundColor: 'var(--section-color)',
          color: 'white',
          height: '25vh'
        }}
      >
        <Link href={'/services'}>
          <a>Services</a>
        </Link>
        <footer className={styles.footer}>
          <p>
            2017 Global Telemanagement Inc. Global Telemanagement Inc. 200-1892
            W. Broadway Vancouver B.C. V6J 1Y9 604-637-4772
          </p>
        </footer>
      </section>
    </>
  )
}
