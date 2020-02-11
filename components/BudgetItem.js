import { useState } from "react";
import styled from "styled-components";
import { Repeat } from "../components/icons";
import Modal from "../components/Modal";
import UpdateItemForm from "../components/UpdateItemForm";

// TODO: Under 800px -> Wrap Title and Recurrence (flex-direction)

const BudgetItem = props => {
  const [toggle, setToggle] = useState(false);
  const toggleModal = e => {
    if (e) {
      e.preventDefault();
    }
    setToggle(!toggle);
  };
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(props.amount);
  const amount = props.type === "income" ? `+${formatted}` : `-${formatted}`;
  return (
    <>
      {toggle ? (
        <Modal>
          <UpdateItemForm
            cancel={toggleModal}
            id={props.id}
            type={props.type}
            title={props.title}
            recurrence={props.recurrence}
            amount={props.amount}
          />
        </Modal>
      ) : null}
      <BudgetCard onClick={toggleModal}>
        <FlexWrapper>
          <ItemTitle>{props.title}</ItemTitle>
          <ItemOccurrence>
            <Repeat />
            {props.recurrence}
          </ItemOccurrence>
        </FlexWrapper>
        <ItemAmount type={props.type}>{amount}</ItemAmount>
      </BudgetCard>
    </>
  );
};

export default BudgetItem;

const BudgetCard = styled.div`
  background: #edf2f7;
  box-shadow: ${props => props.theme.shadows.bs1};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  margin: 0.75rem;
  font-size: 1.7rem;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    box-shadow: ${props => props.theme.shadows.bs2};
  }
`;

const ItemTitle = styled.h4`
  font-weight: 400;
  color: ${props => props.theme.colors.gray700};
  min-width: 200px;
`;

const ItemOccurrence = styled.p`
  font-weight: 300;
  min-width: 300px;
  color: ${props => props.theme.colors.gray600};
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    margin-right: 0 0.45rem;
  }
  > svg {
    max-height: 14px;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.6rem;
    justify-content: flex-start;
    > svg {
      max-height: 12px;
    }
    > * {
      margin: 0 0.2rem 0 0;
    }
  }
`;

const ItemAmount = styled.p`
  text-align: right;
  width: 30%;
  font-weight: 400;
  color: ${props =>
    props.type === "income"
      ? props.theme.colors.green200
      : props.theme.colors.red};
  @media screen and (max-width: 800px) {
    width: 20%;
    font-size: 1.8rem;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
  }
`;
