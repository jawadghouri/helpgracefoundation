import "./HomeBanner.css";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  let navigate = useNavigate();

  return (
    <div className='banner'>
      <div className='home-banner-content'>
        <span>Share the Gift of Hope</span>
        <h1>Every Child Deserves a Chance</h1>
        <p>
          Together, we can make a lasting change and bring smiles to children
          facing hardship.
        </p>
        <button onClick={() => navigate("/donate")} className='banner-btn'>
          Get Involved
        </button>
      </div>
    </div>
  );
}
