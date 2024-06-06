import { Navbar } from "./components";
import { Banner, Hero, Services } from "./sections";


function App() {
  return (
    <div className="overflow-hidden mx-auto">
    <Navbar />
    <Hero />
    <Services />
    <Banner />
    </div>
  );
}

export default App;
