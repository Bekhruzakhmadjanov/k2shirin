import React from 'react';

const products = [
  { id: 1, image: "/images/product1.PNG", name: "Sweet Corn Classic" },
  { id: 2, image: "/images/product2.PNG", name: "Sweet Corn Premium" },
  { id: 3, image: "/images/product3.PNG", name: "Sweet Corn Deluxe" },
  { id: 4, image: "/images/product4.PNG", name: "Sweet Corn Special" },
  { id: 5, image: "/images/product5.PNG", name: "Sweet Corn Delight" },
  { id: 6, image: "/images/product6.PNG", name: "Sweet Corn Luxury" },
  { id: 7, image: "/images/product7.PNG", name: "Sweet Corn Exclusive" },
  { id: 8, image: "/images/product8.PNG", name: "Sweet Corn Supreme" },
];

const ProductsPage = () => {
  return (
    <div className="products-page pt-8">
      {/* Header */}
      <h2 className="relative text-center text-orange-500 text-3xl md:text-4xl font-bold mb-8 animate-fade-in">
        <strong className="px-2 py-2">Все Продукты</strong>
        <span className="text-orange-400 text-sm ml-1">( {products.length} )</span>
        <span className="absolute bottom-[-6px] left-1/4 right-1/4 h-1 bg-gradient-to-r from-red-500 to-orange-400 rounded"></span>
      </h2>

      {/* Additional Text */}
      <p className="text-center text-gray-700 text-lg mb-6 px-4 animate-slide-up">
        Мы гордимся тем, что предлагаем широкий ассортимент сладких кукурузных продуктов, которые радуют наших клиентов высоким качеством и незабываемым вкусом.
      </p>

      {/* Product Grid */}
      <div className="cards flex flex-wrap justify-center gap-14 py-4 mb-8">
        {products.map((product) => (
          <figure
            key={product.id}
            className="card w-56 h-76 relative overflow-hidden shadow-md rounded-lg bg-white hover:shadow-lg transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-orange-500 text-white text-center py-2 transform translate-y-full transition-transform duration-300">
              {product.name}
            </figcaption>
            <style jsx>{`
              .card:hover figcaption {
                transform: translateY(0);
              }
            `}</style>
          </figure>
        ))}
      </div>

      {/* Certificates Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 animate-scale-up">Сертификаты</h2>
          <p className="text-gray-600 mt-2 text-lg px-6 animate-slide-up">
            Shirin сертифицирована по международным стандартам качества и
            безопасности продукции. Наши сертификаты — это гарантия высокого
            уровня каждого изделия.
          </p>
          <div className="flex flex-wrap justify-center gap-16 mt-4">
            <img
              src="/images/certificate1.jpg"
              alt="ISO Quality Certificate"
              className="w-1/4 rounded-lg hover:scale-105 transition-transform duration-300 animate-bounce-in"
            />
            <img
              src="/images/certificate2.jpg"
              alt="Safety Certificate"
              className="w-1/4 rounded-lg hover:scale-105 transition-transform duration-300 animate-bounce-in"
            />
            <img
              src="/images/certificate3.jpg"
              alt="Sustainability Certificate"
              className="w-1/4 rounded-lg hover:scale-105 transition-transform duration-300 animate-bounce-in"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;



