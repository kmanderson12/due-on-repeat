import styled from "styled-components";
import { Repeat } from "../components/icons";

const BudgetItem = props => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(props.amount);
  const amount = props.type === "income" ? `+${formatted}` : `-${formatted}`;
  return (
    <BudgetCard>
      <ItemTitle>{props.title}</ItemTitle>
      <ItemOccurrence>
        <Repeat />
        {props.occurrence}
      </ItemOccurrence>
      <ItemAmount type={props.type}>{amount}</ItemAmount>
    </BudgetCard>
  );
};

export default BudgetItem;

const BudgetCard = styled.div`
  background: #edf2f7;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  margin: 0.5rem;
  font-size: 1.7rem;
`;

const ItemTitle = styled.h4`
  font-weight: 400;
  color: ${props => props.theme.colors.gray700};
  width: 30%;
`;

const ItemOccurrence = styled.p`
  font-weight: 300;
  width: 30%;
  color: ${props => props.theme.colors.gray600};
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    margin: 0 0.45rem;
  }
  > svg {
    max-height: 14px;
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
`;
