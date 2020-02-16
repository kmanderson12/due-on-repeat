import styled from 'styled-components';
import {
  Label,
  RadioContainer,
  RadioLabel,
  RadioInput
} from '../components/styles/FormStyles';
import { ChevronDown } from '../components/icons';

const DayOfTheWeek = props => {
  return (
    <>
      <Label>Day of the Week</Label>
      <CustomSelect>
        <select
          id="recurrence"
          name="recurrence"
          onChange={props.onClick}
          defaultValue={props.recurrence}
          required
        >
          <option disabled value="select">
            Select An Option
          </option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
          <option value="sunday">Sunday</option>
        </select>
        <IconContainer>
          <ChevronDown />
        </IconContainer>
      </CustomSelect>
    </>
  );
};

export default DayOfTheWeek;

const CustomSelect = styled.div`
  display: inline-block;
  position: relative;
  width: 107px;
  select {
    display: block;
    appearance: none;
    background: #ffffff;
    border: 1px solid ${props => props.theme.colors.gray400};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    padding: 0.5rem 1rem 0.5rem 0.8rem;
    font-family: 'Rubik';
    color: ${props => props.theme.colors.gray700};
    :hover {
      border-color: ${props => props.theme.colors.gray500};
    }
  }
`;

const IconContainer = styled.div`
  pointer-events: none;
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 0 0.5rem;
  svg {
    height: 20px;
  }
`;
