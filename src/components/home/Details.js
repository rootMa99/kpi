import { useSelector } from "react-redux";
import Charts from "../UI/Charts";
import c from "./Details.module.css";
import { filterBydataName } from "../functions/utils";

const Details = (p) => {
  const {data}= useSelector(s=>s.data);
  const filtredData= filterBydataName(data, p.title);
  console.log(data, filtredData, p.title)
  return (
    <div className={c.container}>
      <div className={c.title}>
        <div className={c.line}></div>
        <h3>{p.title}</h3>
      </div>
      <div className={c.chartH} style={{"marginTop":0}}>
        <Charts title="daily" data={filtredData} />
      </div>
      <div className={c.chartH} >
        <Charts title="monthly" />
      </div>
    </div>
  );
};

export default Details;
