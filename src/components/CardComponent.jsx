import styled from 'styled-components';
import Modal from './Modal';
import { useEffect, useState } from 'react';

const Card = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
  overflow: hidden;
  margin: .5rem;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h2`
  font-size: 1em;
  margin: 0 0 .5rem 0;
`;

const CardDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  font-size: 18px;
  font-weight: 700;
  padding: 1em;
  color: white;
  border: 4px solid var(--border);
  border-radius: 15px;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
  }
`;

const CardComponent = (props) => {
  const { data } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [idMovie, setIdMovie] = useState(null);

  const handleOpenModal = (id) => {
    setModalId(id);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setModalId(null);
  };
  const handleDelete = (id) => {
    setIdMovie(id);
  };

  useEffect(() => {
    if (idMovie) {
      const deleteMovie = async () => {
        try {
          const response = await fetch(`https://my-json-server.typicode.com/alucardsam/api-aluraflix/movies/${idMovie}`, {
            method: 'DELETE',
          });
          if (!response.ok) {
            throw new Error('Error al borrar la película');
          }
          alert('Película borrada exitosamente');
        } catch (error) {
          console.error('Error:', error);
        }
      };
      deleteMovie();
    }
  }, [idMovie]);



  return (
    <Card>
      <CardImage src={data.image} alt={data.title} />
      <CardContent>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
        <ButtonContainer>
          <Button onClick={() => handleOpenModal(data.id)}>Editar</Button>
          <Button onClick={() => handleDelete(data.id)}>Eliminar</Button>
          <Modal id={modalId} isopen={isOpen} onClose={handleCloseModal} />
        </ButtonContainer>
      </CardContent>
    </Card>
  );
};

export default CardComponent;