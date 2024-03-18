export const getMonthAndYear = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();
  return `${currentMonth}-${currentYear}`;
};
export const getStartAndEndMonth = (inputDate) => {
  const startOfMonth = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    1
  );
  const startOfMonthFormatted = startOfMonth.toISOString().slice(0, 10);
  const endOfMonth = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth() + 1,
    0
  );
  const endOfMonthFormatted = endOfMonth.toISOString().slice(0, 10);
  return { start: startOfMonthFormatted, end: endOfMonthFormatted };
};
export const getOnlyDay = (data) => {
  const rd = [];
  data.forEach((e) => {
    rd.push({
      day: +e.date.split("-")[2],
      data: e.deliveryModels,
    });
  });

  return rd.sort((a, b) => a.day - b.day);
};
export const filterBydataName = (data, dataName) => {
  const rd = [];
  data.forEach((e) => {
    rd.push({
      day: e.day,
      data: e.data.filter((f) => f.nameData === dataName),
    });
  });
  return rd;
};
export const colorDays = (data, dayC, date) => {
  const today= new Date();
  console.log(today)
  const currentdate = new Date(
    date.getFullYear(),
    date.getMonth(),
    dayC
  );
    console.log(currentdate, date)
  if (currentdate > today) {
    return {};
  }
  const index = data.findIndex((f) => f.day === dayC);
  if (index === -1) {
    return { backgroundColor: "#0720d9" };
  } else {
    if (data[index].data[0].real > data[index].data[0].target) {
      return { backgroundColor: "#006B63" };
    } else {
      return { backgroundColor: "#CF3335" };
    }
  }
};
