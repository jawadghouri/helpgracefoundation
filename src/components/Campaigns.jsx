import "./Campaigns.css";

export default function Campaigns() {
  return (
    <div className='donation-container'>
      {/* Left Side */}
      <div className='left-side'>
        <h2 className='subtitle'>Our Campaigns</h2>
        <h1 className='title'>
          Help People,
          <br />
          Our Main Goals
        </h1>
        <p className='text'>
          We want to do more and you can help. By committing a small fraction of
          your income to protect children in need, you can help save a child and
          contribute to humanity.
        </p>
        <p className='text'>
          See how you can partner with Help Grace Foundation to meet both the
          physical and spiritual needs of the poor one person, one family at a
          time. Be the change that you want to see in this world!
        </p>
        {/* <button className='red-button'>MORE ABOUT</button> */}
      </div>

      {/* Right Side */}
      <div className='right-side'>
        <div className='donation-types'>
          <div>✔ Education</div>
          <div>✔ Food & Nutrition</div>
          <div>✔ Monetary Help</div>
          <div>✔ Clothing</div>
          <div>✔ Toys Donation</div>
          <div>✔ Medical Care </div>
          <div>✔ Vocational Skills</div>
          <div>✔ Disaster Aid</div>
          <div>✔ Legal Advocacy</div>
          <div>✔ Community Development</div>
          <div>✔ Spiritual Resources</div>
          <div>✔ Help for persecuted Christians</div>
        </div>

        <h3 className='donation-heading'>Total Donation</h3>
        <div className='progress-bar'>
          <div className='progress-fill'></div>
        </div>
        <div className='progress-labels'>
          <span>Collection - $485</span>
          <span>Goal - $10,000</span>
        </div>

        <button className='donate-button'>DONATE NOW</button>
      </div>
    </div>
  );
}
