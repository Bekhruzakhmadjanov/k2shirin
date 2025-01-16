// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-400 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Shirin</h2>
          <p className="mb-4 text-sm">
            Мы производим хрустящие кукурузные снеки, которые уже
            завоевали доверие миллионов потребителей.
          </p>
          <p className="text-xs">
            © {new Date().getFullYear()} Shirin. Все права защищены.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Быстрые ссылки</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Домой
              </a>
            </li>
            <li>
              <a href="/products" className="hover:underline">
                Продукты
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                О нас
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Контакты
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Контакты</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-bold">Адрес:</span> ул. Счастливая 42, Ташкент
            </li>
            <li>
              <a href="tel:+998901234567" className="hover:underline">
                <span className="font-bold">Тел.:</span> +998 (90) 123-45-67
              </a>
            </li>
            <li>
              <a href="mailto:info@shirin.com" className="hover:underline">
                <span className="font-bold">Email:</span> info@shirin.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 border-t border-orange-300 pt-4 text-center text-xs">
        Сделано с любовью для всех любителей сладостей
      </div>
    </footer>
  );
};

export default Footer;
