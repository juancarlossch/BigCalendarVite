import Calendar from 'react-calendar-pane';
import moment from "moment";
import "./calendarStyle.css"
const CustomCalendar = () => {


  return (
    <div>
    
      <Calendar date={moment("23/09/2023", "DD/MM/YYYY")} />
    </div>
  );
};

export default CustomCalendar;
