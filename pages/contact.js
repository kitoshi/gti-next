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
      <section>
        <h3 style={{ marginTop: '0', paddingTop: '20%' }}>
          Please Contact Us For Any Additional Information.
        </h3>
        <h4>
          We would be more than happy to help you find solutions to
          move your business forward.
        </h4>
      </section>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '15px',
          backgroundColor: 'var(--section-color)',
          color: 'white'
        }}
      >
        <address style={{ fontStyle: 'normal' }}>
          <p>
            We are available to assist you during our business hours between:
            <br></br>Monday to Friday 9:00 to 17:00
          </p>
          <p>
            Contact us by Phone: 604-637-4772<br></br>
            Fax Number: 604-637-4722
          </p>
          <p>
            Visit our head office: <br></br>200 - 1892 W. Broadway Vancouver
            B.C. V6J 1Y9<br></br>
          </p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4775.120337979842!2d-123.14714037228175!3d49.264024896921505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673b75dec6c77%3A0x714fb34c425bac2!2s200-1892%20W%20Broadway%2C%20Vancouver%2C%20BC%20V6J%201Y9%2C%20Canada!5e0!3m2!1sen!2sus!4v1647820792295!5m2!1sen!2sus'
            width={width > 800 ? width * 0.5 : width * 0.94}
            height='450'
            style={{ border: '0' }}
            allowFullScreen=''
            loading='lazy'
          ></iframe>
        </address>
        <p>Schedule a meeting online:</p>
        <ContactForm />
      </section>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '15px',
          backgroundColor: 'var(--off-white)',
          color: 'var(--font-color)'
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
