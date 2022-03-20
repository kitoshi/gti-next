import ContactForm from '../components/contactform'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Contact(props) {
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
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '15px',
          backgroundColor: 'var(--section-color)',
          color: 'white'
        }}
      >
        <h3 style={{ marginTop: '0', paddingTop: '20%' }}>
          Please Contact Us For Any Additional Information.
        </h3>
        <h4>
          We&apos;d more than happy to help you find the solutions to help you
          move your business forward.
        </h4>
        <p>Visit our head office</p>
        <p>Give us a call</p>
        <ContactForm />
      </section>
    </>
  )
}
