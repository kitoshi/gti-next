import Image from 'next/image'

export default function LandingHeaderContent(props) {
  return (
    <>
      <header>
        <Image
          src={'/logo_only_clr_sm.png'}
          alt='GTI logo'
          layout='fixed'
          width={24}
          height={24}
        />
        &nbsp;Global Telemanagement Inc.
      </header>
      <h1
        style={{
          paddingLeft: '2%',
          paddingRight: '2%',
          height: '100%',
          width: '75%',
          justifyContent: 'center',
          marginTop: '5%',
          marginBottom: '7%'
        }}
      >
        Enabling businesses to flow with change in order to grow
        <em className='orange-emphasis'>.</em>
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{
            color: 'white',
            width: '33%',
            height: '50px',
            borderRadius: '12px',
            border: 'none',
            marginRight: '5%',
            fontSize: 'medium'
          }}
          className='landing-button'
          onClick={props.onLearnButtonClick}
        >
          Learn More
        </button>
        <button
          style={{
            width: '33%',
            height: '50px',
            borderRadius: '12px',
            borderStyle: 'solid',
            border: 'none',
            fontSize: 'medium'
          }}
          onClick={props.onContactButtonClick}
          className='landing-button-contact'
        >
          Contact Us
        </button>
      </div>

      <p
        style={{
          textTransform: 'uppercase',
          fontSize: 'medium',
          textAlign: 'center'
        }}
      >
        / Enterprise / Voice / Internet / Data
      </p>
    </>
  )
}
