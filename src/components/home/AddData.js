import React, { useState } from "react";
import c from "./AddData.module.css";
import Select from "react-select";
import api from "../../service/api";
const dataOp = [
  { value: "action assigned", label: "action assigned" },
  { value: "action started", label: "action started" },
  { value: "action complete", label: "action complete" },
  { value: "rc fix confirmed", label: "rc fix confirmed" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    padding: "4px 20px",
    fontWeight: "600",
    textTransform: "uppercase",
    borderRadius: "5px",
    letterSpacing: "2px",
    textAlign: "left",
    outline: "none",
    border: "1px solid #ccc",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #f84018",
      cursor: "pointer",
    },
  }),
  option: (provided, state) => ({
    width: "100%",
    padding: "0.5rem",
    color: state.isFocused ? "#f3f3f3" : "#474b4d",
    backgroundColor: state.isFocused && "#474b4d",
    fontFamily: `Formular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
              "Segoe UI Symbol"`,
    textTransform: "uppercase",
    outline: "none",
    "&:hover": {
      cursor: "pointer",
    },
  }),
  input: (provided) => ({
    ...provided,
    color: "#f3f3f3",
  }),
  singleValue: (p) => ({
    ...p,
    color: "#f3f3f3",
  }),
  menuList: (provided) => ({
    maxHeight: "350px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "thin",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      width: "9px",
      backgroundColor: "#535151",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#8a0101",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
  }),
};

const AddData = (p) => {
  const [data, setData] = useState({
    date: "",
    target: 0,
    real: 0,
    apm: null,
    paretoModels: null,
  });
  const [apm, setApm] = useState({
    issueDescription: "",
    causes: "",
    contermeasures: "",
    resp: "",
    dueDate: "",
    status: "",
  });
  const [pareto, setParetp] = useState([{ motif: "", percentage: "" }]);
  const onSubmitHandeler = async (e) => {
    e.preventDefault();
    let body = data;
    if (
      (data.target > data.real && p.title !== "safety") ||
      (data.target < data.real && p.title === "safety")
    ) {
      body.apm = apm;
      body.paretoModels = pareto;
    }
    let fullPath;
    switch (p.title) {
      case "delivery":
        fullPath = "addDelivery";
        break;
      case "inventory":
        fullPath = "addInventory";
        break;
      case "kaizen":
        fullPath = "addKaizen";
        break;
      case "productivity":
        fullPath = "addProductivity";
        break;
      case "quality":
        fullPath = "addQuality";
        break;
      case "safety":
        fullPath = "addSafety";
        break;
      case "skills":
        fullPath = "addSkills";
        break;
      default:
    }
    try {
      // const response = await fetch(`${api}/${fullPath}`, {
      await fetch(`${api}/${fullPath}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${isLoged.token}`,
        },
        body: JSON.stringify(body),
      });

      // const datar = await response.json();
      // console.Console(datar);
      p.click(e, p.title);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(pareto);
  return (
    <div className={c.container}>
      <div className={c["form-container"]}>
        <div className={c.title}>add {p.title} data</div>
        <form className={c.form} onSubmit={onSubmitHandeler}>
          <div className={c.inputD}>
            <h3>choose date:</h3>
            <input
              type="date"
              required
              onChange={(e) =>
                setData((p) => {
                  return { ...p, date: e.target.value };
                })
              }
            />
          </div>
          <div className={c["form-group"]}>
            <div className={c.inputC}>
              <h3>real data:</h3>
              <input
                type="number"
                placeholder="Enter your real data"
                step="0.01"
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
                step="0.01"
                required
                onChange={(e) =>
                  setData((p) => {
                    return { ...p, target: +e.target.value };
                  })
                }
              />
            </div>
          </div>
          {((data.target > data.real && p.tit !== "rev") ||
            (data.target < data.real && p.tit === "rev")) && (
            <React.Fragment>
              <h3 className={c.titleAP}>
                waring: YOU MUST ENTER AN Pareto And ACTION PLAN
              </h3>
              <React.Fragment>
                {pareto.map((m, i) => (
                  <div className={c["form-group"]} key={i}>
                    <div className={c.inputC}>
                      <h3>motif:</h3>
                      <input
                        type="text"
                        placeholder="Enter Motif"
                        value={m.motif}
                        onChange={(e) => {
                          const newPareto = [...pareto];
                          newPareto[i].motif = e.target.value;
                          setParetp(newPareto);
                        }}
                        required
                      />
                    </div>
                    <div className={c.inputC}>
                      <h3>percentage:</h3>
                      <input
                        type="number"
                        placeholder="Enter Percentage"
                        step="0.01"
                        max={100}
                        value={m.percentage}
                        onChange={(e) => {
                          const newPareto = [...pareto];
                          newPareto[i].percentage = +e.target.value;
                          setParetp(newPareto);
                        }}
                        required
                      />
                    </div>
                  </div>
                ))}
                <h4
                  onClick={(e) =>
                    setParetp((p) => [...p, { motif: "", percentage: 0 }])
                  }
                  className={c.addP}
                >
                  add pareto
                </h4>
              </React.Fragment>

              <div className={c["form-group"]}>
                <div className={c.inputC}>
                  <h3>Issue description:</h3>
                  <input
                    type="text"
                    placeholder="Enter Issue description"
                    onChange={(e) =>
                      setApm((p) => {
                        return { ...p, issueDescription: e.target.value };
                      })
                    }
                    required
                  />
                </div>
                <div className={c.inputC}>
                  <h3>Causes:</h3>
                  <input
                    type="text"
                    placeholder="Enter Causes"
                    required
                    onChange={(e) =>
                      setApm((p) => {
                        return { ...p, causes: e.target.value };
                      })
                    }
                  />
                </div>
                <div className={c.inputC}>
                  <h3>Contermeasures:</h3>
                  <input
                    type="text"
                    placeholder="Enter Contermeasures"
                    required
                    onChange={(e) =>
                      setApm((p) => {
                        return { ...p, contermeasures: e.target.value };
                      })
                    }
                  />
                </div>
                <div className={c.inputC}>
                  <h3>Resp:</h3>
                  <input
                    type="text"
                    placeholder="Enter Resp"
                    required
                    onChange={(e) =>
                      setApm((p) => {
                        return { ...p, resp: e.target.value };
                      })
                    }
                  />
                </div>
                <div className={c.inputC}>
                  <h3>Due date:</h3>
                  <input
                    type="date"
                    required
                    onChange={(e) =>
                      setApm((p) => {
                        return { ...p, dueDate: e.target.value };
                      })
                    }
                  />
                </div>
                <div className={c.inputC}>
                  <h3>Status:</h3>
                  <Select
                    options={dataOp}
                    styles={customStyles}
                    onChange={(e) =>
                      setApm((p) => {
                        return { ...p, status: e.value };
                      })
                    }
                  />
                </div>
              </div>
            </React.Fragment>
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
