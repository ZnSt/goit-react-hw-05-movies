import { useState } from 'react';
import { Input, Btn } from './Form.styled';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(value);
    reset();
  };

  const handleChange = event => {
    setValue(event.currentTarget.value);
  };

  const reset = () => {
    setValue('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={value} onChange={handleChange} />
        <Btn type="submit">Search</Btn>
      </form>
    </div>
  );
};

export default Form;
