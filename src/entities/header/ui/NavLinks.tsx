import React from 'react';
import { NavButton } from '/shared/ui';

const ProductsLink: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
      <div className="invisible-button" onClick={onClick}>
          <NavButton text="Продукты" />
      </div>
  );
};

const TariffsLink: React.FC = () => {
  return <NavButton text="Тарифы" />;
};

const APILink: React.FC = () => {
  return <NavButton text="API" />;
};

const BlogLink: React.FC = () => {
  return <NavButton text="Блог" />;
};

// Экспортируем все компоненты вместе
export { ProductsLink, TariffsLink, APILink, BlogLink };

