import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import SecuritySvg from '../components/security'
import PhoneSvg from '../components/phone'
import WorldSvg from '../components/world'
import LandingList from '../components/landinglist'
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Custom Telecom Solutions Provider - Global Telemanagement Inc
        </title>
        <meta
          name='Telecom Solutions Provider'
          content='Business Information for Global Telemanagement Inc'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <h1
          style={{
            marginTop: '0',
            marginBottom: '0',
            color: 'var(--heading-color)',
            fontSize: '7.5vw',
            textShadow:
              '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
            textAlign: 'center'
          }}
        >
          Global Telemanagement Inc.
        </h1>

        <Image
          src='/jmb_home_xl.png'
          alt='Picture of False Creek in Vancouver'
          objectFit='cover'
          objectPosition='center'
          className='landingimage'
          layout='responsive'
          width='100%'
          height='50%'
          priority='true'
        />
      </header>
      <main className={styles.container}>
        <section
          style={{
            backgroundColor: 'var(--section-color)',
            paddingTop: '15px'
          }}
        >
          <h3
            style={{
              fontSize: '100%',
              fontSize: '6vw',
              margin: '0'
            }}
          >
            Why Choose GTI?
          </h3>
          <LandingList />
        </section>
        <section style={{ display: 'grid' }}>
          <p
            style={{
              gridColumnStart: '1',
              gridColumnEnd: '2',
              gridRowStart: '1'
            }}
          >
            Companies that are not changing and moving forward are falling
            behind their competitors - sometimes tragically. GTI has been
            supporting business in adapting to these changes since 1995.{' '}
          </p>
          <aside
            style={{
              gridRowStart: '1',
              gridRowEnd: '3',
              gridColumnStart: '2',
              gridColumnEnd: '3'
            }}
          ></aside>
          <p
            style={{
              gridRowStart: '2',
              gridColumnStart: '1',
              gridColumnEnd: '2',
              alignSelf: 'start'
            }}
          >
            We provide you with Telecom solutions and support that help you
            focus on your core business and succeed in this rapidly changing
            business environment. We like to think that we are Momma Bear, and
            that your Telecom services are the cubs that we need to fiercely
            protect and support.
          </p>
        </section>
        <section
          style={{
            display: 'grid',
            backgroundColor: 'var(--section-color)',
            paddingTop: '15px'
          }}
        >
          <aside
            style={{
              gridRowStart: '1',
              gridRowEnd: '3',
              gridColumnStart: '1',
              gridColumnEnd: '2'
            }}
          ></aside>
          <h3
            style={{
              gridRowStart: '1',
              gridColumnStart: '2',
              gridColumnEnd: '3'
            }}
          >
            The Bottom Line
          </h3>
          <p
            style={{
              gridRowStart: '2',
              gridColumnStart: '2',
              gridColumnEnd: '3'
            }}
          >
            Every service we develop at GTI is designed to make a significant,
            measurable impact on what you care most about.
          </p>
          <ul
            style={{
              listStyleType: 'none',
              display: 'flex',
              padding: '0',
              justifyContent: 'space-between',
              gridRowStart: '3',
              gridRowEnd: '4',
              gridColumnStart: '1',
              gridColumnEnd: '3'
            }}
          >
            <li>Like delighting your customers</li>
            <li>Streamlining processes</li>
            <li>
              Doing new things in a better, faster, more effective and secure
              way
            </li>
          </ul>
          <p
            style={{
              gridColumnStart: '1',
              gridColumnEnd: '3',
              gridRowStart: '4',
              gridRowEnd: '5'
            }}
          >
            Technology is driving significant changes in the marketplace: Today,
            the world&apos;s leading retailer has no physical stores, the
            world&apos;s largest taxi company owns no vehicles, and the
            world&apos;s biggest hotel company owns no buildings. To thrive,
            your business needs to embrace technology changes. We&apos;re here
            to help and support you in moving forward.
          </p>
        </section>
      </main>
      <section
        style={{
          display: 'grid',
          paddingTop: '15px'
        }}
      >
        <h4>GTI...bringing a world of telecom solutions to your business. </h4>
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
