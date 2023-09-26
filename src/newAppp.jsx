import { addMonths, format, subMonths } from "date-fns";
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";
import ColoredDateCellWrapper from "./cellColor";
import CustomToolbar from "./customToobar";

const locales = {
    'en-US': enUS,
  }
  
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })
const App = () => {
  const currentDate = new Date(); // Get the current date

  const onNavigate = (date, action) => {
    // Handle navigation to the next or previous month
    if (action === "PREV") {
      // Navigate to the previous month
      // Using date-fns to subtract a month
      // You can adjust the number of months as needed
      const newDate = subMonths(date, 1);
      console.log(newDate);
    } else if (action === "NEXT") {
      // Navigate to the next month
      // Using date-fns to add a month
      // You can adjust the number of months as needed
      const newDate = addMonths(date, 1);
      console.log(newDate);
    }
  };

  // Convert currentDate to the desired timezone

  return (
    <>
      <div className="calendar-container">
        <Calendar
          localizer={localizer }
          style={{ height: "450px", border: "none" }}
          views={["month"]}
          date={currentDate} // Set the initial date in the desired timezone
          onNavigate={onNavigate} // Handle navigation
          components={{
            toolbar: (props) => (
              <CustomToolbar {...props} currentMonth={currentDate} onNavigate={onNavigate} />
            ),
            dateCellWrapper: ColoredDateCellWrapper,
          }}
        />
      </div>

      <div className="color-no-working"></div>
      <div className="color-working"></div>
    </>
  );
};

export default App;
