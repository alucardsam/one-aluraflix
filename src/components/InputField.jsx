import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const Input = styled.input`
  display: block;
  padding: 0.5em;
  margin: 1em 0;
  font-size: 1em;
  border: 3px solid #262626;
  border-radius: 10px;
  color: white;
  width: 100%;
  resize: vertical;

  &:focus {
    border-color: var(--border);
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
    outline: none;
  }
`;
const InputField = (props) => {
  const { name, label, type, placeholder, required, value, setValue } = props;
  const handleOnChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete='off'
        size={50}
        value={value}
        onChange={handleOnChange}
      />
    </InputContainer>
  );
};

export default InputField;