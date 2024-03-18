import { useState } from "react";
import c from "./AddData.module.css";

const AddData = (p) => {
  const [data, setData] = useState({ date: "", target: 0, real: 0 });
  return (
    <div className={c.container}>
      <div className={c["form-container"]}>
        <div className={c.title}>add {p.title} data</div>
        <form className={c.form}>
          <div className={c.inputD}>
            <h3>choose date:</h3>
            <input type="date" max={new Date()} required />
          </div>
          <div className={c["form-group"]}>
            <div className={c.inputC}>
              <h3>real data:</h3>
              <input
                type="number"
                placeholder="Enter your real data"
                required
                onChange={(e) =>
                  setData((p) => {
                    return { ...p, real: +e.target.value };
                  })
                }
              />
            </div>
            <div className={c.inputC}>
              <h3>target data:</h3>
              <input
                type="number"
                placeholder="Enter your target data"
                required
                onChange={(e) =>
                  setData((p) => {
                    return { ...p, target: +e.target.value };
                  })
                }
              />
            </div>
          </div>
          {data.target > data.real && (
            <div className={c["form-group"]}>
              <div className={c.inputC}>
                <h3>Issue description:</h3>
                <input
                  type="text"
                  placeholder="Enter Issue description"
                  required
                />
              </div>
              <div className={c.inputC}>
                <h3>Causes:</h3>
                <input
                  type="text"
                  placeholder="Enter Causes"
                  required
                />
              </div>
              <div className={c.inputC}>
                <h3>Contermeasures:</h3>
                <input
                  type="text"
                  placeholder="Enter Contermeasures"
                  required
                />
              </div>
              <div className={c.inputC}>
                <h3>Resp:</h3>
                <input
                  type="text"
                  placeholder="Enter Resp"
                  required
                />
              </div>
              <div className={c.inputC}>
                <h3>Due date:</h3>
                <input
                  type="text"
                  placeholder="Enter Due date"
                  required
                />
              </div>
            </div>
          )}
          <button className={c["form-submit-btn"]} type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddData;
