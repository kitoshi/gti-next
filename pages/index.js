import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import LandingList from '../components/landinglist'
import LandingHeader from '../components/landingheader'
import BottomLine from '../components/bottomlinelist'
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
            Companies need to change and move forward to stay ahead of their
            competitors. We have an established track record by supporting
            business in adapting to these changes since 1995.{' '}
          </p>
          <div style={{ position: 'relative', height: '25vh' }}>
            <Image src='/fiber.jpg' alt='fiber cable' layout='fill' />
          </div>
          <p>
            We provide you with Telecom solutions and constant support that
            enables you to focus on your core business to succeed in this
            rapidly changing business environment. We like to think that we are
            Momma Bear, and that your Telecom services are the cubs that we need
            to fiercely protect and support.
          </p>
        </section>
        <BottomLine />
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
