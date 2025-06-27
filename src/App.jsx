import Contact from "./Components/Contact";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Works from "./components/Works";

function App() {
  return (
    <div className="overflow-x-hidden min-h-screen bg-neutral-900 text-white">
      <Nav />
      <Intro />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
