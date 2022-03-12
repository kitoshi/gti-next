export default function VoiceListContent(props) {
  return (
    <div
      style={
        props.landingdisplay === false && props.activedisplay === 'VoiceListContent' || props.page !== 'index'
          ? { display: 'inline' }
          : { display: 'none' }
      }
    >
      <h3 style={{ marginTop: '0' }}>Voice Services</h3>
      <h4>
        Scalable Crystal Clear Calling quality solutions delivered where and
        when you want them.
      </h4>
      <h4>Crystal Clear Voice Quality and Call Controls.</h4>
      <h4>
        Your voice services give that personal touch to your client contact.
        Ensure your branding is supported with:
      </h4>
      <ul>
        <li>
          SIP Trunking Flexibility, multiple options. Reduce toll charges and
          create a local presence
        </li>
        <li>
          PRI Circuit Robust proven solutions utilizing your existing equipment
        </li>
        <li>
          Managed Voice End to end systems utilizing our strategic partners
        </li>
        <li>
          Enhanced Voice Integrated services that augment and streamline your
          business operations with specialized features and integration into
          your existing CRM infrastructure
        </li>
      </ul>
    </div>
  )
}
