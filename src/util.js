export const convertDateToString = date => {
  console.log(typeof date, date);
  if (typeof date === "string") {
    const year = date.substring(0,4)
    const month = date.substr(5, 2) + 1;
    const day = date.substr(7, 2);
    const date = new Date(year, month, day);
    console.log(date);
    return date;
  }
};
