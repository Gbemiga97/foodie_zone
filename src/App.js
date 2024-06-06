import { Navbar } from "./components";
import { AppStore, Banner, Hero, Services } from "./sections";


function App() {
  return (
    <div className="overflow-hidden mx-auto">
    <Navbar />
    <Hero />
    <Services />
    <Banner />
    <AppStore />
    </div>
  );
}

export default App;
