import "./About.css";
import Header from "../components/Header";
import AboutBanner from "../components/AboutBanner";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Messages from "../components/Messages";
import DonationStripe from "../components/DonationStripe";

import president from "../assets/president.jpg";
import generalsecretary from "../assets/generalsecretary.jpg";
export default function About() {
  return (
    <div className='about'>
      <Header />
      <AboutBanner />
      <Mission />
      <Messages
        title="President's Message"
        message='"Education is more than just the transfer of knowledge; it is the
        foundation of a just and progressive society. At Help Grace Foundation,
        we believe that every individual deserves access to education and
        opportunities, regardless of their circumstances. Our mission is deeply
        rooted in the principles of equity, empowerment, and national
        development, ensuring that no one is left behind. In addition to
        education, we recognize our responsibility to stand with persecuted
        communities and families in need. During times of natural disasters and
        social injustices, we provide humanitarian aid, relief, and long-term
        rehabilitation. Our goal is to empower individuals, uplift communities,
        and foster a spirit of resilience and self-reliance. Together, through
        collective effort, we can break barriers, create opportunities, and
        build a future where education, dignity, and humanitarian support shape
        a better world for all."'
        image={president}
        name='Samia Nasir '
        designation='President'
        color='beige'
      />
      <Messages
        title="General Secretary's Message"
        message='"The vision of Help Grace Foundation is brought to life through real actions that create lasting impact. Our work revolves around implementation—establishing and running educational institutions, technical training centers, and social welfare programs that provide individuals with the skills and resources they need to thrive.

Beyond education, we take active measures to assist persecuted communities and families affected by crises. During natural disasters and times of hardship, we provide emergency relief, shelter, and rehabilitation, ensuring that no one is left to struggle alone.

Our health education programs address key issues affecting school attendance, such as hygiene, medical challenges, and social barriers, ensuring that every child gets an uninterrupted education.

Through collaboration with educators, volunteers, and supporters, Help Grace Foundation continues to implement impactful programs that uplift communities, restore dignity, and empower individuals to lead better lives. We invite you to join us in making a difference—because together, we can build a world where education and humanitarian support triumph over adversity."'
        image={generalsecretary}
        name='Shahroz Tariq '
        designation='General Secretary'
        color=''
      />
      <DonationStripe />
      <Footer />
    </div>
  );
}
