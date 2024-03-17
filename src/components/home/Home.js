import Ttable from "../alphabet/Ttable";
import Stable from "../alphabet/Stable";
import Qletter from "../alphabet/Qletter";
import Dtable from "../alphabet/Dtable";
import Itable from "../alphabet/Itable";
import Ptable from "../alphabet/Ptable";
import Ktable from "../alphabet/Ktable";
import Details from "./Details";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import c from "./Home.module.css";
import React, { useRef, useState } from "react";
import { getMonthAndYear } from "../functions/utils";

const Home = (p) => {
  const [show, setShow] = useState({ show: false, title: "" });
  const [selectedDate, setSelectedDate] = useState(getMonthAndYear());
  const scrollRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const clickHandler = (e, t) => {
    setShow({ show: false, title: "" });
    setTimeout(() => setShow({ show: true, title: t }), 5);
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div className={c.datePicker}>
      <label>PICK A DATE</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          showFullMonthYearPicker
          className={c["custom-datepicker"]}
        />
      </div>
      <div className={c.head}>
        <div className={c.wrapAl} onClick={(e) => clickHandler(e, "safety")}>
          <div className={c.title}>
            <div className={c.line}></div>
            <h3>Safety</h3>
          </div>
          <div className={c.alphabetH}>
            <Ttable />
          </div>
        </div>
        <div className={c.wrapAl} onClick={(e) => clickHandler(e, "skills")}>
          <div className={c.title}>
            <div className={c.line}></div>
            <h3>Skills</h3>
          </div>
          <div className={c.alphabetH}>
            <Stable />
          </div>
        </div>
        <div className={c.wrapAl} onClick={(e) => clickHandler(e, "quality")}>
          <div className={c.title}>
            <div className={c.line}></div>
            <h3>quality</h3>
          </div>
          <div className={c.alphabetH}>
            <Qletter />
          </div>
        </div>
        <div className={c.wrapAl} onClick={(e) => clickHandler(e, "delivery")}>
          <div className={c.title}>
            <div className={c.line}></div>
            <h3>delivery</h3>
          </div>
          <div className={c.alphabetH}>
            <Dtable />
          </div>
        </div>
        <div className={c.wrapAl} onClick={(e) => clickHandler(e, "inventory")}>
          <div className={c.title}>
            <div className={c.line}></div>
            <h3>inventory</h3>
          </div>
          <div className={c.alphabetH}>
            <Itable />
          </div>
        </div>
        <div
          className={c.wrapAl}
          onClick={(e) => clickHandler(e, "productivity")}
        >
          <div className={c.title}>
            <div className={c.line}></div>
            <h3>productivity</h3>
          </div>
          <div className={c.alphabetH}>
            <Ptable />
          </div>
        </div>
        <div className={c.wrapAl} onClick={(e) => clickHandler(e, "kaizen")}>
          <div className={c.title}>
            <div className={c.line}></div>
            <h3>kaizen</h3>
          </div>
          <div className={c.alphabetH}>
            <Ktable />
          </div>
        </div>
      </div>
      <div ref={scrollRef} style={{ minHeight: "30rem" }}>
        {show.show && <Details title={show.title} />}
      </div>
    </React.Fragment>
  );
};
export default Home;
