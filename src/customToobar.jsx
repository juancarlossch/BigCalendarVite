import  { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./customToolbar.css";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

const CustomToolbar = ({ date, onNavigate }) => {
  const [selectedMonth, setSelectedMonth] = useState(date);
  const [selectedMonthDays, setSelectedMonthDays] = useState([]);

  useEffect(() => {
    const firstDay = startOfMonth(selectedMonth);
    const lastDay = endOfMonth(selectedMonth);
    const days = eachDayOfInterval({ start: firstDay, end: lastDay });
    setSelectedMonthDays(days);
    onNavigate(selectedMonth, "DATE");
  }, [selectedMonth, onNavigate]);

  const handlePrevMonth = () => {
    const prevMonth = subMonths(selectedMonth, 1);
    setSelectedMonth(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = addMonths(selectedMonth, 1);
    setSelectedMonth(nextMonth);
  };

  return (
    <div className="custom-toolbar">
      <button onClick={handlePrevMonth}>{"<"}</button>
      <span className="custom-toolbar-month">
        {format(selectedMonth, "MMMM yyyy")}
      </span>
      <button onClick={handleNextMonth}>{">"}</button>
      <div className="calendar-days">
        {/* {selectedMonthDays.map((day) => (
          <div key={day} >
            {format(day, "d")}
          </div>
        ))} */}
      </div>
    </div>
  );
};

CustomToolbar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default CustomToolbar;
