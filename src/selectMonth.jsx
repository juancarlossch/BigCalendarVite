import PropTypes from 'prop-types';
import React from 'react';
const MonthSelector = ({ currentMonth, onMonthChange }) => {
  const formatDate = (date) => {
    return date.toLocaleDateString('default', { month: 'long', year: 'numeric' });
  };

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    onMonthChange(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    onMonthChange(nextMonth);
  };

  return (
    <React.Fragment>
      <button onClick={handlePrevMonth}>Previous Month</button>
      <span>{formatDate(currentMonth)}</span>
      <button onClick={handleNextMonth}>Next Month</button>
    </React.Fragment>
  );
};

MonthSelector.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  onMonthChange: PropTypes.func.isRequired,
};

export default MonthSelector;
