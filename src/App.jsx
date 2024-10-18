import "./App.css";
import Hero from "./components/Hero";
import Brand from "./components/Brand";
import Catalog from "./components/catalog";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="min-h-screen flex flex-col scrollable">
      <Header />      
      <main className="flex-grow">
        <Hero />
        <Brand />
        <div className="lg:w-1/2 px-3 mx-auto text-center my-3">
          <h1 className="font-bold text-3xl uppercase mb-2">Elevando tu juego de estilo</h1>
          <p className="text-sm">Descubra la combinación perfecta de comodidad y tendencia con nuestra colección exclusiva. Explore ofertas en jeans, zapatillas deportivas y más</p>
        </div>
        <Catalog />
        <div>
          contenido
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
