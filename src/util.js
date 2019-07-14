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
/**
 * 오늘 날짜(년,월,일,시,분,초) 반환해주는 함수
 */
export const todayString = () => {
  const today = new Date();
  return {
    year: String(today.getFullYear()),
    month: String(today.getMonth()),
    date: String(today.getDate()),
    hour: String(today.getHours()),
    minute: String(today.getMinutes()),
    second: String(today.getSeconds())
  };
};
