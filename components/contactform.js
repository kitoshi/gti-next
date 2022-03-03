import React from 'react'
import { useEffect } from 'react'
export default function ContactForm() {
  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    )
    head.appendChild(script)
  }, [])

  return (
    <div
      className='calendly-inline-widget'
      data-url='https://calendly.com/g-t-i?hide_landing_page_details=1&hide_gdpr_banner=1'
      style={{ minWidth: '320px', height: '630px' }}
    />
  )
}
