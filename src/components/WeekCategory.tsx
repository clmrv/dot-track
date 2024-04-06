import React from "react";
import { Category, User } from "../model";
import { DateTime } from "luxon";
import { DATE_FORMAT } from "../utils/dateUtils";

type CategoryProps = {
  category: Category;
  week: DateTime[];
  users: User[];
};
const WeekCategory: React.FC<CategoryProps> = ({ category, week, users }) => {
  return (
    <>
      <th>{category.label}</th>
      {week.map((date) => {
        const dotAtDate = category.dots.find((dot) =>
          date.hasSame(DateTime.fromJSDate(dot.date), "day")
        );
        const dotAtDateUser = users.find(
          (user) => user.id === dotAtDate?.userId
        );
        return (
          <td
            key={date.toFormat(DATE_FORMAT)}
            style={{
              backgroundColor: "rgba(255,255,255,0.05)",
              color: dotAtDateUser?.color,
            }}
          >
            {dotAtDate ? "⏺" : ""}
          </td>
        );
      })}
    </>
  );
};

export default WeekCategory;
