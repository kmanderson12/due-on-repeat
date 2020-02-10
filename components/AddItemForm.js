import { useState, useContext } from "react";
import { store } from "../utils/context/GlobalProvider";
import styled from "styled-components";

const AddItemForm = props => {
  const { dispatch } = useContext(store);

  const handleSubmit = e => {
    e.preventDefault();
    if (newItem.type === "") {
      return alert("Please set a type");
    }
    dispatch({ type: "ADD_ITEM", payload: newItem });
    props.cancel();
  };
  const [newItem, setNewItem] = useState({
    type: "",
    title: "",
    amount: "",
    recurrence: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };
  const { type, title, amount, recurrence } = newItem;
  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <FormTitle>Add New Budget Item</FormTitle>
      <label>Type</label>
      <select
        id="type"
        name="type"
        onChange={handleChange}
        defaultValue="select"
        required
      >
        <option disabled value="select">
          Select An Option
        </option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <label>Description</label>
      <input
        type="text"
        name="title"
        placeholder="Name of Item"
        onChange={handleChange}
        value={title}
        required
      />

      <label>Amount</label>
      <input
        type="number"
        min="0.01"
        step="0.01"
        name="amount"
        placeholder="0.00"
        onChange={handleChange}
        value={amount}
        required
      />
      <label>Recurrence</label>
      <input
        type="text"
        name="recurrence"
        placeholder="Every month on the 15th"
        onChange={handleChange}
        value={recurrence}
        required
      />
      <button onClick={props.cancel}>Cancel</button>
      <button type="submit">Add New Item</button>
    </Form>
  );
};

export default AddItemForm;

const FormTitle = styled.h2`
  text-align: center;
  margin: 1rem 0 2rem 0;
`;

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  color: ${props => props.theme.colors.gray700};
  label,
  input {
    display: block;
    margin: 1rem 0;
  }
`;
