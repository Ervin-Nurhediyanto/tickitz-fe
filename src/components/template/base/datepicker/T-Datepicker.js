import React, { useState  } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerTool (props) {
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date) => {
    setStartDate(date)
    props.selectDate(date)
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => handleChange(date)}
      className={props.class}
    />
  )
}

export default DatePickerTool
