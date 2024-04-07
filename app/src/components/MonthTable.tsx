import { DateTime } from "luxon";
import { DATE_FORMAT, getDaysList } from "../utils/dateUtils";

const fillForFullWeeks = (days: DateTime[]) => {
  const result = [...days];

  const startWeekday = result[0].startOf("week");
  while (!result[0].hasSame(startWeekday, "day")) {
    result.unshift(result[0].minus({ days: 1 }));
  }

  const endWeekday = days[days.length - 1].endOf("week");
  while (!result[result.length - 1].hasSame(endWeekday, "day")) {
    result.push(result[result.length - 1].plus({ days: 1 }));
  }

  return result;
};

const groupPerWeek = (days: DateTime[]) =>
  days.reduce((acc, day) => {
    const currentWeek = acc[acc.length - 1]?.[0]?.weekNumber;
    if (currentWeek === undefined || currentWeek !== day.weekNumber) {
      acc.push([day]);
    } else {
      acc[acc.length - 1].push(day);
    }
    return acc;
  }, [] as DateTime[][]);

const MonthTable = () => {
  const daysInMonth = getDaysList(DateTime.now(), "month");
  const daysInFullWeeks = fillForFullWeeks(daysInMonth);
  const daysPerWeek = groupPerWeek(daysInFullWeeks);
  return (
    <table>
      <tbody>
        {daysPerWeek.map((week) => (
          <tr key={`week-${week[0].toFormat(DATE_FORMAT)}`}>
            {week.map((date) => (
              <td
                key={date.toFormat(DATE_FORMAT)}
                style={{
                  backgroundColor: `rgba(255,255,255,${
                    date.month === daysInMonth[0].month ? "0.05" : "0.025"
                  })`,
                }}
              ></td>
            ))}
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
};

export default MonthTable;
