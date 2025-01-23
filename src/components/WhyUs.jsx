// src/components/WhyUs.jsx
import React from 'react';
import './WhyUs.css';
import { useTranslation } from 'react-i18next';

const WhyUs = () => {
  const { t } = useTranslation(); // Access translation utilities

  const reasons = [
    {
      id: 1,
      title: t('whyUs.quality.title'),
      description: t('whyUs.quality.description'),
      image: '/images/whyuscard11.PNG',
    },
    {
      id: 2,
      title: t('whyUs.ingredients.title'),
      description: t('whyUs.ingredients.description'),
      image: '/images/whyuscard22.JPG',
    },
    {
      id: 3,
      title: t('whyUs.flavors.title'),
      description: t('whyUs.flavors.description'),
      image: '/images/product7.PNG',
    },
  ];

  return (
    <section id="why-us" className="whyus-section">
      {/* Section Title */}
      <h2 className="whyus-heading">{t('whyUs.title')}</h2>

      {/* Cards Container */}
      <div className="whyus-container">
        {reasons.map((reason) => (
          <div className="card" key={reason.id}>
            {/* Card Image */}
            <div className="card-image">
              <img src={reason.image} alt={reason.title} />
            </div>

            {/* Card Content */}
            <div className="card-content">
              <h2>{reason.title}</h2>
              <p>{reason.description}</p>
              <a href="/about" className="button">
                {t('whyUs.button')}
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
