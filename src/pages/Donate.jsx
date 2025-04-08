import "./Donate.css";
import DonateBanner from "../components/DonateBanner";
import DonateWriteup from "../components/DonateWriteup";
import DonateDetails from "../components/DonateDetails";
// import DonationStripe from "../components/DonationStripe";
import Footer from "../components/Footer";

export default function Donate() {
  return (
    <div className='donate'>
      <DonateBanner />
      <DonateWriteup />
      <DonateDetails />

      {/* <DonationStripe message='"Together, We Can Change Lives"' /> */}
      <Footer />
    </div>
  );
}
