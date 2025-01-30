import React from 'react';
import Icon from './ModalIcon';
import Text from './Text';
import ButtonGroup from './ButtonGroup';

interface HeaderProps {
  title: string;
  buttons: { text: string; onClick: () => void }[];
}

const Header: React.FC<HeaderProps> = ({ title, buttons }) => {
  return (
    <div className="header">
      <Icon />
      <Text>{title}</Text>
      <ButtonGroup buttons={buttons} />
    </div>
  );
};

export default Header;