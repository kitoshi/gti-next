import ContactForm from '../components/contactform'
import Image from 'next/image'
import { useState, useEffect } from 'react'
export default function About() {
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
        <Image
          src={'/logo_only_clr_sm.png'}
          alt='GTI logo'
          layout='fixed'
          width={24}
          height={24}
        />
        &nbsp;Global Telemanagement Inc.
      </header>
      <main style={{ marginTop: '0' }}>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '15px',
            backgroundColor: 'var(--off-white)',
            color: 'var(--font-color)',
            alignItems: 'center'
          }}
        >
          <h1 style={{ marginTop: '0', paddingTop: '10%' }}>Our Team at GTI</h1>
          <h2>Who Are We:</h2>
          <p>
            Established in 1995, GTI has a proven track record of bringing
            multiple carriers to the table to suit your business needs. We
            specialize in powerful offerings for multiple services at single or
            multiple sites, offering full redundancy and personalization.
          </p>
          <h3>Our Team:</h3>
          <p>
            GTI is a dynamic and flexible team based in Vancouver. We focus on
            client success. We want to develop a long-term partnership with you
            and help you succeed.
          </p>
          <h3>Our Commitment:</h3>
          <p>
            We focus on understanding your business. We help you towards meeting
            current needs and achieving your future goals.
          </p>
          <ul>
            <li>
              Excellent customer support. We speak telecom and take the pain out
              of dealing with a big telco, so you don&quot;t have to
            </li>
            <li>
              We will always maintain confidentiality and protect your
              information
            </li>
            <li>
              We are the &quot;Apple of telecom companies&quot;, we are easy to
              use
            </li>
            <li>
              Live, local customer representatives who know your accounts.
              <ul>
                <li>
                  Spend less time on the phone resolving issues and leave them
                  to us
                </li>
                <li>
                  We will work on your issues, so you can continue your day
                </li>
              </ul>
            </li>
          </ul>
          <h3>GTI Core Values:</h3>
          <ul>
            <li>
              <strong>We get it done right and on time</strong> you can count on
              us and concentrate on your business
            </li>
            <li>
              <strong>Positively passionate, &quot;I think I can&quot;</strong>
              we find ways to resolve your challenges
            </li>
            <li>
              <strong>Innovate to excellence </strong>we continuously work on
              ourselves and our processes, to give you the best service possible
            </li>
            <li>
              <strong>Win - Win - Win</strong>for our clients, our suppliers and
              ourselves
            </li>
          </ul>
          <h3>Our approach is simple:</h3>
          <p>
            We provide tailored solutions that suit your business needs. We are
            not a bloated telecom bureaucracy that tries to force you into their
            latest marketing scheme. Instead we partner with you to understand
            your needs and challenges and find the best solution available to
            help you succeed.
          </p>
          <h4>We get it right and on time.</h4>
          <h4>
            GTI...bringing a world of telecom solutions to your business.{' '}
          </h4>
          <ContactForm />
        </section>
      </main>
    </>
  )
}
