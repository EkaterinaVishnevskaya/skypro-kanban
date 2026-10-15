import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SCalendar = styled.div`
  margin-bottom: 20px;
`;

function Calendar({ date, setDate }) {
  return (
    <div>
      <SCalendar>
        <DatePicker
          selected={Date(date)}
          onChange={(selectedDate) => setDate(selectedDate.toISOString())}
          inline
        />
      </SCalendar>
      <p>Срок исполнения: {date ? new Date(date).toLocaleDateString() : ""}</p>
    </div>
  );
}
export default Calendar;
