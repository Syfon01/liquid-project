import React, { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DatePicker = () => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // const scroll = {
  //   enabled : true
  // }
  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

 return (
   <div className="calendarWrap">
     <input
       value={`${format(range[0].startDate, "MMM dd, yyyy")} - ${format(
         range[0].endDate, 
         "MMM dd, yyyy"
       )}`}
       readOnly
       className="text-center inputBox md:w-52"
       onClick={() => setOpen((open) => !open)}
     />

     <div ref={refOne}>
       {open && (
         <DateRangePicker
           onChange={(item) => setRange([item.selection])}
           editableDateInputs={true}
           moveRangeOnFirstSelection={false}
           ranges={range}
           months={2}
           direction="horizontal"
           className="calendarElement"
          //  scroll={scroll}
         />
       )}
     </div>
   </div>
 );
};

export default DatePicker;
