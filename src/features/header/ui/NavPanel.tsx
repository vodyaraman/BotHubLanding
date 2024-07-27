import React from "react";
import {
  ProductsLink,
  TariffsLink,
  APILink,
  BlogLink,
  AuthButton,
} from "/entities/header/ui";

const NavPanel: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <ProductsLink/>
        </li>
        <li>
          <TariffsLink />
        </li>
        <li>
          <APILink />
        </li>
        <li>
          <BlogLink />
        </li>
      </ul>
      <div className="language-auth">
        <button>RU</button>
        <AuthButton />
      </div>
    </nav>
  );
};

export default NavPanel;
