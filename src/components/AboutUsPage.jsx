// src/components/AboutUsPage.jsx
import React from 'react';
import WhyUs from '../components/WhyUs';

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between animate-fade-in">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-orange-500 font-bold animate-scale-up">О нашей компании</h1>
            <p className="mt-4 text-xl">
              Shirin — узнаваемый бренд в Узбекистане, специализирующийся на
              производстве сладких кукурузных продуктов. Мы стремимся привнести
              сладость в каждый дом, используя только лучшие ингредиенты.
            </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <img
              src="/images/IMG_5468.PNG"
              alt="Shirin Brand Showcase"
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
              alt="Our Values"
              className="w-2/3 animate-bounce-in"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-orange-500 font-bold animate-rotate-in">Наши ценности</h2>
            <p className="text-xl mt-4">
              Мы ценим качество, инновации и наследие. Каждый продукт Shirin
              создается с душой и уважением к традициям узбекской кулинарии.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-orange-500 font-bold animate-fade-in">Наш подход к бизнесу</h2>
            <p className="mt-4 text-xl animate-slide-right">
              Наша цель — не только производство, но и создание продуктов,
              которые приносят радость. Мы активно внедряем экологически чистые
              технологии и поддерживаем устойчивое развитие аграрного сектора
              Узбекистана.
            </p>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <img
              src="/images/our-approach.PNG"
              alt="Our Approach"
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-orange-500 font-bold animate-scale-up">Сертификаты</h2>
          <p className="text-gray-600 mt-2 text-lg px-6 py-6 animate-slide-up">
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

export default AboutUsPage;
