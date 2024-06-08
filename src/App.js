import { Navbar } from "./components";
import { AppStore, Banner, Footer, Hero, Services, Testimonial } from "./sections";


function App() {
  return (
    <div className="overflow-hidden mx-auto bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar />
    <Hero />
    <Services />
    <Banner />
    <AppStore />
    <Testimonial />
    <Footer />
    </div>
  );
}

export default App;
