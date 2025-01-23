// src/pages/AboutUsPage.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import WhyUs from '../components/WhyUs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const AboutUsPage = () => {
  const { t } = useTranslation(); // Access translations

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between animate-fade-in">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-orange-500 font-bold animate-scale-up">
              {t('aboutUsPage.hero.title')}
            </h1>
            <p className="mt-4 text-xl">{t('aboutUsPage.hero.description')}</p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <img
              src="/images/whyuscard11.PNG"
              alt={t('aboutUsPage.hero.imageAlt')}
              className="w-2/3 animate-slide-up"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
            <img
              src="/images/our-values.PNG"
              alt={t('aboutUsPage.values.imageAlt')}
              className="w-2/3 animate-bounce-in"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-orange-500 font-bold animate-rotate-in">
              {t('aboutUsPage.values.title')}
            </h2>
            <p className="text-xl mt-4">{t('aboutUsPage.values.description')}</p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-orange-500 font-bold animate-fade-in">
              {t('aboutUsPage.approach.title')}
            </h2>
            <p className="mt-4 text-xl animate-slide-right">
              {t('aboutUsPage.approach.description')}
            </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <img
              src="/images/our-approach.PNG"
              alt={t('aboutUsPage.approach.imageAlt')}
              className="w-2/3 animate-slide-up"
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <WhyUs />

      {/* Certificates Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-orange-500 font-bold animate-scale-up">
            {t('certificates.title')}
          </h2>
          <p className="text-gray-600 mt-2 text-lg px-6 py-6 animate-slide-up">
            {t('certificates.description')}
          </p>

          {/* Swiper Carousel for Smaller Screens */}
          <div className="md:hidden mt-8">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={1}
              spaceBetween={20}
              className="max-w-sm mx-auto"
            >
              <SwiperSlide>
                <img
                  src="/images/certificate1.jpg"
                  alt={t('certificates.image1Alt')}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/certificate2.jpg"
                  alt={t('certificates.image2Alt')}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/certificate3.jpg"
                  alt={t('certificates.image3Alt')}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:flex flex-wrap justify-center gap-16 mt-4">
            <img
              src="/images/certificate1.jpg"
              alt={t('certificates.image1Alt')}
              className="w-1/4 rounded-lg hover:scale-105 transition-transform duration-300 animate-bounce-in"
            />
            <img
              src="/images/certificate2.jpg"
              alt={t('certificates.image2Alt')}
              className="w-1/4 rounded-lg hover:scale-105 transition-transform duration-300 animate-bounce-in"
            />
            <img
              src="/images/certificate3.jpg"
              alt={t('certificates.image3Alt')}
              className="w-1/4 rounded-lg hover:scale-105 transition-transform duration-300 animate-bounce-in"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
