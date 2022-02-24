import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function LandingList(params) {
  const [time, setTime] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1)
    }, 1000)

    return () => {
      time
    }
  }, [time])

  return (
    <>
      <ul
        style={{
          listStyleType: 'none',
          display: 'grid',
          padding: '0',
          justifyContent: 'space-evenly',
          gridTemplateRows: '1fr 1fr 1fr',
          columnGap: '10px'
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
            src='/office-phone.jpg'
            alt='texting on phone'
            layout='intrinsic'
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
            Crystal clear voice calling where and when you want it.
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
            src='/blueprints-laptop.jpg'
            alt='texting on phone'
            layout='intrinsic'
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
            The best internet connection for your business.
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
            src='/office-login.jpg'
            alt='texting on phone'
            layout='intrinsic'
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
            Robust data solutions where security and predictability count
          </p>
        </li>
      </ul>
    </>
  )
}
