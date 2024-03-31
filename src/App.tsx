import "./App.css";
import WeekTable from "./components/WeekTable";
import MonthTable from "./components/MonthTable";
import { DateTime } from "luxon";

function App() {
  return (
    <>
      <h2>This week</h2>
      <WeekTable />
      <h2>{DateTime.now().monthLong}</h2>
      <MonthTable />
    </>
  );
}

export default App;
