// src/components/Footer.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation(); // Access translation utilities

  return (
    <footer className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Shirin</h2>
          <p className="mb-4 text-sm">{t('footer.companyInfo.description')}</p>
          <p className="text-xs">
            © {new Date().getFullYear()} Shirin. {t('footer.companyInfo.rightsReserved')}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">{t('footer.quickLinks.title')}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">{t('footer.quickLinks.home')}</a>
            </li>
            <li>
              <a href="/products" className="hover:underline">{t('footer.quickLinks.products')}</a>
            </li>
            <li>
              <a href="/about" className="hover:underline">{t('footer.quickLinks.about')}</a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">{t('footer.quickLinks.contact')}</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">{t('footer.contact.title')}</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-bold">{t('footer.contact.address.label')}:</span> {t('footer.contact.address.value')}
            </li>
            <li>
              <a href="tel:+998901234567" className="hover:underline">
                <span className="font-bold">{t('footer.contact.phone.label')}:</span> {t('footer.contact.phone.value')}
              </a>
            </li>
            <li>
              <a href="mailto:info@shirin.com" className="hover:underline">
                <span className="font-bold">{t('footer.contact.email.label')}:</span> {t('footer.contact.email.value')}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 border-t border-orange-300 pt-4 text-center text-xs">
        {t('footer.note')}
      </div>
    </footer>
  );
};

export default Footer;
