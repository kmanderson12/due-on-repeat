import { useState, useContext } from "react";
import { store } from "../utils/context/GlobalProvider";
import styled from "styled-components";
import BudgetGroup from "../components/BudgetGroup";
import { Plus } from "../components/icons";
import Modal from "../components/Modal";
import AddItemForm from "../components/AddItemForm";

const BudgetSection = () => {
  const [toggle, setToggle] = useState(false);
  const toggleModal = () => {
    setToggle(!toggle);
  };
  const { state } = useContext(store);
  const income = state.items.filter(item => item.type === "income");
  const expenses = state.items.filter(item => item.type === "expense");
  return (
    <>
      {toggle ? (
        <Modal>
          <AddItemForm cancel={toggleModal} />
        </Modal>
      ) : null}
      <BudgetContainer>
        <BudgetHeader>
          <BudgetTitle>{state.name}'s Budget</BudgetTitle>
          <AddButton onClick={toggleModal}>
            <Plus />
            Add New Item
          </AddButton>
        </BudgetHeader>
        <InsetContainer>
          <BudgetGroup type="Income" items={income} />
          <Divider />
          <BudgetGroup type="Expenses" items={expenses} />
        </InsetContainer>
      </BudgetContainer>
    </>
  );
};

export default BudgetSection;

const BudgetContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const BudgetHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BudgetTitle = styled.h2`
  font-weight: 400;
  color: ${props => props.theme.colors.gray700};
`;

const AddButton = styled.button`
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.colors.gray700};
  color: white;
  font-family: "Rubik";
  font-weight: 400;
  padding: 1rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  > * {
    margin: 0 0.4rem;
  }
`;

const InsetContainer = styled.div`
  background: #ffffff;
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  max-width: 800px;
  min-height: 70vh;
  /* overflow-y: scroll; */
  margin: 0 auto;
  padding: 2rem;
  @media screen and (max-width: 800px) {
    padding: 2rem 1rem;
  }
`;

const Divider = styled.div`
  border-bottom: 0.5px solid black;
  opacity: 0.1;
  width: 100%;
  height: 1px;
  margin: 2rem 0;
`;
