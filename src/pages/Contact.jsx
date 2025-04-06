import "./Contact.css";
import ContactBanner from "../components/ContactBanner";
import ContactForm from "../components/ContactForm";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import DonationBanner from "../components/DonationStripe";

export default function Home() {
  return (
    <>
      <ContactBanner />
      <div className='contactArea'>
        <div className='contact-banner-content'>
          <h4>How can I reach Help Grace Foundation?</h4>
          <p>
            Simply contact us by email, phone, or schedule an appointment for
            video call. We would be happy to provide you with more information.
          </p>
        </div>
        <div className='contactInfo'>
          <ContactCard />
          <ContactForm />
        </div>
        <DonationBanner message='"Providing Food, Shelter, and Love to Those in Need"' />
        <Footer />
      </div>
    </>
  );
}
