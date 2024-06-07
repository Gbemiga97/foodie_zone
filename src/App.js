import { Navbar } from "./components";
import { AppStore, Banner, Hero, Services, Testimonial } from "./sections";


function App() {
  return (
    <div className="overflow-hidden mx-auto">
    <Navbar />
    <Hero />
    <Services />
    <Banner />
    <AppStore />
    <Testimonial />
    </div>
  );
}

export default App;
