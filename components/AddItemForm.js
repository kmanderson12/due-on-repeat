import { useState, useContext } from 'react';
import { store } from '../utils/context/GlobalProvider';
import styled from 'styled-components';
import ItemTypeButtonGroup from '../components/styles/ItemTypeButtonGroup';
import AddButton from '../components/styles/AddButton';
import { Plus } from '../components/icons';

//TODO: Change form items to flexbox instead of grid
//TODO: Move Day of the Month to another file
//TODO: Create Recurrence button group
//TODO: Create Weekly section
//TODO: Create Bi-Weekly section
//TODO: Wire up state/context with new inputs
//TODO: Fix mobile view (larger buttons, text)
//TODO: Consider adding preview of new item within modal

const AddItemForm = props => {
  const { dispatch, state } = useContext(store);
  const newId = state.items.length + 1;
  const [newItem, setNewItem] = useState({
    id: newId,
    type: 'income',
    title: '',
    amount: '',
    recurrence: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (newItem.type === '') {
      return alert('Please set a type');
    }
    dispatch({ type: 'ADD_ITEM', payload: newItem });
    props.cancel();
  };
  const handleCancel = e => {
    e.preventDefault();
    props.cancel();
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };
  const { type, title, amount, recurrence } = newItem;
  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Add New Budget Item</FormTitle>
      <ItemTypeButtonGroup type={type} onClick={handleChange} />
      <GridContainer>
        <Label>Description</Label>
        <TextInput
          type="text"
          name="title"
          placeholder="Name of Item"
          onChange={handleChange}
          value={title}
          required
        />

        <Label>Amount</Label>
        <NumberInput
          type="number"
          min="0.01"
          step="0.01"
          name="amount"
          placeholder="$0.00"
          onChange={handleChange}
          value={amount}
          required
        />
        <Label>Recurrence</Label>
        <TextInput
          type="text"
          name="recurrence"
          placeholder="Every month on the 15th"
          onChange={handleChange}
          value={recurrence}
          required
        />
      </GridContainer>
      <Label>Day of the Month</Label>
      <RadioContainer>
        <RadioInput type="radio" id="first" name="day" value="first" />
        <RadioLabel htmlFor="first">1st of the month</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <RadioInput type="radio" id="last" name="day" value="last" />
        <RadioLabel htmlFor="last">Last day of the month</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <RadioInput type="radio" id="custom" name="day" value="custom" />
        <RadioLabel htmlFor="custom">Custom:</RadioLabel>
        <CustomInput type="text" name="customDay" placeholder="15" />
        <CustomLabel htmlFor="customDay">Enter a day of the month</CustomLabel>
      </RadioContainer>
      <ButtonContainer>
        <CancelButton type="button" onClick={handleCancel}>
          Cancel
        </CancelButton>
        <AddButton type="submit">
          <Plus />
          Add New Item
        </AddButton>
      </ButtonContainer>
    </Form>
  );
};

export default AddItemForm;

const Form = styled.form`
  width: 100%;
  max-width: 700px;
  min-height: 70vh;
  color: ${props => props.theme.colors.gray700};
  display: flex;
  flex-direction: column;
  RadioLabel,
  input {
    display: block;
  }
  input[type='radio'] {
    display: inline;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  margin: 1rem 0 2rem 0;
`;

const Label = styled.label`
  font-size: 1.2rem;
  padding-left: 0.2rem;
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  z-index: 1;
  border-radius: 5px;
  width: 24px;
  height: 24px;
`;

const RadioLabel = styled.label`
  font-size: 1.2rem;
  padding-left: 0.2rem;
  display: inline;
`;

const CustomInput = styled.input`
  background: #ffffff;
  max-width: 30px;
  margin: 0 0.5rem;
  text-align: center;
  border: 1px solid #edf2f7;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  padding: 0.5rem;
  color: ${props => props.theme.colors.gray700};
  font-size: 1.2rem;
  font-family: 'Rubik';
  ::placeholder {
    color: ${props => props.theme.colors.gray500};
    font-size: 1.2rem;
  }
`;

const CustomLabel = styled.label`
  font-size: 1rem;
  color: ${props => props.theme.colors.gray600};
`;

const TextInput = styled.input`
  background: #ffffff;
  border: 1px solid #edf2f7;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  padding: 1rem;
  color: ${props => props.theme.colors.gray700};
  font-size: 1.2rem;
  font-family: 'Rubik';
  ::placeholder {
    color: ${props => props.theme.colors.gray500};
    font-size: 1.2rem;
  }
`;
const NumberInput = styled.input`
  background: #ffffff;
  border: 1px solid #edf2f7;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  padding: 1rem;
  color: ${props => props.theme.colors.gray700};
  font-size: 1.2rem;
  font-family: 'Rubik';
  ::placeholder {
    color: ${props => props.theme.colors.gray500};
    font-size: 1.2rem;
  }
`;

const CancelButton = styled.button`
  border: none;
  border-radius: 5px;
  background: none;
  color: ${props => props.theme.colors.gray600};
  font-family: 'Rubik';
  font-weight: 400;
  padding: 1rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  :hover {
    background: ${props => props.theme.colors.gray200};
  }
`;

const ButtonContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto auto 1rem auto;
  justify-self: flex-end;
  > * {
    margin: 0 0.5rem;
  }
`;

const GridContainer = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 0.5fr 1fr;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
`;
