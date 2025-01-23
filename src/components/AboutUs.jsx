// src/components/AboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import useTranslation

const AboutUs = () => {
  const { t } = useTranslation(); // Access translation utilities

  return (
    <section
      id="about"
      className="relative overflow-hidden py-16"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="md:w-1/2 space-y-6 z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-600 leading-tight drop-shadow-md">
              {t('aboutUs.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              {t('aboutUs.paragraph1')}
            </p>
            <p className="text-base md:text-lg text-gray-700">
              {t('aboutUs.paragraph2')}
            </p>
            <div>
              <a
                href="/about"
                className="inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
              >
                {t('aboutUs.button')}
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center items-center">
            <motion.img
              src="/images/about.JPG"
              alt="shirin corn snack"
              initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
              whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-3/4 lg:w-2/3 drop-shadow-2xl"
            />
            <div className="absolute -z-10 w-56 h-56 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full blur-3xl opacity-30 animate-ping" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
