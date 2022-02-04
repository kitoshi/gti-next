import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import SecuritySvg from '../components/security'
import PhoneSvg from '../components/phone'
import WorldSvg from '../components/world'
export default function Home() {
  return (
    <div>
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
          backgroundImage: 'url("/jmb_home_xl.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '25vh',
          paddingTop: '3vh'
        }}
      >
        <h1 style={{ marginTop: '0', color: 'var(--heading-color)' }}>
          Global Telemanagement Inc.
        </h1>
        <h2 style={{ marginTop: '0', color: 'var(--heading-color)' }}>
          Your one stop solution
        </h2>
      </header>
      <main className={styles.container}>
        <section>
          <h3>Why Choose GTI?</h3>
          <ul>
            <li>Voice Crystal Clear Calling where and when you want it.</li>
            <li>Internet The Best Connection for your business.</li>
            <li>
              Data Robust solutions where security and predictability Count
            </li>
          </ul>
          <p>
            Companies that are not changing and moving forward are falling
            behind their competitors - sometimes tragically. GTI has been
            supporting business in adapting to these changes since 1995. We
            provide you with Telecom solutions and support that help you focus
            on your core business and succeed in this rapidly changing business
            environment. We like to think that we are Momma Bear, and that your
            Telecom services are the cubs that we need to fiercely protect and
            support.
          </p>
        </section>

        <section>
          <h3>The Bottom Line</h3>
          <p>
            Every service we develop at GTI is designed to make a significant,
            measurable impact on what you care most about.
          </p>
          <ul>
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
        <h4>GTI...bringing a world of telecom solutions to your business. </h4>
        <Link href={'/services'}>
          <a>Services</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <p>
          2017 Global Telemanagement Inc. Global Telemanagement Inc. 200-1892 W.
          Broadway Vancouver B.C. V6J 1Y9 604-637-4772
        </p>
      </footer>
    </div>
  )
}
