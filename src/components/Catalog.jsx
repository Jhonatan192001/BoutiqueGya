const Catalog = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6 lg:p-8 min-h-screen">
      {/* Jeans Section */}
      <div className="row-span-2 px-4 py-2 bg-black/5 border-2 border-gray-300 backdrop-blur-lg rounded-xl shadow-lg">
        <a href="#">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mb-2">
            JEANS
          </h3>
          <p className="text-black text-xs sm:text-sm lg:text-base text-center mb-4">
            Estilo y comodidad se encuentran en nuestra colección de jeans.
            Descubre las últimas tendencias y cortes perfectos para un look
            impecable.
          </p>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/public/jeans.png"
              alt="jeans"
              className="w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
        </a>
      </div>

      {/* Casacas Section */}
      <div className="px-4 py-2 bg-black/5 border-2 border-gray-300 backdrop-blur-lg rounded-xl shadow-lg">
        <a href="#">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mb-2">
            CASACAS
          </h3>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/public/shirt.png"
              alt="shirt"
              className="w-full h-auto transition-transform duration-300 hover:scale-110"
            />
          </div>
        </a>
      </div>

      {/* Polos Section */}
      <div className="col-start-1 sm:col-start-2 row-start-2 px-4 py-2 bg-black/5 border-2 border-gray-300 backdrop-blur-lg rounded-xl shadow-lg">
        <a href="#">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mb-2">
            POLOS
          </h3>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/public/t-shirt.png"
              alt="t-shirt"
              className="w-full h-auto transition-transform duration-300 hover:scale-110 mt-4 sm:mt-6 lg:mt-8"
            />
          </div>
        </a>
      </div>

      {/* Promociones Section */}
      <div className="row-span-2 col-start-1 sm:col-start-3 row-start-3 sm:row-start-1 px-4 py-2 bg-black/5 border-2 border-gray-300 backdrop-blur-lg rounded-xl shadow-lg">
        <div className="overflow-hidden rounded-lg mb-4">
          <img
            src="/public/promotions1.png"
            alt="promotions1"
            className="w-full h-auto transition-transform duration-300 hover:scale-110 mb-4"
          />
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-black mb-2">
          PROMOCIONES
        </h3>
        <p className="text-black text-xs sm:text-sm lg:text-base text-center mb-4">
          Explora ofertas exclusivas en nuestros mejores productos. La
          oportunidad perfecta para enriquecer tu guardarropa con prendas de
          moda a precios asequibles.
        </p>
        <div className="overflow-hidden rounded-lg">
          <img
            src="/public/promotions2.png"
            alt="promotions2"
            className="w-full h-auto transition-transform duration-300 hover:scale-110 mt-4 sm:mt-6 lg:mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
