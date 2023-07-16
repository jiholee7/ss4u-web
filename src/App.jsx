import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Products from "./components/Products/Products";
import OurCompany from "./components/OurCompany/OurCompany";
import Contact from "./components/Contact/Contact";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <Products />
      <OurCompany />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
