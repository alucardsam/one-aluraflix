import styled from 'styled-components';
import InputField from './InputField';
import SelectField from './SelectField';
import { useState, useEffect } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 15px;
  text-align: center;
  padding: 2rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 20px;
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

export const options = [
  { value: 'action', label: 'Action' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'drama', label: 'Drama' },
];

export const FormVideo = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      title,
      category,
      image,
      video,
      description
    }
    setSubmittedData(data);
  };

  const handleClear = () => {
    setTitle('');
    setCategory('');
    setImage('');
    setVideo('');
    setDescription('');
  };

  useEffect(() => {
    if (submittedData) {
      const postData = async () => {
        try {
          const response = await fetch('https://my-json-server.typicode.com/alucardsam/api-aluraflix/movies', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(submittedData)
          });
          const result = await response.json();
          console.log('Success:', result);
          alert('Success');
        } catch (error) {
          console.error('Error:', error);
          alert('Error');
        }
      };

      postData();
    }
  }, [submittedData]);

  return (
    <Container>
      <h1>NUEVO VIDEO</h1>
      <h3>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h3>
      <h1>Crear Tarjeta</h1>
      <FormContainer onSubmit={handleSubmit}>
        <InputField name="title" label="Título" placeholder="Ingrese el título" required value={title} setValue={setTitle} />
        <SelectField name="category" options={options} value={category} setValue={setCategory} />
        <InputField name="image" label="Imagen" placeholder="Enlace de la imagen del vídeo" required value={image} setValue={setImage} />
        <InputField name="video" label="Vídeo" placeholder="Enlace del vídeo" required value={video} setValue={setVideo} />
        <InputField name="description" label="Descripción" placeholder="¿De que trata este vídeo?" required value={description} setValue={setDescription} />
        <ButtonsContainer>
          <Button type="submit">GUARDAR</Button>
          <Button type="button" onClick={handleClear}>LIMPIAR</Button>
        </ButtonsContainer>
      </FormContainer>
    </Container>
  )
};

export default FormVideo;