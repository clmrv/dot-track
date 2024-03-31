import { DateTime } from "luxon";

export const DATE_FORMAT = "dd-MM-yyyy";

export const getDaysList = (date: DateTime, duration: "month" | "week") => {
  let iterator = date.startOf(duration);
  const end = date.endOf(duration);
  const result = [];

  while (iterator <= end) {
    result.push(iterator);
    iterator = iterator.plus({ days: 1 });
  }
  return result;
};
