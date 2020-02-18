import ordinal from 'ordinal';

const convertDay = dayOfMonth => {
  switch (dayOfMonth) {
    case 'first':
      return '1st';
    case 'last':
      return 'last day';
    default:
      return ordinal(parseInt(dayOfMonth));
  }
};

export default convertDay;
