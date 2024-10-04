import React, { useState } from 'react';
import { ArrowIcon, DropDown, NavButton } from '/shared/ui';

const ProductsLink: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Telegram Бот',
      description: 'Удобный бот в Telegram который всегда под рукой',
      icon: './telebot.svg',
    },
    {
      id: 2,
      name: 'Для бизнеса',
      description: 'Корпоративная подписка для юридических лиц',
      icon: './business.svg'
    },
  ]

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="products-link">
      <div className="invisible-button" onClick={handleClick}>
        <NavButton text="Продукты" />
        <div className="gap" />
        <ArrowIcon direction={isDropdownOpen ? "up" : "down"} />
      </div>
      <DropDown products={products} isOpen={isDropdownOpen} />
    </div>
  );
};

export default ProductsLink;

const TariffsLink: React.FC = () => {
  return (
    <div className="invisible-button">
      <NavButton text="Тарифы" />
    </div>
  );
};

const APILink: React.FC = () => {
  return (
    <div className="invisible-button">
      <NavButton text="API" />
    </div>
  );
};

const BlogLink: React.FC = () => {
  return (
    <div className="invisible-button">
      <NavButton text="Блог" />
    </div>
  );
};

// Экспортируем все компоненты вместе
export { ProductsLink, TariffsLink, APILink, BlogLink };


