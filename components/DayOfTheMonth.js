import { useState } from 'react';
import {
  Label,
  CustomInput,
  CustomLabel,
  RadioContainer,
  RadioLabel,
  RadioInput
} from '../components/styles/FormStyles';

//TODO: Fix the handling of custom input

const DayOfTheMonth = props => {
  console.log(props.dayOfMonth);
  const [customField, setCustomField] = useState(false);
  const turnOnCustomField = e => {
    setCustomField(true);
  };
  const turnOffCustomField = e => {
    setCustomField(false);
  };
  // const [customDay, setCustomDay] = useState(15)
  // const handleCustomInput = e => {
  //   setCustomDay(e.target.value)
  // }
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
          checked={props.dayOfMonth === 'first'}
          onChange={props.handleChange}
          onClick={turnOffCustomField}
        />
        <RadioLabel htmlFor="first">1st of the month</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <RadioInput
          type="radio"
          id="last"
          name="dayOfMonth"
          value="last"
          checked={props.dayOfMonth === 'last'}
          onChange={props.handleChange}
          onClick={turnOffCustomField}
        />
        <RadioLabel htmlFor="last">Last day of the month</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <RadioInput
          type="radio"
          id="custom"
          name="dayOfMonth"
          value={customDay}
          checked={props.dayOfMonth !== 'first' && props.dayOfMonth !== 'last'}
          onChange={props.handleChange}
          onClick={turnOnCustomField}
        />
        <RadioLabel htmlFor="custom">Custom:</RadioLabel>
        <CustomInput
          type="number"
          min="1"
          max="31"
          name="dayOfMonth"
          placeholder={customDay === '' ? 15 : customDay}
          value={customDay}
          disabled={
            !(props.dayOfMonth !== 'first' && props.dayOfMonth !== 'last')
          }
          onChange={props.handleChange}
        />
        {/* <CustomLabel htmlFor="customDay">Enter a day of the month</CustomLabel> */}
      </RadioContainer>
    </>
  );
};

export default DayOfTheMonth;
