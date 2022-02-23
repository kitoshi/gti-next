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
          fontSize: '10vw',
          paddingLeft: '2%',
          paddingRight: '2%',
          height: '70vh',
          width: '75%',
          justifyContent: 'center'
        }}
      >
        Enabling businesses to flow with change in order to grow
      </h1>
      <div style={{ display: 'flex' }}>
        <button className='btn btn-shadow btn-shadow--black'>
          <span>Learn More</span>
        </button>
        <button className='btn btn-shadow-grey btn-shadow--grey'>
          <span>Get Quote</span>
        </button>
      </div>

      <p style={{ textTransform: 'uppercase', fontSize: 'medium' }}>
        / Voice / Internet / Data
      </p>
    </>
  )
}
