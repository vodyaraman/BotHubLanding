import React, { useState, useRef, useEffect } from "react";
import {
  ProductsLink,
  TariffsLink,
  APILink,
  BlogLink,
  AuthButton,
} from "/entities/header/ui";

export const NavPanel = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Проверить, произошел ли клик на элементе с классом 'burger-menu'
      const target = event.target as HTMLElement;
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(target) &&
        !target.closest(".burger-menu")
      ) {
        setIsMenuOpen(false);
      }
    };
  
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  
    // Очистка обработчика событий при размонтировании
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);  

  return (
    <>
      <nav className="header-nav">
        <ul>
          <li>
            <ProductsLink />
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
      </nav>
      <div className="language-auth">
        <button className="change-language">RU</button>
        <AuthButton />
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-nav" ref={mobileNavRef}>
          <ul>
            <li>
              <ProductsLink />
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
        </div>
      )}
    </>
  );
};
