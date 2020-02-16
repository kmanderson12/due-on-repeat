import { useState } from 'react';
import styled from 'styled-components';
import { Repeat } from '../components/icons';
import ordinal from 'ordinal';
import Modal from '../components/Modal';
import UpdateItemForm from '../components/UpdateItemForm';

const BudgetItem = props => {
  const [toggle, setToggle] = useState(false);
  const toggleModal = e => {
    if (e) {
      e.preventDefault();
    }
    setToggle(!toggle);
  };
  const formatMoney = money =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(money);
  const amount =
    props.type === 'income'
      ? `+${formatMoney(props.amount)}`
      : `-${formatMoney(props.amount)}`;
  const convertDay = dayOfMonth => {
    switch (dayOfMonth) {
      case 'first':
        return '1st';
      case 'last':
        return 'last day of the month';
      default:
        return ordinal(parseInt(dayOfMonth));
    }
  };
  const formatRecurrence = (recurrence, dayOfWeek, dayOfMonth) => {
    switch (recurrence) {
      case 'monthly':
        return `Every month on the ${convertDay(dayOfMonth)}`;
      case 'bi-weekly':
        return `Every 2 weeks on ${dayOfWeek}s`;
      default:
        return `Every week on ${dayOfWeek}`;
    }
  };
  const itemRecurrence = formatRecurrence(
    props.recurrence,
    props.dayOfWeek,
    props.dayOfMonth
  );
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
            {itemRecurrence}
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
  @media screen and (max-width: 800px) {
    padding: 1rem;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    width: auto;
  }
`;

const ItemTitle = styled.h4`
  font-weight: 400;
  color: ${props => props.theme.colors.gray700};
  min-width: 50%;
  @media screen and (max-width: 800px) {
    margin-bottom: 0.1rem;
  }
`;

const ItemOccurrence = styled.p`
  font-weight: 300;
  min-width: 50%;
  color: ${props => props.theme.colors.gray600};
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    margin-right: 0.45rem;
    max-height: 14px;
  }
  @media screen and (max-width: 800px) {
    font-size: 1.4rem;
    justify-content: flex-start;
    margin-left: -2px;
    > svg {
      margin-right: 0.2rem;
      max-height: 12px;
    }
  }
`;

const ItemAmount = styled.p`
  text-align: right;
  width: 50%;
  font-weight: 400;
  color: ${props =>
    props.type === 'income'
      ? props.theme.colors.green200
      : props.theme.colors.red};
  @media screen and (max-width: 800px) {
    font-size: 1.8rem;
    width: auto;
  }
`;
