import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import { triggerConfetti } from './confetti.tsx';

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const handleOpenModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleButtonClick = () => {
    triggerConfetti();
  };

  return (
    <div className="App">
      <button className='modal-opening-button' onClick={() => handleOpenModal('modal1')}>Modál</button>
      <button className='modal-opening-button' onClick={() => handleOpenModal('modal2')}>Modál 2</button>
      <Modal
        show={activeModal === 'modal1'}
        onClose={handleCloseModal}
        title="Modálový okýnko"
        content="Tady nějakej obsah asi nebo tak něco"
        headerButtons={[{ text: '1', onClick: handleCloseModal }, { text: '2', onClick: handleCloseModal }, { text: '3', onClick: handleCloseModal }]}
        footerButtons={[{ text: 'Zavřít', onClick: handleCloseModal }, { text: '🎉', onClick: () => handleButtonClick() }]}
        footerDescription="Tohle je footřík"
      >
      </Modal>

      <Modal
        show={activeModal === 'modal2'}
        onClose={handleCloseModal}
        title="Modálový okýnko #2"
        content="AAAAAAAAAAAAA"
        headerButtons={[]}
        footerButtons={[{ text: 'Gombík 1', onClick: handleCloseModal }]}
      >
      </Modal>
    </div>
  );
}

export default App;