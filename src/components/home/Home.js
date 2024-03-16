import Ttable from "../alphabet/Ttable";
import Stable from "../alphabet/Stable";
import Qletter from "../alphabet/Qletter";
import Dtable from "../alphabet/Dtable";
import Itable from "../alphabet/Itable";
import Ptable from "../alphabet/Ptable";
import Ktable from "../alphabet/Ktable";
import Details from "./Details";
import c from "./Home.module.css";
import React, { useState } from "react";

const Home = (p) => {
  const [show, setShow] = useState({ show: false, title: "" });

  const clickHandler = (e, t) => {
    setShow({ show: false, title: "" })
    setTimeout(()=>setShow({ show: true, title: t }), 5);
  };

  return (
    <React.Fragment>
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
      {
        show.show && <Details title={show.title} />
      }
    </React.Fragment>
  );
};
export default Home;
