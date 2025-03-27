import EventBanner from "../components/EventBanner";
import EventListContent from "../components/EventListContent";
import DonationStripe from "../components/DonationStripe";
import Footer from "../components/Footer";
import "./EventList.css";

export default function EventList() {
  return (
    <div className='eventlist'>
      <EventBanner />
      <EventListContent />
      <DonationStripe message='Together, We Can Change Lives' />
      <Footer />
    </div>
  );
}
