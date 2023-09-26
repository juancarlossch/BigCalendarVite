import moment from "moment";
import "moment/locale/es";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ColoredDateCellWrapper from "./dataCellWrapper";
import CustomToolbar from "./customToolbar";
import { useState, useEffect, useCallback } from "react";
import "moment/locale/es-mx";

moment.locale("es");

const localizer = momentLocalizer(moment);

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [dateDemo, setDateDemo] = useState(new Date());

  // useEffect(() => {
  //   console.log(selectedMonth);
  // }, [selectedMonth]);


  // const onNavigate = useCallback(
  //   (selectedMonth) => {
  //     alert(selectedMonth);
  //     setSelectedMonth(selectedMonth);
  //   },
  //   [setSelectedMonth]
  // );
  const onNavigate = useCallback((newDate) => {
    setSelectedMonth(newDate)
    // alert(newDate);
  }, [setSelectedMonth]);


  return (
    <>
    <button onClick={() => setDateDemo(new Date(2023, 1, 23))} >Cambio</button>
      <div
        className="calendar-container"
        style={{ marginLeft: "5rem", marginTop: "5rem" }}
      >
        <Calendar
          localizer={localizer}
          style={{ height: "450px", border: "none" }}
          views={["month"]}
          onNavigate={onNavigate}
          components={{
            // toolbar: CustomToolbar,
            dateCellWrapper: ColoredDateCellWrapper,
          }}
          date={dateDemo}
        />
      </div>
      {/* 
      <div className="color-no-working"></div>
      <div className="color-working"></div> */}
    </>
  );
};

export default App;
