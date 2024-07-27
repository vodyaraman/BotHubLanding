import React from 'react';
import { BlueButton } from '/shared/ui';

const AboutButton: React.FC = () => {
  return <BlueButton text="Подробнее" />;
};

const AuthButton: React.FC = () => {
  return <BlueButton text="Авторизация" />;
};

const StartButton: React.FC = () => {
  return <BlueButton text="Начать работу" />;
};

const MidJourneyButton: React.FC = () => {
  return <BlueButton text="Попробовать MidJourney" />;
};

// Экспортируем все компоненты вместе
export { AboutButton, AuthButton, StartButton, MidJourneyButton };