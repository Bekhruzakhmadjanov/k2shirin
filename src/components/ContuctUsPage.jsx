// src/pages/ContactUsPage.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactUsPage = () => {
  const { t } = useTranslation(); // Access translations

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        {/* Section Title */}
        <h2 className="mb-4 pb-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center text-orange-500 animate-scale-up">
          {t('contactUsPage.title')}
        </h2>
        
        {/* Section Description */}
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">
          {t('contactUsPage.description')}
        </p>
        
        {/* Contact Form */}
        <form action="#" className="space-y-8">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-l font-medium text-gray-600"
            >
              {t('contactUsPage.form.email.label')}
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder={t('contactUsPage.form.email.placeholder')}
              required
            />
          </div>
          
          {/* Subject Input */}
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-l font-medium text-gray-600"
            >
              {t('contactUsPage.form.subject.label')}
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              placeholder={t('contactUsPage.form.subject.placeholder')}
              required
            />
          </div>
          
          {/* Message Textarea */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-l font-medium text-gray-600"
            >
              {t('contactUsPage.form.message.label')}
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary focus:border-primary"
              placeholder={t('contactUsPage.form.message.placeholder')}
              required
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="py-3 px-5 text-l font-medium text-center text-white rounded-lg bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-orange-light"
          >
            {t('contactUsPage.form.submit')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsPage;
