import Ttable from "../alphabet/Ttable";
import Stable from "../alphabet/Stable";
import Qletter from "../alphabet/Qletter";
import Dtable from "../alphabet/Dtable";
import Itable from "../alphabet/Itable";
import Ptable from "../alphabet/Ptable";
import Ktable from "../alphabet/Ktable";
import c from "./Home.module.css";

const Home = (p) => {
  return (
    <div className={c.head}>
      <div className={c.wrapAl}>
        <div className={c.title}>
        <div className={c.line}></div>
          <h3>Safety</h3>
        </div>
        <div className={c.alphabetH}>
          <Ttable />
        </div>
      </div>
      <div className={c.wrapAl}>
        <div className={c.title}>
        <div className={c.line}></div>
          <h3>Skills</h3>
        </div>
        <div className={c.alphabetH}>
          <Stable />
        </div>
      </div>
      <div className={c.wrapAl}>
        <div className={c.title}>
        <div className={c.line}></div>
          <h3>quality</h3>
        </div>
        <div className={c.alphabetH}>
          <Qletter />
        </div>
      </div>
      <div className={c.wrapAl}>
        <div className={c.title}>
        <div className={c.line}></div>
          <h3>delivery</h3>
        </div>
        <div className={c.alphabetH}>
          <Dtable />
        </div>
      </div>
      <div className={c.wrapAl}>
        <div className={c.title}>
        <div className={c.line}></div>
          <h3>iventory</h3>
        </div>
        <div className={c.alphabetH}>
          <Itable />
        </div>
      </div>
      <div className={c.wrapAl}>
        <div className={c.title}>
        <div className={c.line}></div>
          <h3>productivity</h3>
        </div>
        <div className={c.alphabetH}>
          <Ptable />
        </div>
      </div>
      <div className={c.wrapAl}>
        <div className={c.title}>
        <div className={c.line}></div>
          <h3>kaizen</h3>
        </div>
        <div className={c.alphabetH}>
          <Ktable />
        </div>
      </div>
    </div>
  );
};
export default Home;
