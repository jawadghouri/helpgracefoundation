import "./DonationStripe.css";

/* eslint-disable react/prop-types */

export default function DonationBanner(props) {
  return (
    <div className='donation-banner'>
      <p className='donation-text'>{props.message}</p>
      <button className='donate-button'>Donate Now</button>
    </div>
  );
}
