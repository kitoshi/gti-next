import Image from 'next/image'
export default function BottomLine(params) {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--section-color)',
        paddingTop: '15px',
        color: 'white'
      }}
    >
      <h3>
        The Bottom{' '}
        <span
          style={{
            textDecoration: 'underline',
            textDecorationColor: 'var(--secondary-color)'
          }}
        >
          Line
        </span>
      </h3>
      <p>
        Every service we develop at GTI is designed to make a significant and
        measurable impact on what you care most about.
      </p>
      <ul
        style={{
          listStyleType: 'none',
          display: 'grid',
          padding: '0',
          justifyContent: 'space-evenly',
          gridTemplateRows: '1fr',
          gridTemplateColumns: '1fr 1fr',
          rowGap: '2%',
          marginTop: '2%'
        }}
      >
        <li
          style={{
            width: '100%',
            gridRowStart: '1',
            gridRowEnd: '2',
            gridColumnStart: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '2%',
            marginLeft: '1%'
          }}
          className='landing-tiles'
        >
          <Image
            src='/happy_animation.gif'
            alt='employee talking on headset to happy customer'
            layout='intrinsic'
            className='landing-image'
            width={150}
            height={150}
          />
          <p
            style={{
              width: '65%',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Delighting your customers
          </p>
        </li>
        <li
          style={{
            width: '100%',
            gridRowStart: '1',
            gridRowEnd: '2',
            gridColumnStart: '2',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '2%',
            marginLeft: '1%'
          }}
          className='landing-tiles'
        >
          <Image
            src='/assembly_animation.gif'
            alt='cube build from cubes animation'
            layout='intrinsic'
            className='landing-image'
            width={150}
            height={150}
          />
          <p
            style={{
              width: '65%',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Streamlining processes
          </p>
        </li>

        <li
          style={{
            width: '100%',
            gridRowStart: '2',
            gridRowEnd: '3',
            gridColumnStart: '1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '2%',
            marginLeft: '1%'
          }}
          className='landing-tiles'
        >
          <Image
            src='/lightning_animation.gif'
            alt='lightning animation'
            layout='intrinsic'
            className='landing-image'
            width={150}
            height={150}
          />
          <p
            style={{
              width: '65%',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Operating systems in a better, faster, more effective and secure
            way.
          </p>
        </li>
        <li
          style={{
            width: '100%',
            gridRowStart: '2',
            gridRowEnd: '3',
            gridColumnStart: '2',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '2%',
            marginLeft: '1%'
          }}
          className='landing-tiles'
        >
          <Image
            src='/rocketship_animation.gif'
            alt='rocketship flying in space animation'
            layout='intrinsic'
            className='landing-image'
            width={150}
            height={150}
          />
          <p
            style={{
              width: '65%',
              textAlign: 'center',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Growing your business.
          </p>
        </li>
      </ul>
    </section>
  )
}
