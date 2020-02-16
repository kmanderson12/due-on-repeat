import { useState } from 'react';
import {
  Label,
  CustomInput,
  CustomLabel,
  RadioContainer,
  RadioLabel,
  RadioInput
} from '../components/styles/FormStyles';

const DayOfTheMonth = props => {
  const customDay = isNaN(props.dayOfMonth) ? '' : props.dayOfMonth;
  return (
    <>
      <Label>Day of the Month</Label>
      <RadioContainer>
        <RadioInput
          type="radio"
          id="first"
          name="dayOfMonth"
          value="first"
          onChange={props.handleChange}
        />
        <RadioLabel htmlFor="first">1st of the month</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <RadioInput
          type="radio"
          id="last"
          name="dayOfMonth"
          value="last"
          onChange={props.handleChange}
        />
        <RadioLabel htmlFor="last">Last day of the month</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <RadioInput
          type="radio"
          id="custom"
          name="dayOfMonth"
          value={customDay}
          onChange={props.handleChange}
        />
        <RadioLabel htmlFor="custom">Custom:</RadioLabel>
        <CustomInput
          type="number"
          min="1"
          max="31"
          name="dayOfMonth"
          placeholder="15"
          onChange={props.handleChange}
        />
        {/* <CustomLabel htmlFor="customDay">Enter a day of the month</CustomLabel> */}
      </RadioContainer>
    </>
  );
};

export default DayOfTheMonth;
