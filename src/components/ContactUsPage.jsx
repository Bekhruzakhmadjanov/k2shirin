import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios'; // Import axios for API requests

const ContactUsPage = () => {
  const { t } = useTranslation();

  // State to store form input
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Send request to backend
      await axios.post('https://shirink2-backend-production.up.railway.app/send-email', formData);


      alert('Email sent successfully!');
      setFormData({ email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 pb-4 text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold text-center text-orange-500">
          {t('contactUsPage.title')}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">
          {t('contactUsPage.description')}
        </p>

        {/* Updated form with onSubmit event */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-l font-medium text-gray-600">
              {t('contactUsPage.form.email.label')}
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder={t('contactUsPage.form.email.placeholder')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-l font-medium text-gray-600">
              {t('contactUsPage.form.subject.label')}
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
              placeholder={t('contactUsPage.form.subject.placeholder')}
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-l font-medium text-gray-600">
              {t('contactUsPage.form.message.label')}
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary focus:border-primary"
              placeholder={t('contactUsPage.form.message.placeholder')}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

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
