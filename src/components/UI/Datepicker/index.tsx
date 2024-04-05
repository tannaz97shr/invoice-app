import { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import { IOptions } from "tailwind-datepicker-react/types/Options";
import { IconCalendar } from "../Icons";

interface DropdownProps {
  //   options: IDropdownOption[];
  //   initialValue: IDropdownOption;
  label: string;
  className?: string;
}

const DatePicker = ({
  //   options,
  //   initialValue,
  label,
  className,
}: DropdownProps) => {
  const options: IOptions = {
    title: "Demo Title",
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: " absolute top-full mx-auto",
    defaultDate: new Date("2022-01-01"),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  };

  const [show, setShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const handleChange = (selectedDate: Date) => {
    setSelectedDate(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <div className={`relative ${className}`}>
      <span
        className=" capitalize text-ship-cove font-medium text-sm
      dark:text-selago"
      >
        {label}
      </span>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      >
        <div
          className=" flex items-center justify-between border border-selago py-4 px-5 text-base rounded mt-2 font-bold text-vulcan 
        focus-visible:outline-offset-1 focus-visible:outline-heliotrope
        dark:bg-mirage dark:text-white dark:focus-visible:outline-none dark:border-ebony-clay
          focus:border-blue-cornflowe"
        >
          <input
            type="text"
            className=" w-full h-full border-none focus:outline-none focus:shadow-none focus:ring-0"
            placeholder="Select Date"
            value={selectedDate?.toDateString()}
            onFocus={() => setShow(true)}
            readOnly
          />
          <div className="...">
            <IconCalendar />
          </div>
        </div>
      </Datepicker>
    </div>
  );
};

export default DatePicker;
