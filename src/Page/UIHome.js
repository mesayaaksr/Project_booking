import React, { useEffect, useRef, useState } from "react";
import "./UIHome.css";
import "hotel-datepicker/dist/css/hotel-datepicker.css";
import HotelDatepicker from "hotel-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";

const UIHome = () => {
  const inputRef = useRef(null);
  const [isDatePickerReady, setDatePickerReady] = useState(false);
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });
  const [formVisible, setFormVisible] = useState(false);

  const updateDates = (dateRangeString) => {
    const datesArray = dateRangeString.split(" - ");
    if (datesArray.length === 2) {
      const [checkIn, checkOut] = datesArray;
      setDates({ checkIn, checkOut });
      setFormVisible(true);
    }
  };

  useEffect(() => {
    if (isDatePickerReady) {
      const input = inputRef.current;
      let datepicker;
      if (input) {
        datepicker = new HotelDatepicker(input, {
          format: "ddd, D MMM",
          i18n: {
            selected: "Your stay:",
            night: "Night",
            nights: "Nights",
            button: "Close",
            clearButton: "Clear",
            submitButton: "Submit",
            "checkin-disabled": "Check-in disabled",
            "checkout-disabled": "Check-out disabled",
            "day-names-short": [
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
            ],
            "day-names": [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            "month-names-short": [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            "month-names": [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            "error-more": "Date range should not be more than 1 night",
            "error-more-plural": "Date range should not be more than %d nights",
            "error-less": "Date range should not be less than 1 night",
            "error-less-plural": "Date range should not be less than %d nights",
            "info-more": "Please select a date range of at least 1 night",
            "info-more-plural":
              "Please select a date range of at least %d nights",
            "info-range": "Please select a date range between %d and %d nights",
            "info-range-equal": "Please select a date range of %d nights",
            "info-default": "Please select a date range",
            "aria-application": "Calendar",
            "aria-selected-checkin": "Selected as check-in date, %s",
            "aria-selected-checkout": "Selected as check-out date, %s",
            "aria-selected": "Selected, %s",
            "aria-disabled": "Not available, %s",
            "aria-choose-checkin": "Choose %s as your check-in date",
            "aria-choose-checkout": "Choose %s as your check-out date",
            "aria-prev-month": "Move backward to switch to the previous month",
            "aria-next-month": "Move forward to switch to the next month",
            "aria-close-button": "Close the datepicker",
            "aria-clear-button": "Clear the selected dates",
            "aria-submit-button": "Submit the form",
          },
          onSelectRange: function () {
            const newDate = datepicker.getValue();
            updateDates(newDate);
          },
        });
      }

      return () => {
        if (datepicker) {
          datepicker.destroy();
        }
      };
    }
  }, [isDatePickerReady]);

  useEffect(() => {
    setDatePickerReady(true);
  }, []);

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url("https://imageio.forbes.com/specials-images/imageserve/65280003a36cd6aea36f399a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds")`,
      }}
    >
      <div className="search-container">
        <h1>Welcome to the Booking Page</h1>
        <div className="datepicker-container">
          <input ref={inputRef} className="datepicker-input" />

          <FaRegCalendarAlt size={25} />
        </div>
        {formVisible && (
          <div className="booking-form">
            <h2>Travel booking form</h2>
            <p>
              {dates.checkIn} - {dates.checkOut}
            </p>

            <form>
              <label>
                Name *
                <input type="text" name="name" required />
              </label>
              <label>
                Phone *
                <input type="tel" name="phone" required />
              </label>
              <label>
                Email *
                <input type="email" name="email" required />
              </label>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UIHome;
