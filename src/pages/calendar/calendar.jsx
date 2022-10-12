import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import Header from "../../layouts/header/header.jsx";
import Main from "../../layouts/main/main.jsx";
import Footer from "../../layouts/footer/footer.jsx";
// component created with
// https://www.section.io/engineering-education/build-react-calendar-library/
const Calendarus = () => {
  const [date, setDate] = useState(new Date());
  const CalendarApp = () => {
    return (
      <div className="calendarApp">
        <h2 className="calendarHeader">Next events</h2>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <div className="text-center">Selected date: {date.toDateString()}</div>
      </div>
    );
  };
  return (
    <div>
      <Header />
      <Main dynamicComponent={CalendarApp()} />

      <Footer />
    </div>
  );
};

export default Calendarus;
