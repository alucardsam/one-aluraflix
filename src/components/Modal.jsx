import { useState, useEffect } from 'react';
import styled from 'styled-components';
import FormEditVideo from './FormEditVideo';
import { FaX } from 'react-icons/fa6';


const ModalWrapper = styled.div`
  display: ${(props) => (props.$isopen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  overflow-x: hidden;
  overflow-y: auto;
`;

const ModalDialog = styled.div`
  position: relative;
  width: auto;
  margin: 10px;
  pointer-events: none;
  max-width: 500px;
  margin: 1.75rem auto;
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;

const ModalTitle = styled.h5`
  margin-bottom: 0;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  padding: 0;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  cursor: pointer;
  color: white;
  font-size: 30px;
`;

const ModalBody = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
`;

const Modal = ({ id, isopen, onClose }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id && isopen) {
      fetch(`https://my-json-server.typicode.com/alucardsam/api-aluraflix/movies/${id}`)
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [id, isopen]);

  if (!data) return null;

  return (
    <ModalWrapper $isopen={isopen}>
      <ModalDialog>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>{data.title}</ModalTitle>
            <CloseButton onClick={onClose}>
              <span><FaX /></span>
            </CloseButton>
          </ModalHeader>
          <ModalBody >
            <FormEditVideo data={data} />
          </ModalBody>
        </ModalContent>
      </ModalDialog>
    </ModalWrapper>
  );
};

export default Modal;
