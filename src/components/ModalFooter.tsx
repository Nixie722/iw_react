import React from 'react';
import Text from './Text';
import ButtonGroup from './ButtonGroup';

interface FooterProps {
  description?: string;
  buttons: { text: string; onClick: () => void }[];
}

const Footer: React.FC<FooterProps> = ({ description, buttons }) => {
  return (
    <div className="footer">
      {description && <Text>{description}</Text>}
      <ButtonGroup buttons={buttons} />
    </div>
  );
};

export default Footer;