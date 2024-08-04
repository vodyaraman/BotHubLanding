import React from 'react';
import { ArrowIcon, NavButton } from '/shared/ui';

const ProductsLink: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <div className="invisible-button" onClick={onClick}>
      <NavButton text="Продукты"/>
      <div className='gap'/>
      <ArrowIcon direction="down" />
    </div>
  );
};

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


