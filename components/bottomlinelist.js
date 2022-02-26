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
      <h3>The Bottom Line</h3>
      <p>
        Every service we develop at GTI is designed to make a significant,
        measurable impact on what you care most about.
      </p>
      <ul
        style={{
          listStyleType: 'none',
          display: 'flex',
          padding: '0',
          justifyContent: 'space-between',
          flexDirection: 'column'
        }}
      >
        <li>Like delighting your customers</li>
        <li>Streamlining processes</li>
        <li>
          Doing new things in a better, faster, more effective and secure way
        </li>
      </ul>
      <p>
        Technology is driving significant changes in the marketplace: Today, the
        world&apos;s leading retailer has no physical stores, the world&apos;s
        largest taxi company owns no vehicles, and the world&apos;s biggest
        hotel company owns no buildings. To thrive, your business needs to
        embrace technology changes. We&apos;re here to help and support you in
        moving forward.
      </p>
    </section>
  )
}
