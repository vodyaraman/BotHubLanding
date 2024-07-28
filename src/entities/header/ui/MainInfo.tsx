import React from "react";

interface MainInfoProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const MainInfo: React.FC<MainInfoProps> = ({
  title = "ChatGPT: ваш умный помощник",
  description = "Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте. Без VPN и абонентской платы. Создавайте контент, обрабатывайте данные и получайте ответы на вопросы через удобный интерфейс!",
  children
}) => {
  return (
    <>
      <h1 className="intro-title">{title}</h1>
      <p className="intro-description">{description}</p>
      {children}
    </>
  );
};

export default MainInfo;

