import React, { useState } from "react";
import c from "./AddData.module.css";
import Select from "react-select";
import api from "../../service/api";
const dataOp = [{ value: "action assigned", label: "action assigned" }];

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
  const [data, setData] = useState({ date: "", target: 0, real: 0 });
const onSubmitHandeler=async e=>{
  e.preventDefault();
  let fullPath;
  switch (p.title) {
    case "delivery":
        fullPath="addDelivery";;
      break;
    case "inventory":
        fullPath="addInventory";
      break;
    case "kaizen":
        fullPath="addKaizen";
      break;
    case "productivity":
      fullPath="addProductivity";
      break;
    case "quality":
      fullPath="addQuality";
      break;
    case "safety":
      fullPath="addSafety";
      break;
    case "skills":
      fullPath="addSafety";
      break;
  default:
      
  }
  try {
    const response = await fetch(`${api}/${fullPath}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${isLoged.token}`,
      },
      body: JSON.stringify(data),
    });

    const datar = await response.json();
  console.Console(datar);

  } catch (error) {
    console.error("Error:", error);
  }
}
  return (
    <div className={c.container}>
      <div className={c["form-container"]}>
        <div className={c.title}>add {p.title} data</div>
        <form className={c.form} onSubmit={onSubmitHandeler}>
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
            <React.Fragment>
              <h3 className={c.titleAP}>
                waring: YOU MUST ENTER AN ACTION PLAN
              </h3>
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
                  <input type="text" placeholder="Enter Causes" required />
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
                  <input type="text" placeholder="Enter Resp" required />
                </div>
                <div className={c.inputC}>
                  <h3>Due date:</h3>
                  <input type="date" required />
                </div>
                <div className={c.inputC}>
                  <h3>Starus:</h3>
                  <Select options={dataOp} styles={customStyles}/>
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
