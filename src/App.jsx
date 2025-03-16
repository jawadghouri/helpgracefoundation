import "./App.css";
import AboutOverview from "./components/AboutOverview";
import Banner from "./components/Banner";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <AboutOverview />
      <Statistics />
      <Event />
      <Footer />
    </>
  );
}

export default App;
