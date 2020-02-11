import { useState, useContext } from "react";
import { store } from "../utils/context/GlobalProvider";
import styled from "styled-components";

const UpdateItemForm = props => {
  const { dispatch } = useContext(store);
  const [item, setItem] = useState({
    id: props.id,
    type: props.type,
    title: props.title,
    amount: props.amount,
    recurrence: props.recurrence
  });

  const handleSubmit = e => {
    e.preventDefault();
    if (item.type === "") {
      return alert("Please set a type");
    }
    dispatch({ type: "UPDATE_ITEM", payload: item });
    props.cancel();
  };
  const handleDelete = e => {
    e.preventDefault();
    const answer = window.confirm(
      "You sure about that? \nPress OK to delete. Cancel to go back."
    );
    answer ? dispatch({ type: "DELETE_ITEM", payload: item }) : null;
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
  const { type, title, amount, recurrence } = item;
  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Edit Budget Item</FormTitle>
      <label>Type</label>
      <select
        id="type"
        name="type"
        onChange={handleChange}
        defaultValue={type}
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
      <button onClick={handleCancel}>Cancel</button>
      <button type="submit">Save Changes</button>
      <button className="delete" onClick={handleDelete}>
        Delete Item
      </button>
    </Form>
  );
};

export default UpdateItemForm;

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
  .delete {
    background: ${props => props.theme.colors.red};
    color: white;
  }
`;
