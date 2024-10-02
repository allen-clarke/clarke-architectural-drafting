import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Contact from "./components/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Services />
        <Contact />
      </main>
        <Footer />
    </>
  );
}

export default App;
