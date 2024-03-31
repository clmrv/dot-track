import { DateTime } from "luxon";
import { DATE_FORMAT, getDaysList } from "../utils/dateUtils";

const WeekTable = () => {
  const week = getDaysList(DateTime.now(), "week");

  return (
    <table>
      <thead>
        <tr>
          {week.map((date) => (
            <th key={date.toFormat(DATE_FORMAT)}>
              <div>{date.toFormat("ccc")}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {week.map((date) => (
            <td
              key={date.toFormat(DATE_FORMAT)}
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                width: "2.5rem",
                height: "2.5rem",
              }}
            ></td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default WeekTable;
