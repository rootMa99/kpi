import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NavBar from "./components/UI/NavBar";
import Home from "./components/home/Home";
import { useCallback, useEffect } from "react";
import api from "./service/api";
import { dataActions } from "./components/store/dataSlice";
import { filterBydataName, getOnlyDay } from "./components/functions/utils";

function App() {
  const {date}= useSelector(s=>s.data);
  const dispatch=useDispatch();

  const callback=useCallback(async ()=>{
    try {
      const response = await fetch(`${api}/dataBetween?startDate=${date.start}&endDate=${date.end}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data, filterBydataName(getOnlyDay(data), "inventory"));
      dispatch(
        dataActions.addData(getOnlyDay(data))
      );
    } catch (error) {
      console.error("Error:", error);
    }
  }, [dispatch, date.start, date.end])

useEffect(()=>{
  callback();
}, [callback])

  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
