import "./App.css";
import DesignSection from "./Features/Designs/Components/DesignSection";
import Hero from "./Features/Hero/Components/Hero";
import SectionKnowladge from "./Features/Knowladge/Components/SectionKnowladge";
import SectionRating from "./Features/Rating/Components/SectionRating";
import Navbar from "./Layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionKnowladge />
      <SectionRating />
      <DesignSection />
    </>
  );
}

export default App;
