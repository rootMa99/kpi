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
import { getStartAndEndMonth } from "../functions/utils";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/dataSlice";
import { useLocation } from "react-router";
import AddData from "./AddData";

const Home = (p) => {
  const [show, setShow] = useState({ show: false, title: "" });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    dispatch(dataActions.setTime(getStartAndEndMonth(date)));
  };
  const clickHandler = (e, t) => {
    setShow({ show: false, title: "" });
    setTimeout(() => setShow({ show: true, title: t }), 5);
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log(selectedDate);
  return (
    <React.Fragment>
    <h1 className={c.topTitle}> <span></span> daily performance management </h1>
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
        <div className={c.ndiv} style={{"border":"none"}}>
          <h1>people</h1>
          <div className={c.wrapAl} onClick={(e) => clickHandler(e, "safety")}>
            <div className={c.title}>
              <div className={c.line}></div>
              <h3>Safety</h3>
            </div>
            <div className={c.alphabetH}>
              <Ttable date={selectedDate} />
            </div>
          </div>
          <div className={c.wrapAl} onClick={(e) => clickHandler(e, "skills")}>
            <div className={c.title}>
              <div className={c.line}></div>
              <h3>Skills</h3>
            </div>
            <div className={c.alphabetH}>
              <Stable date={selectedDate} />
            </div>
          </div>
        </div>
        <div className={c.ndiv}>
        <h1>performance</h1>
          <div className={c.wrapAl} onClick={(e) => clickHandler(e, "quality")}>
            <div className={c.title}>
              <div className={c.line}></div>
              <h3>quality</h3>
            </div>
            <div className={c.alphabetH}>
              <Qletter date={selectedDate} />
            </div>
          </div>
          <div
            className={c.wrapAl}
            onClick={(e) => clickHandler(e, "delivery")}
          >
            <div className={c.title}>
              <div className={c.line}></div>
              <h3>delivery</h3>
            </div>
            <div className={c.alphabetH}>
              <Dtable date={selectedDate} />
            </div>
          </div>
          <div
            className={c.wrapAl}
            onClick={(e) => clickHandler(e, "inventory")}
          >
            <div className={c.title}>
              <div className={c.line}></div>
              <h3>inventory</h3>
            </div>
            <div className={c.alphabetH}>
              <Itable date={selectedDate} />
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
              <Ptable date={selectedDate} />
            </div>
          </div>
        </div>
        <div className={c.ndiv}>
        <h1>improvement</h1>
          <div className={c.wrapAl} onClick={(e) => clickHandler(e, "kaizen")}>
            <div className={c.title}>
              <div className={c.line}></div>
              <h3>kaizen</h3>
            </div>
            <div className={c.alphabetH}>
              <Ktable date={selectedDate} />
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollRef} style={{ minHeight: "30rem" }}>
        {(show.show && currentPath!=="/admin") && <Details title={show.title} />}
        {(show.show && currentPath==="/admin") && <AddData title={show.title} />}
      </div>
    </React.Fragment>
  );
};
export default Home;
