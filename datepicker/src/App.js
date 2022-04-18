import React, { useState } from "react";
import DatePicker from "react-date-picker";

import "./App.css";

export default function App() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <div className="datediv">
        <DatePicker
          id="date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DatePicker
          id="date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
}