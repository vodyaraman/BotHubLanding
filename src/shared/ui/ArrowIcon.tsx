import React from 'react';

interface ArrowIconProps {
  direction: 'up' | 'down' | 'left' | 'right';
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ direction }) => {
  const getRotationClass = (direction: string) => {
    switch (direction) {
      case 'up':
        return 'rotate-up';
      case 'right':
        return 'rotate-right';
      case 'down':
        return 'rotate-down';
      case 'left':
        return 'rotate-left';
      default:
        return '';
    }
  };

  const rotationClass = getRotationClass(direction);

  return (
    <div className={`arrow-container ${rotationClass}`}>
      <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6L8 10L13 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default ArrowIcon;


