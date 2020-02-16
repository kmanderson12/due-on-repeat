import convertDay from '../utils/convertDay';

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

export default formatRecurrence;
