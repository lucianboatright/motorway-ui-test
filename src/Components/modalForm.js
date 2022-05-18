import React, { useState } from 'react';
import Modal from 'react-modal';
import '../Styling/modalForm.css'
import InputForm from './inputForm';
Modal.setAppElement('#root');


const ModalForm = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  const setCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <div className='formModalBody'>
      <div className='openFormButton' onClick={openModal}>Sign Up</div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div className='modalFormHeader'>
              <div className='formHeader'>
                <div>
                  <span className='userNameModalForm'>Hello and Welcome to Motorway</span>                
                </div>
                <div>
                  <span className='userNameModalForm'>Add Details Below</span>
                </div>
              </div>
              <div>
                  <div className='closeButtonForm' onClick={closeModal}>close</div>
              </div>
        </div>
        <InputForm setCloseModal={setCloseModal} />
        
      </Modal>
    </div>
  );
}

export default ModalForm;