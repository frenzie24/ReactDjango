import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ modalIsOpen, closeModal, modalMessage, afterOpenModal }) => {

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
                  margin: '25% auto 0 auto'
                }
            }}
        >
            <div className='w-full h-fit p-4 flex justify-center items-center'>
                <div className='w-[320px] text-white flex flex-col flex-wrap items-center justify-center bg-gray-700 rounded-md pt-6'>
                    <h2>{modalMessage}</h2>
                    <button className="group relative w-fit flex justify-center py-2 px-4 my-1 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 hover:outline hover:ring-2 hover:ring-offset-2 hover:ring-gray-500" onClick={closeModal}>Close</button>
                </div>
            </div>
        </Modal>

    );
};

export default ModalComponent;
