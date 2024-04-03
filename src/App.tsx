import "./App.css";
import WeekTable from "./components/WeekTable";
import MonthTable from "./components/MonthTable";
import { DateTime } from "luxon";

const mockUsers = [
  {
    id: "a",
    name: "blazej",
    color: "#FF0000",
  },
  {
    id: "b",
    name: "dominika",
    color: "#00FFFF",
  },
];

const mockCategories = [
  {
    id: "c1",
    label: "Ironing",
    dots: [
      { userId: "a", date: new Date("2024-04-01") },
      { userId: "a", date: new Date("2024-04-03") },
      { userId: "b", date: new Date("2024-04-02") },
    ],
  },
  {
    id: "c2",
    label: "Dishes",
    dots: [
      { userId: "a", date: new Date("2024-04-03") },
      { userId: "b", date: new Date("2024-04-05") },
      { userId: "b", date: new Date("2024-04-04") },
    ],
  },
];

function App() {
  return (
    <>
      <h2>This week</h2>
      <WeekTable categories={mockCategories} users={mockUsers} />
      <h2>{DateTime.now().monthLong}</h2>
      <MonthTable />
    </>
  );
}

export default App;
