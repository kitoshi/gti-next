import Image from 'next/image'

export default function EnhanceVoiceContent(props) {
  return (
    <>
      <h3>Services for the modern workplace, customized for your needs</h3>
      <p>
        Enhance your GTI business telecom experience with integrated services
        that streamline your business operations.
      </p>
      <div style={{ position: 'relative', height: '25vh' }}>
        <Image
          src='/router_cables.jpg'
          alt='router with cables attached'
          layout='fill'
        />
      </div>

      <ul>
        <li>
          Quick Call
          <p>
            A high capacity outbound phone calling platform that allows the
            uploading of messages in several formats (e.g., manual entry, text
            file, voice recording, etc.).
          </p>
        </li>
        <li>
          {' '}
          Quick Message
          <p>
            a self-managed communications platform designed to notify large or
            small groups of people in very little time, with very little effort.
            Simply record or enter your message, select the communication
            methods (phone, email, SMS text, fax), and send.
          </p>
        </li>
        <li>
          {' '}
          Unified Messaging
          <p>
            This online user interface allows organizations to manage their
            phone system, voice messages, personalized contact preferences, call
            forwarding, etc., for all company phone lines. Service offering
            includes the ability to record calls, as a preset basis or
            on-demand.
          </p>
        </li>
        <li>
          Telepay
          <p>
            Helping companies collect payments in an accessible and timely
            manner, Telepay is a PCI-compliant, interactive voice response
            credit card payment system, which facilitates secure credit card
            payments over the phone by implementing an automated touch-tone user
            interface for customers to pay bills over the phone, with no fear of
            compromised security. Through Telepay, organizations are able to
            de-scope the collection of the credit cards, saving time and money
            on annual PCI audits.
          </p>
        </li>
      </ul>
    </>
  )
}
