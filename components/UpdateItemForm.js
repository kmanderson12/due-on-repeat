import { useState, useContext } from 'react';
import { store } from '../utils/context/GlobalProvider';
import styled from 'styled-components';
import DayOfTheMonth from '../components/DayOfTheMonth';
import DayOfTheWeek from '../components/DayOfTheWeek';
import ItemTypeButtonGroup from '../components/styles/ItemTypeButtonGroup';
import AddButton from '../components/styles/AddButton';
import { Check } from '../components/icons';
import RecurrenceGroup from '../components/RecurrenceGroup';
import BudgetItemPreview from '../components/BudgetItemPreview';
import {
  Form,
  FormTitle,
  Label,
  TextInput,
  NumberInput,
  CancelButton,
  ButtonContainer
} from '../components/styles/FormStyles';

const UpdateItemForm = props => {
  const { dispatch } = useContext(store);
  const [item, setItem] = useState({
    id: props.id,
    type: props.type,
    title: props.title,
    amount: props.amount,
    recurrence: props.recurrence,
    dayOfMonth: props.dayOfMonth,
    dayOfWeek: props.dayOfWeek
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (item.type === '') {
      return alert('Please set a type');
    }
    dispatch({ type: 'UPDATE_ITEM', payload: item });
    props.cancel();
  };
  const handleDelete = e => {
    e.preventDefault();
    const answer = window.confirm(
      'You sure about that? \nPress OK to delete. Cancel to go back.'
    );
    answer ? dispatch({ type: 'DELETE_ITEM', payload: item }) : null;
  };
  const handleCancel = e => {
    e.preventDefault();
    props.cancel();
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value
    });
  };
  const { id, type, title, amount, recurrence, dayOfMonth, dayOfWeek } = item;
  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Edit Budget Item</FormTitle>
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
            min="1"
            step="1"
            name="amount"
            placeholder="$100"
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
            <DayOfTheMonth
              handleChange={handleChange}
              dayOfMonth={dayOfMonth}
            />
          ) : (
            <DayOfTheWeek handleChange={handleChange} dayOfWeek={dayOfWeek} />
          )}
        </FormItem>
      </FlexContainer>
      <PreviewContainer>
        <PreviewTitle>Preview</PreviewTitle>
        <BudgetItemPreview
          title={title === '' ? 'New Item' : title}
          type={type}
          amount={amount}
          recurrence={recurrence}
          id={id}
          dayOfMonth={dayOfMonth}
          dayOfWeek={dayOfWeek}
        />
      </PreviewContainer>
      <ButtonContainer>
        <CancelButton type="button" onClick={handleCancel}>
          Cancel
        </CancelButton>
        <AddButton type="submit">
          <Check />
          Update Item
        </AddButton>
      </ButtonContainer>
      <button type="button" onClick={handleDelete}>
        Delete Item
      </button>
    </Form>
  );
};

export default UpdateItemForm;

const FlexContainer = styled.div`
  min-height: 210px;
  margin: 0.5rem 0;
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

const PreviewContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem 0;
  border-radius: 5px;
  box-shadow: ${props => props.theme.shadows.bs1};
`;

const PreviewTitle = styled.h4`
  text-align: center;
  font-weight: 400;
`;
