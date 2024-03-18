export const getMonthAndYear = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();
  return `${currentMonth}-${currentYear}`;
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
export const colorDays=(data, dayC)=>{
    const day= new Date().toISOString().split("-")[2].split("T")[0];
    if(dayC>day){
        return {};
    }
    const index= data.findIndex(f=>f.day===dayC);
    if(index===-1){
        return {"backgroundColor":"blue"}
    }else{
        if(data[index].data[0].real>data[index].data[0].target){
            return {"backgroundColor":"green"}
        }else{
            return {"backgroundColor":"red"}
        }
    }
}