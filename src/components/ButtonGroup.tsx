import React from 'react';
import Button from './Button';

interface ButtonGroupProps {
  buttons: { text: string; onClick: () => void }[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ buttons }) => {
  return (
    <div className="button-group">
      {buttons.map((button, index) => (
        <Button key={index} onClick={button.onClick}>
          {button.text}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;