import "./DonationStripe.css";

const DonationBanner = () => {
  return (
    <div className='donation-banner'>
      <p className='donation-text'>
        Helping the <strong>Homeless</strong>, <strong>Hungry</strong>, and{" "}
        <strong>Hurting</strong> Children
      </p>
      <button className='donate-button'>Donate Now</button>
    </div>
  );
};

export default DonationBanner;
