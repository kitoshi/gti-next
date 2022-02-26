import Image from 'next/image'

export default function LandingList(params) {
  return (
    <>
      <ul
        style={{
          listStyleType: 'none',
          display: 'grid',
          padding: '0',
          justifyContent: 'space-evenly',
          gridTemplateRows: '1fr 1fr 1fr',
          rowGap: '2%',
          marginTop: '10%'
        }}
      >
        <li
          style={{
            width: '100%',
            gridRowStart: '1',
            gridRowEnd: '2',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '2%',
            marginLeft: '1%'
          }}
          className='landing-tiles'
        >
          <Image
            src='/phone_animation.gif'
            alt='blueprint animation of a phone'
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
              marginRight: 'auto',
              paddingLeft: '5vw',
              paddingRight: '5vw'
            }}
          >
            <strong>Crystal clear</strong> voice calling where and when you want
            it.
          </p>
        </li>
        <li
          style={{
            width: '100%',
            gridRowStart: '2',
            gridRowEnd: '3',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '2%',
            marginLeft: '1%'
          }}
          className='landing-tiles'
        >
          <Image
            src='/mesh_animation.gif'
            alt='texting on phone'
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
              marginRight: 'auto',
              paddingLeft: '5vw',
              paddingRight: '5vw'
            }}
          >
            The <strong>optimal</strong> internet connection for your business.
          </p>
        </li>
        <li
          style={{
            width: '100%',
            gridRowStart: '3',
            gridRowEnd: '4',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '2%',
            marginLeft: '1%'
          }}
          className='landing-tiles'
        >
          <Image
            src='/lock_animation.gif'
            alt='a lock morphing to checkmark'
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
              marginRight: 'auto',
              paddingLeft: '5vw',
              paddingRight: '5vw'
            }}
          >
            Robust data solutions where{' '}
            <strong>security and predictability</strong> count
          </p>
        </li>
      </ul>
    </>
  )
}
