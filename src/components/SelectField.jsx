import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
`;

const Label = styled.label`
  font-weight: 700;
  color: white;
  padding: 12px 12px 12px 0;
  display: inline-block;
`;

const StyledSelect = styled.select`
  padding: 0.5em;
  font-size: 16px;
  border: 3px solid #262626;
  border-radius: 10px;
  margin: 10px 0;
  color: white;
  width: 100%;

  &:focus {
    border-color: var(--border);
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
    outline: none;
  }
`;

const StyledOption = styled.option`
  padding: 10px;
  font-size: 16px;
`;

const SelectField = (props) => {
  const { name, options, value, setValue } = props;
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputContainer>
      <Label>Categoria</Label>
      <StyledSelect name={name} value={value} onChange={handleOnChange}>
        {options.map((option, index) => (
          <StyledOption key={index} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </InputContainer>
  );
};

export default SelectField;