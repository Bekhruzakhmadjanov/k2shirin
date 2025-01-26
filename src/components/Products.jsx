// src/components/Products.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // <-- IMPORTANT: new path
import { useTranslation } from 'react-i18next'; // Import i18n
import 'swiper/css';
import 'swiper/css/navigation';

const Products = () => {
  const { t } = useTranslation(); // Access translation utilities

  const slides = [
    { id: 1, src: '/images/product2.PNG', title: t('products.productVariants.miniPuffs.title'), description: t('products.productVariants.miniPuffs.description') },
    { id: 2, src: '/images/product3.PNG', title: t('products.productVariants.classicCorn.title'), description: t('products.productVariants.classicCorn.description') },
    { id: 3, src: '/images/product4.PNG', title: t('products.sweetCornSnacks.title'), description: t('products.sweetCornSnacks.description') },
    { id: 4, src: '/images/product5.PNG', title: t('products.productVariants.chocoCorn.title'), description: t('products.productVariants.chocoCorn.description') },
    { id: 5, src: '/images/product1.PNG', title: t('products.productVariants.prizePacks.title'), description: t('products.productVariants.prizePacks.description') },
    { id: 6, src: '/images/product6.PNG', title: t('products.uniqueFeatures.highQuality.title'), description: t('products.uniqueFeatures.highQuality.description') },
    { id: 7, src: '/images/product7.PNG', title: t('products.uniqueFeatures.familyFriendly.title'), description: t('products.uniqueFeatures.familyFriendly.description') },
    { id: 8, src: '/images/product8.PNG', title: t('products.uniqueFeatures.varietyOfFlavors.title'), description: t('products.uniqueFeatures.varietyOfFlavors.description') }
  ];

  return (
    <section id="products" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-orange-600">
          {t('products.title')}
        </h2>

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
