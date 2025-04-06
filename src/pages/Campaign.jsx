import CampaignWriteup from "../components/CampaignWriteup";
import CampaignBanner from "./../components/CampaignBanner";
import Campaigns from "./../components/Campaigns";
import CampaignCards from "./../components/CampaignCards";
import DonationStripe from "./../components/DonationStripe";
import Footer from "./../components/Footer";
import "./Campaign.css";

export default function Campaign() {
  return (
    <div className='campaign'>
      <CampaignBanner />
      <CampaignWriteup />
      <Campaigns />
      <CampaignCards />
      <DonationStripe message='"Aiding Orphans, Widows, and the Forgotten"' />
      <Footer />
    </div>
  );
}
