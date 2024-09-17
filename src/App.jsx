import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Brand from "./components/Brand";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero").clientHeight;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${
          isScrolled ? "bg-white text-black" : "bg-transparent text-white"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex justify-center items-center">
          <div className="text-2xl font-bold">BOUTIQUE GYA</div>
        </nav>
      </header>

      <main className="flex-grow">
        <Hero />
        <Brand />
        <div className="h-96">
          contenido
        </div>
        <div className="h-96">
          contenido
        </div>
      </main>
    </div>
  );
}

export default App;
