import styled from 'styled-components';
import Header from '../components/Header'
import BannerImage from '../components/Banner'
import Footer from '../components/Footer'
import { options } from '../components/FormVideo';
import Category from '../components/Category';
import { useState, useEffect } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 15px;
`;

export const Home = () => {
  const labels = options.map((op) => op.label);
  const [cards, setCards] = useState([])
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/alucardsam/api-aluraflix/movies")
      .then((response) => response.json())
      .then((data) => {
        setCards([...data]);
      });
  }, []);
  return (
    <>
      <Header />
      <Container>
        <BannerImage src="banner.png" alt="Banner" />
        {
          labels.map((label, index) => <Category key={index} label={label} cards={cards.filter(card => card.category === label.toLowerCase())} />)
        }
      </Container>
      <Footer />
    </>
  )
}

export default Home