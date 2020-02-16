import {
  Label,
  CustomInput,
  CustomLabel,
  RadioContainer,
  RadioLabel,
  RadioInput
} from '../components/styles/FormStyles';

const DayOfTheMonth = props => {
  return (
    <>
      <Label>Day of the Month</Label>
      <RadioContainer>
        <RadioInput type="radio" id="first" name="day" value="first" />
        <RadioLabel htmlFor="first">1st of the month</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <RadioInput type="radio" id="last" name="day" value="last" />
        <RadioLabel htmlFor="last">Last day of the month</RadioLabel>
      </RadioContainer>
      <RadioContainer>
        <RadioInput type="radio" id="custom" name="day" value="custom" />
        <RadioLabel htmlFor="custom">Custom:</RadioLabel>
        <CustomInput type="text" name="customDay" placeholder="15" />
        {/* <CustomLabel htmlFor="customDay">Enter a day of the month</CustomLabel> */}
      </RadioContainer>
    </>
  );
};

export default DayOfTheMonth;
