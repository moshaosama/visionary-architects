import "./App.css";
import Hero from "./Features/Hero/Components/Hero";
import SectionKnowladge from "./Features/Knowladge/Components/SectionKnowladge";
import Navbar from "./Layouts/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionKnowladge />
    </>
  );
}

export default App;
