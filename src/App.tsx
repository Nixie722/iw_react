import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <button onClick={handleOpenModal}>Modál</button>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        title="Modálový okýnko"
        content="Tady nějakej obsah asi nebo tak něco"
        headerButtons={[{ text: '1', onClick: handleCloseModal }, { text: '2', onClick: handleCloseModal }, { text: '3', onClick: handleCloseModal }]}
        footerButtons={[{ text: 'Gombík 1', onClick: handleCloseModal }, { text: 'Gombík 2', onClick: handleCloseModal }]}
        footerDescription="Tohle je footřík"
      >
      </Modal>
    </div>
  );
}

export default App;