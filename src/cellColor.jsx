import React, { Children } from "react";
import { isSaturday, isSunday, isToday } from "date-fns";

const CURRENT_DATE = new Date(); // Start of today

const ColoredDateCellWrapper = ({ children, value }) => {
  const isSaturdayValue = isSaturday(value);
  const isSundayValue = isSunday(value);
  const isTodayValue = isToday(value, CURRENT_DATE);

  const backgroundColor = isSaturdayValue || isSundayValue ? '#d2d2d2' : isTodayValue ? '#e2fcd4' : 'white';
  const border = "none";

  return React.cloneElement(Children.only(children), {
    style: {
      ...children.props.style,
      backgroundColor,
      border,
    },
  });
};

export default ColoredDateCellWrapper;
