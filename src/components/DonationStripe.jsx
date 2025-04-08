import "./DonationStripe.css";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */

export default function DonationBanner(props) {
  let navigate = useNavigate();

  return (
    <div className='donation-banner'>
      <p className='donation-text'>{props.message}</p>
      <button onClick={() => navigate("/donate")} className='donate-button'>
        Donate Now
      </button>
    </div>
  );
}
