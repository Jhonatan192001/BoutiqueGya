const Catalog = () => {
  return (
    <div
      className="grid gap-6 p-4 sm:p-6 lg:p-8 min-h-screen 
                 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                 auto-rows-fr"
    >
      {/* Jeans Section */}
      <div
        className="lg:row-span-2 bg-black/5 border border-gray-300 
                   backdrop-blur-lg rounded-xl shadow-lg p-4"
      >
        <a href="#">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
            JEANS
          </h3>
          <p className="text-xs sm:text-sm lg:text-base text-center mb-4">
            Estilo y comodidad se encuentran en nuestra colección de jeans. 
            Descubre las últimas tendencias y cortes perfectos para un look impecable.
          </p>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/Jeans.png"
              alt="Pantalones Jeans"
              className="w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
        </a>
      </div>

      {/* Casacas Section */}
      <div className="bg-black/5 border border-gray-300 backdrop-blur-lg rounded-xl shadow-lg p-4">
        <a href="#">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
            CASACAS
          </h3>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/shirt.png"
              alt="Casacas"
              className="w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
        </a>
      </div>

      {/* Polos Section */}
      <div className="bg-black/5 border border-gray-300 backdrop-blur-lg rounded-xl shadow-lg p-4">
        <a href="#">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
            POLOS
          </h3>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/t-shirt.png"
              alt="Polos"
              className="w-full h-auto transition-transform duration-300 hover:scale-110 mt-4"
            />
          </div>
        </a>
      </div>

      {/* Promociones Section */}
      <div
        className="lg:row-span-3 bg-black/5 border border-gray-300 
                   backdrop-blur-lg rounded-xl shadow-lg p-4 cursor-pointer"
      >
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src="/promotions1.png"
            alt="Promociones 1"
            className="w-full h-auto transition-transform duration-300 hover:scale-110"
          />
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">
          PROMOCIONES
        </h3>
        <p className="text-xs sm:text-sm lg:text-base text-center mb-4">
          Explora ofertas exclusivas en nuestros mejores productos. 
          La oportunidad perfecta para enriquecer tu guardarropa con 
          prendas de moda a precios asequibles.
        </p>
        <div className="overflow-hidden rounded-lg">
          <img
            src="/promotions2.png"
            alt="Promociones 2"
            className="w-full h-auto transition-transform duration-300 hover:scale-110 mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;