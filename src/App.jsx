import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Services />
      </main>
    </>
  );
}

export default App;
