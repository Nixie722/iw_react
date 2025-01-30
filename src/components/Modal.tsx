import React from 'react';
import './Modal.css';
import Header from './ModalHeader';
import Content from './ModalContent';
import Footer from './ModalFooter';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  content: string;
  headerButtons: { text: string; onClick: () => void }[];
  footerButtons: { text: string; onClick: () => void }[];
  footerDescription?: string;
}

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  title,
  headerButtons,
  footerButtons,
  footerDescription,
  content,
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <Header title={title} buttons={headerButtons} />
        <Content>{content}</Content>
        <Footer description={footerDescription} buttons={footerButtons} />
      </div>
    </div>
  );
};

export default Modal;