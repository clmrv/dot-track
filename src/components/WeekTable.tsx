import { DateTime } from "luxon";
import { DATE_FORMAT, getDaysList } from "../utils/dateUtils";
import { Category, User } from "../model";

type WeekProps = {
  categories: Category[];
  users: User[];
};
const WeekTable: React.FC<WeekProps> = (props) => {
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
        {props.categories.map((category) => (
          <tr key={category.id}>
            {week.map((date) => {
              const dotAtDate = category.dots.find((dot) =>
                date.hasSame(DateTime.fromJSDate(dot.date), "day")
              );
              const dotAtDateUser = props.users.find(
                (user) => user.id === dotAtDate?.userId
              );
              return (
                <td
                  key={date.toFormat(DATE_FORMAT)}
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    width: "2.5rem",
                    height: "2.5rem",
                    color: dotAtDateUser?.color,
                  }}
                >
                  {dotAtDate ? "⏺" : ""}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeekTable;
