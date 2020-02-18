import { useState, useContext } from 'react';
import { store } from '../utils/context/GlobalProvider';
import styled from 'styled-components';
import DayOfTheMonth from '../components/DayOfTheMonth';
import DayOfTheWeek from '../components/DayOfTheWeek';
import ItemTypeButtonGroup from '../components/styles/ItemTypeButtonGroup';
import AddButton from '../components/styles/AddButton';
import { Plus } from '../components/icons';
import RecurrenceGroup from '../components/RecurrenceGroup';
import {
  Form,
  FormTitle,
  Label,
  TextInput,
  NumberInput,
  CustomInput,
  CustomLabel,
  CancelButton,
  ButtonContainer,
  RadioContainer,
  RadioLabel,
  RadioInput
} from '../components/styles/FormStyles';

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
    recurrence: 'monthly',
    dayOfWeek: 'Monday',
    dayOfMonth: ''
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
  const { type, title, amount, recurrence, dayOfWeek, dayOfMonth } = newItem;
  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Add New Budget Item</FormTitle>
      <ItemTypeButtonGroup type={type} onClick={handleChange} />
      <FlexContainer>
        <FormItem>
          <Label>Description</Label>
          <TextInput
            type="text"
            name="title"
            placeholder="Name of Item"
            onChange={handleChange}
            value={title}
            required
          />
        </FormItem>
        <FormItem>
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
        </FormItem>
        <FormItemRecurrence>
          <Label>Recurrence</Label>
          <RecurrenceGroup recurrence={recurrence} onClick={handleChange} />
        </FormItemRecurrence>
        <FormItem>
          {recurrence === 'monthly' ? (
            <DayOfTheMonth handleChange={handleChange} />
          ) : (
            <DayOfTheWeek handleChange={handleChange} dayOfWeek={dayOfWeek} />
          )}
        </FormItem>
      </FlexContainer>
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

const FlexContainer = styled.div`
  min-height: 210px;
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem 0 0;
  min-width: 250px;
  @media screen and (max-width: 500px) {
    min-width: 300px;
  }
  @media screen and (max-width: 400px) {
    min-width: 250px;
  }
`;

const FormItemRecurrence = styled(FormItem)`
  min-height: 125px;
  @media screen and (max-width: 580px) {
    min-height: auto;
  }
`;
