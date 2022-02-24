import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import SecuritySvg from '../components/security'
import PhoneSvg from '../components/phone'
import WorldSvg from '../components/world'
import LandingList from '../components/landinglist'
import LandingHeader from '../components/landingheader'
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
      <section
        style={{
          paddingRight: '2.5%',
          paddingLeft: '2.5%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <LandingHeader />
      </section>
      <main className={styles.container}>
        <section
          style={{
            backgroundColor: 'var(--section-color)',
            paddingTop: '15px',
            color: 'white'
          }}
        >
          <h3
            style={{
              margin: '0'
            }}
          >
            We scale your network infrastructure with your growing business
          </h3>

          <LandingList />
        </section>
        <section style={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Adapting to a changing environment</h3>
          <p>
            Companies that are not changing and moving forward are falling
            behind their competitors - sometimes tragically. GTI has been
            supporting business in adapting to these changes since 1995.{' '}
          </p>
          <div style={{ position: 'relative', height: '25vh' }}>
            <Image src='/fiber.jpg' alt='fiber cable' layout='fill' />
          </div>
          <p>
            We provide you with Telecom solutions and support that help you
            focus on your core business and succeed in this rapidly changing
            business environment. We like to think that we are Momma Bear, and
            that your Telecom services are the cubs that we need to fiercely
            protect and support.
          </p>
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
          <h3>The Bottom Line</h3>
          <p>
            Every service we develop at GTI is designed to make a significant,
            measurable impact on what you care most about.
          </p>
          <ul
            style={{
              listStyleType: 'none',
              display: 'flex',
              padding: '0',
              justifyContent: 'space-between',
              flexDirection: 'column'
            }}
          >
            <li>Like delighting your customers</li>
            <li>Streamlining processes</li>
            <li>
              Doing new things in a better, faster, more effective and secure
              way
            </li>
          </ul>
          <p>
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
