import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dpicker = ({ selectedDate, onChange }) => {
  return (
    <DatePicker
      className="secondary"
      selected={selectedDate}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      maxDate={new Date()}
      filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
      popperPlacement="bottom-end"
      popperModifiers={{
        flip: {
          behavior: ["bottom"],
        },
      }}
      isClearable
    />
  );
};

export default Dpicker;
