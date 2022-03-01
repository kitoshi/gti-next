import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
export default function ContactForm() {
  const [state, handleSubmit] = useForm('xyyogogy')
  if (state.succeeded) {
    return (
      <p
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '35vh',
          width: '80%',
          alignSelf: 'center',
          backgroundColor: 'var(--section-color)',
          color: 'var(--bg-color)',
          padding: '10%'
        }}
      >
        Thank you for your message. We will be in contact as soon as possible.
      </p>
    )
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '80%',
        alignSelf: 'center',
        backgroundColor: 'var(--section-color)',
        color: 'var(--bg-color)',
        padding: '2%',
        paddingBottom: '25%',
        marginBottom: '25%'
      }}
    >
      <label htmlFor='email'>Email Address</label>
      <input
        id='email'
        type='email'
        name='email'
        style={{
          backgroundColor: 'var(--section-color)',
          color: 'var(--bg-color)',
          height: '20%',
          fontFamily: 'OpenSans',
          fontSize: '100%'
        }}
      />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <label htmlFor='message'>Message</label>
      <textarea
        id='message'
        name='message'
        style={{
          backgroundColor: 'var(--section-color)',
          color: 'var(--bg-color)',
          height: '100%',
          fontFamily: 'OpenSans',
          fontSize: '100%'
        }}
      />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button
        type='submit'
        disabled={state.submitting}
        style={{
          color: 'var(--section-color)',
          width: '33%',
          height: '40px',
          borderRadius: '12px',
          border: 'none',
          marginLeft: 'auto',
          marginTop: 'auto',
          fontSize: 'medium'
        }}
      >
        Submit
      </button>
    </form>
  )
}
