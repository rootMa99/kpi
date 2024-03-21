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
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../store/dataSlice";
import { useLocation } from "react-router";
import AddData from "./AddData";
import Profile from "../UI/Profile";

const Home = (p) => {
  const { kpiOwners } = useSelector((s) => s.data);

  console.log(kpiOwners);
  const [show, setShow] = useState({ show: false, title: "" });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const scrollRef = useRef(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const safety = kpiOwners.findIndex((f) => f.kpiOwn === "safety");
  const skills = kpiOwners.findIndex((f) => f.kpiOwn === "skills");
  const productivity = kpiOwners.findIndex((f) => f.kpiOwn === "productivity");
  const delivery = kpiOwners.findIndex((f) => f.kpiOwn === "delivery");
  const quality = kpiOwners.findIndex((f) => f.kpiOwn === "quality");
  const inventory = kpiOwners.findIndex((f) => f.kpiOwn === "inventory");
  const kaizen = kpiOwners.findIndex((f) => f.kpiOwn === "kaizen");

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
      <h1 className={c.topTitle}>
        {" "}
        <span></span> daily performance management{" "}
      </h1>
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
        <div className={c.ndiv} style={{ width: "28%" }}>
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
        <div className={c.ndiv} style={{ width: "56%" }}>
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
        <div className={c.ndiv} style={{ width: "14%" }}>
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
        {!show.show && (
          <div className={c.wrapm}>
            <div className={c.config}>
              <Profile
                urlI={safety !== -1 ? kpiOwners[safety].uri : ""}
                name={safety !== -1 ? kpiOwners[safety].name : "N/A"}
                coName={safety !== -1 ? kpiOwners[safety].coName : "N/A"}
                kpiOwn="safety"
                path={currentPath}
              />
              <Details title="safety" home={true} />
            </div>
            <div className={c.config}>
              <Profile
                urlI={skills !== -1 ? kpiOwners[skills].uri : ""}
                name={skills !== -1 ? kpiOwners[skills].name : "N/A"}
                coName={skills !== -1 ? kpiOwners[skills].coName : "N/A"}
                kpiOwn="skills"
                path={currentPath}
              />

              <Details title="skills" home={true} />
            </div>
            <div className={c.config}>
              <Profile
                urlI={quality !== -1 ? kpiOwners[quality].uri : ""}
                name={quality !== -1 ? kpiOwners[quality].name : "N/A"}
                coName={quality !== -1 ? kpiOwners[quality].coName : "N/A"}
                kpiOwn="quality"
                path={currentPath}
              />

              <Details title="quality" home={true} />
            </div>
            <div className={c.config}>
              <Profile
                urlI={delivery !== -1 ? kpiOwners[delivery].uri : ""}
                name={delivery !== -1 ? kpiOwners[delivery].name : "N/A"}
                coName={delivery !== -1 ? kpiOwners[delivery].coName : "N/A"}
                kpiOwn="delivery"
                path={currentPath}
              />

              <Details title="delivery" home={true} />
            </div>
            <div className={c.config}>
              <Profile
                urlI={inventory !== -1 ? kpiOwners[inventory].uri : ""}
                name={inventory !== -1 ? kpiOwners[inventory].name : "N/A"}
                coName={inventory !== -1 ? kpiOwners[inventory].coName : "N/A"}
                kpiOwn="inventory"
                path={currentPath}
              />

              <Details title="inventory" home={true} />
            </div>
            <div className={c.config}>
              <Profile
                urlI={productivity !== -1 ? kpiOwners[productivity].uri : ""}
                name={productivity !== -1 ? kpiOwners[productivity].name : "N/A"}
                coName={productivity !== -1 ? kpiOwners[productivity].coName : "N/A"}
                kpiOwn="productivity"
                path={currentPath}
              />

              <Details title="productivity" home={true} />
            </div>
            <div className={c.config}>
              <Profile
                urlI={kaizen !== -1 ? kpiOwners[kaizen].uri : ""}
                name={kaizen !== -1 ? kpiOwners[kaizen].name : "N/A"}
                coName={kaizen !== -1 ? kpiOwners[kaizen].coName : "N/A"}
                kpiOwn="kaizen"
                path={currentPath}
              />

              <Details title="kaizen" home={true} />
            </div>
          </div>
        )}
        {show.show && currentPath !== "/admin" && (
          <Details title={show.title} />
        )}
        {show.show && currentPath === "/admin" && (
          <AddData title={show.title} click={clickHandler} />
        )}
      </div>
    </React.Fragment>
  );
};
export default Home;
