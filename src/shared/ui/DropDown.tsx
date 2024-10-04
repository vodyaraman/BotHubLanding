import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  icon?: string;
}

interface ProductsDropdownProps {
  products: Product[];
  isOpen: boolean;
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ products, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="dropdown-menu">
          {products?.map(product => (
            <div key={product.id} className="dropdown-item">
              <img className="item-icon" src={product.icon}></img>
              <div className="item-content">
                <div className="item-name">{product.name}</div>
                <div className="item-description">{product.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsDropdown;

