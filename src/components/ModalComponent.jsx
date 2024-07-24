import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ modalIsOpen, closeModal, modalMessage, afterOpenModal }) => {
    debugger;
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel={modalMessage}
            appElement={document.getElementById('root')}
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(100, 100, 100, 0.75)',
                    display: 'flex row wrap',

                },
                content: {
                  position: 'absolute',
                  top: '40px',
                  left: '40px',
                  right: '40px',
                  bottom: '40px',
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px',
                  height: 'fit-content',
                  margin: 'auto'
                }
            }}
        >
            <div className='w-full h-fit flex justify-center items-center'>
                <div className='w-[320px] text-white bg-gray-700 flex flex-col flex-wrap items-center justify-center;'>
                    <h2>{modalMessage}</h2>
                    <button onClick={closeModal}>Close</button>
                </div>
            </div>
        </Modal>

    );
};

export default ModalComponent;
