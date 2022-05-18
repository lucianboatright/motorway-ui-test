import React from 'react';
import Modal from 'react-modal';
import '../Styling/modalCard.css'
Modal.setAppElement('#root');


const ModalCard = ({carImage, userName, profileImage, message}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Enalrge Iamge</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className='modalHeader'>
            <div>
                <img className='profileImage' alt='' src={profileImage} />
                <span className='userNameModal'>{userName}</span>
            </div>
            <div>
                <div className='closeButton' onClick={closeModal}>close</div>
            </div>
        </div>
        <div>
            <span>{message}</span>
        </div>
        <div>
            <img className='carImage' src={carImage} alt='' />
        </div>
      </Modal>
    </div>
  );
}

export default ModalCard;