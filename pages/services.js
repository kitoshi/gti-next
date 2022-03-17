import VoiceListContent from '../components/content/voicelist'
import Navbar from '../components/navbar'
import InternetListContent from '../components/content/internetlist'
import DataListContent from '../components/content/datalist'
import ContactForm from '../components/contactform'
export default function Services(props) {
  return (
    <>
      <main>
        <section
          style={{
            backgroundColor: 'var(--bg-color)',
            paddingTop: '15px'
          }}
        >
          <VoiceListContent page={'services'} />
        </section>

        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            backgroundColor: 'var(--section-color)',
            color: 'var(--heading-color)'
          }}
        >
          <InternetListContent page={'services'} />
        </section>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'var(--bg-color)',
            paddingTop: '15px'
          }}
        >
          <DataListContent page={'services'} />
        </section>

        <section
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
          ref={props.contactRef}
        >
          <ContactForm />
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
          <footer
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <p>
              2017 Global Telemanagement Inc. Global Telemanagement Inc.
              200-1892 W. Broadway Vancouver B.C. V6J 1Y9 604-637-4772
            </p>
          </footer>
        </section>
      </main>
    </>
  )
}
