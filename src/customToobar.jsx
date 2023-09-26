import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./customToolbar.css";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";

const CustomToolbar = ({ date, onNavigate }) => {
  const [selectedMonth, setSelectedMonth] = useState(date);
  const [diasMes, setDiasMes] = useState(date);

  useEffect(() => {
    const firstDay = startOfMonth(selectedMonth);
    const lastDay = endOfMonth(selectedMonth);
    const days = eachDayOfInterval({ start: firstDay, end: lastDay });
    setDiasMes(days);
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

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const [year, month] = inputValue.split("-");
    const selectedDate = new Date(year, month - 1, 1);
    setSelectedMonth(selectedDate);
  };

  return (
    <div className="custom-toolbar">
      <button type="button" onClick={handlePrevMonth}>{"<"}</button>
      <span className="custom-toolbar-month">
        {format(selectedMonth, "MMMM yyyy")}
      </span>
      <input
        type="month"
        value={selectedMonth ? selectedMonth.toISOString().slice(0, 7) : ""}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleNextMonth}>{">"}</button>
      <div className="calendar-days">
        {diasMes.map((day) => (
          <div key={day} >
            {format(day, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

CustomToolbar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default CustomToolbar;
