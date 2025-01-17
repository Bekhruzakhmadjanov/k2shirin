// src/components/Products.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // <-- IMPORTANT: new path
import 'swiper/css';
import 'swiper/css/navigation';

const Products = () => {
  const slides = [
    { id: 1, src: '/images/product2.PNG', title: 'Шоколадные конфеты', description: 'Нежнейший вкус и ручная работа' },
    { id: 2, src: '/images/product3.PNG', title: 'Ароматное печенье', description: 'Сдобное печенье для всей семьи' },
    { id: 3, src: '/images/product4.PNG', title: 'Торты на заказ', description: 'Сладкие шедевры для особых случаев' },
    { id: 4, src: '/images/product5.PNG', title: 'Фруктовые десерты', description: 'Освежающие вкусы и натуральные ингредиенты' },
    { id: 5, src: '/images/product1.PNG', title: 'Фруктовые десерты', description: 'Освежающие вкусы и натуральные ингредиенты' },
    { id: 6, src: '/images/product6.PNG', title: 'Фруктовые десерты', description: 'Освежающие вкусы и натуральные ингредиенты' },
    { id: 7, src: '/images/product7.PNG', title: 'Фруктовые десерты', description: 'Освежающие вкусы и натуральные ингредиенты' },
    { id: 8, src: '/images/product8.PNG', title: 'Фруктовые десерты', description: 'Освежающие вкусы и натуральные ингредиенты' },

  ];

  return (
    <section id="products" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-orange-600">Наши продукты</h2>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 mx-4 hover:shadow-xl transition-all">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-56 h-56 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold text-orange-500 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
