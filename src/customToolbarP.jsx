import { useState } from "react";
import PropTypes from "prop-types";
import "./customToolbar.css";

const CustomToolbarP = ({ date, onNavigate }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setSelectedMonth(date);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const [year, month] = inputValue.split("-");
    const selectedDate = new Date(year, month - 1, 1); // Month is zero-based, so we subtract 1
    // console.log(selectedDate)
    onNavigate(selectedDate);
  };
  const handleMonthSelect = () => {
    if (selectedMonth) {
      // const formattedMonth = formatSelectedMonth(selectedMonth);
      // console.log("Date before conversion");
      // console.log(formattedMonth);

      onNavigate(new Date(selectedMonth));
      // console.log("Date after conversion");
      // console.log(formattedMonth);
      // console.log(selectedMonth)
      setSelectedMonth(selectedMonth);
      closeDialog();
    }
  };

  return (
    <div className="custom-toolbar">
      <button onClick={() => onNavigate("PREV")}>{"<"}</button>
      <span className="custom-toolbar-month">
        {date
          .toLocaleDateString("es-ES", { month: "long", year: "numeric" })
          .replace(/\bde\b/g, "")}
      </span>
      <button onClick={openDialog}>{"v"}</button>
      <button onClick={() => onNavigate("NEXT")}>{">"}</button>

      <dialog
        open={isDialogOpen}
        onClose={closeDialog}
        style={{ marginTop: "2rem" }}
      >
        <input
          type="month"
          value={selectedMonth ? selectedMonth.toISOString().slice(0, 7) : ""}
          onChange={handleInputChange}
        />
        <button onClick={handleMonthSelect}>OK</button>
      </dialog>
    </div>
  );
};

CustomToolbarP.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  newSelectedMonth: PropTypes.instanceOf(Date),
  onNavigate: PropTypes.func.isRequired,
};

export default CustomToolbarP;
