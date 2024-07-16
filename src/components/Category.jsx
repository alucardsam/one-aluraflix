import styled from 'styled-components';
import CardComponent from './CardComponent';

const Container = styled.section`
  font-size: 32px;
  width: 100%;
  padding: 0 2rem;
`;

const Label = styled.label`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  color: #fff;
  background-color: #007bff;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;


const Category = (props) => {
  const { label, cards } = props;
  return (
    <Container>
      <Label>{label}</Label>
      <CardContainer>
        {
          cards.map((data, index) => <CardComponent key={index} data={data} />)
        }
      </CardContainer>
    </Container>
  );
};

export default Category;