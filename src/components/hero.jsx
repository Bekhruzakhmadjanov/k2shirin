import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation(); // Access translation utilities
  const [mainImage, setMainImage] = useState('/images/hero-page.png');
  const [expanded, setExpanded] = useState(false);
  const timeoutRef = useRef(null); // Reference to clear timeouts

  useEffect(() => {
    const header = document.querySelector('.animated-header');
    if (!header) return;

    let currentIndex = 0;

    const changeText = () => {
      // Array of texts for the current language
      const texts = [
        t('hero.welcome'),
        t('hero.tasteKnown'),
        t('hero.learnMore'),
      ];

      // Clear header and populate with animated spans
      header.innerHTML = '';
      const spanElements = texts[currentIndex].split(' ').map((word) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.opacity = 0;
        span.style.display = 'inline-block';
        span.style.transform = 'translateY(30px)';
        span.style.transition = 'all 0.6s ease';
        return span;
      });

      spanElements.forEach((span, i) => {
        setTimeout(() => {
          span.style.opacity = '1';
          span.style.transform = 'translateY(0)';
        }, i * 100);
        header.appendChild(span);
        header.appendChild(document.createTextNode(' ')); // Add space between words
      });

      // Move to the next text in the array
      currentIndex = (currentIndex + 1) % texts.length;

      // Schedule the next text change
      timeoutRef.current = setTimeout(changeText, 4000);
    };

    // Start the animation
    changeText();

    // Cleanup: Clear timeouts when language changes or component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [t, i18n.language]); // Re-run when the language changes

  return (
    <header id="home" className="py-16">
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-start"
        >
          <h1
            className="animated-header text-3xl md:text-4xl lg:text-5xl font-extrabold text-orange-600 leading-tight mb-4 drop-shadow-md"
            aria-live="polite"
          >
            <span className="sr-only">{t('hero.welcome')}</span>
          </h1>

          {/* Collapsible Text Block */}
          <div
            className={`transition-all duration-700 overflow-hidden ${
              expanded ? 'max-h-[1000px]' : 'max-h-28'
            } md:max-h-full mb-4 text-gray-700`}
          >
            <p className="text-lg md:text-xl">{t('hero.familySnack')}</p>
            <p className="text-base md:text-lg text-gray-600 mt-3">{t('hero.joinMillions')}</p>
          </div>

          {/* "Read more" button - only on mobile */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-block md:hidden bg-orange-200 text-orange-700 px-3 py-1 rounded-md mb-6 transition-colors"
          >
            {expanded ? t('hero.collapse') : t('hero.readMore')}
          </button>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/products"
              className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-2 px-6 rounded-md"
            >
              {t('hero.viewProducts')}
            </a>
            <a
              href="/contact"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors font-bold py-2 px-6 rounded-md"
            >
              {t('hero.contactUs')}
            </a>
          </div>
        </motion.div>

        {/* Image / Thumbnails */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 flex flex-col items-center"
        >
          <img
            src={mainImage}
            alt="Shirin hero page"
            className="w-4/5 md:w-5/6 max-w-2xl mb-6 transition-transform duration-500 hover:scale-105 drop-shadow-lg float-animation"
          />
          <ul className="flex gap-4">
            <li>
              <img
                src="/images/hero-page.png"
                alt="Shirin hero page 1"
                className="w-28 h-28 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all"
                onClick={() => setMainImage('/images/hero-page.png')}
              />
            </li>
            <li>
              <img
                src="/images/sihirin-hero1.png"
                alt="Shirin hero page 2"
                className="w-28 h-28 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all"
                onClick={() => setMainImage('/images/sihirin-hero1.png')}
              />
            </li>
            <li>
              <img
                src="/images/sihirin-hero2.png"
                alt="Shirin hero page 3"
                className="w-28 h-28 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all"
                onClick={() => setMainImage('/images/sihirin-hero2.png')}
              />
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
