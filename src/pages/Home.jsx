import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import AboutOverview from "../components/AboutOverview";
import Statistics from "../components/Statistics";
import Event from "../components/Event";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <AboutOverview />
      <Statistics />
      <Event />
      <Footer />
    </>
  );
}
