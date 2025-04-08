import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Campaign from "./pages/Campaign";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import EventList from "./pages/EventList";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/campaigns' element={<Campaign />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/events' element={<EventList />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
