import { DateTime } from "luxon";
import { DATE_FORMAT, getDaysList } from "../utils/dateUtils";
import { Category, User } from "../model";
import WeekCategory from "./WeekCategory";

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
          <th></th>
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
            <WeekCategory category={category} week={week} users={props.users} />
          </tr>
        ))}
        <tr>
          <td colSpan={8} style={{ color: "gray", cursor: "pointer" }}>
            ＋ New category
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeekTable;
