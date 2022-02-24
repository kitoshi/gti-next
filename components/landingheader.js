import Image from 'next/image'

export default function LandingHeader(params) {
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
        Global Telemanagement Inc.
      </header>
      <h1
        style={{
          paddingLeft: '2%',
          paddingRight: '2%',
          height: '70vh',
          width: '75%',
          justifyContent: 'center'
        }}
      >
        Enabling businesses to flow with change in order to grow
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={{
            backgroundColor: 'var(--section-color)',
            color: 'white',
            width: '100px',
            height: '50px',
            borderRadius: '12px',
            border: 'none',
            marginRight: '5%'
          }}
        >
          Learn More
        </button>
        <button
          style={{
            width: '100px',
            height: '50px',
            borderRadius: '12px',
            borderStyle: 'solid',
            border: 'none'
          }}
        >
          Get Quote
        </button>
      </div>

      <p
        style={{
          textTransform: 'uppercase',
          fontSize: 'medium',
          textAlign: 'center'
        }}
      >
        / Voice / Internet / Data
      </p>
    </>
  )
}
