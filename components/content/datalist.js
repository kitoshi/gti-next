export default function DataListContent(props) {
  return (
    <div
      style={
        (props.landingdisplay === false &&
          props.activedisplay === 'DataListContent') ||
        props.page !== 'index'
          ? {
              display: 'inline',
              position: 'absolute',
              left: '0',
              backgroundColor: 'var(--section-color)',
              zIndex: '2'
            }
          : { display: 'none' }
      }
    >
      <h3>Data Services</h3>
      <h3>Predictable, Secure, and Private</h3>
      <h3>Robust Reliable Services You Can Count On.</h3>
      <h4>
        Secure and reliable networking solutions. Connect your locations across
        the country on a completely private network with the most direct, lowest
        latency data transfer routes for your mission-critical applications.
        Completely protected from any events that affect the internet (including
        hacking and performance).
      </h4>
      <ul>
        <li>
          MPLS Proven best of breed predictable secure multipoint connections
          with CoS
        </li>
        <li>Switched Ethernet Cost competitive multipoint solutions</li>
        <li>Private Line Point to point secure predictable solutions</li>
        <li>
          Bonded Solutions Fully redundant solutions: Bandwidth aggregation and
          auto failover with IP preservation across multiple underlying carriers
          and technologie
        </li>
      </ul>
    </div>
  )
}
