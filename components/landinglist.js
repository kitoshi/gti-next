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
          gridTemplateColumns: '1fr 1fr 1fr',
          columnGap: '10px'
        }}
      >
        <li
          style={{
            width: '100%',
            gridColumnStart: '1',
            gridColumnEnd: '2',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid var(--russian-violet)',
            borderRadius: '5px',
            backgroundColor: 'var(--secondary-color)'
          }}
          className='landing-tiles'
        >
          <Image
            src='/office-phone.jpg'
            alt='texting on phone'
            layout='intrinsic'
            width={500}
            height={500}
          />
          <h3>Voice</h3>
          <p style={{ width: '80%' }}>
            Crystal Clear Calling where and when you want it.
          </p>
        </li>
        <li
          style={{
            width: '100%',
            gridColumnStart: '2',
            gridColumnEnd: '3',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid var(--russian-violet)',
            borderRadius: '5px'
          }}
          className='landing-tiles'
        >
          <Image
            src='/blueprints-laptop.jpg'
            alt='texting on phone'
            layout='intrinsic'
            width={500}
            height={500}
          />
          <h3>Internet</h3>
          <p style={{ width: '80%' }}>The Best Connection for your business.</p>
        </li>
        <li
          style={{
            width: '100%',
            gridColumn: '3',
            gridColumnEnd: '4',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid var(--russian-violet)'
          }}
          className='landing-tiles'
        >
          <Image
            src='/office-login.jpg'
            alt='texting on phone'
            layout='intrinsic'
            width={500}
            height={500}
          />
          <h3>Data</h3>
          <p style={{ width: '80%' }}>
            Robust solutions where security and predictability count
          </p>
        </li>
      </ul>
    </>
  )
}
