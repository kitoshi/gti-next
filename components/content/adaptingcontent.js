import Image from 'next/image'

export default function AdaptingContent(params) {
  return (
    <>
      <h3>
        Adapting to a <em className='orange-emphasis'>changing</em> environment
      </h3>
      <p className='adapting-paragraph'>
        Companies need to change and move forward to stay ahead of their
        competitors. We have an established track record of supporting business
        in adapting to these changes since 1995.{' '}
      </p>
      <div style={{ position: 'relative', height: '25vh' }}>
        <Image src='/fiber.jpg' alt='fiber cable' layout='fill' />
      </div>
      <p className='adapting-bottom-paragraph'>
        We provide you with Telecom solutions and reliable support that enables
        you to focus on your core business to succeed in this rapidly changing
        business environment. We like to think that we are Momma Bear, and that
        your Telecom services are the cubs that we need to fiercely protect and
        support.
      </p>
    </>
  )
}
