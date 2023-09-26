import moment from "moment";
import 'moment/locale/es';
import React, { Children } from "react";


const CURRENT_DATE = moment().startOf('day').toDate(); // Start of today
const ColoredDateCellWrapper = ({ children, value }) => {
  const isSaturday = value.getDay() === 6; // Saturday is represented by 6 in JavaScript Date.getDay()
  const isSunday = value.getDay() === 0; // Sunday is represented by 0 in JavaScript Date.getDay()
  const isToday = moment(value).isSame(CURRENT_DATE, 'day'); // Check if the value is the current day

  const backgroundColor = isSaturday || isSunday ? '#d2d2d2' : isToday ? '#e2fcd4' : 'white';
  const border = "none"


  return React.cloneElement(Children.only(children), {
    style: {
      ...children.props.style,
      backgroundColor,
      border

    },
  });
};

export default ColoredDateCellWrapper;