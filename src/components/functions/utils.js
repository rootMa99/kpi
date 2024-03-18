

export const getMonthAndYear=()=>{
    const today = new Date();
const currentMonth = today.toLocaleString('default', { month: 'long' });
const currentYear = today.getFullYear();
return `${currentMonth}-${currentYear}`
}
export const getOnlyDay=data=>{
    const rd=[];
    data.forEach(e => {
        rd.push({
            day:+(e.date.split("-")[2]),
            data:e.deliveryModels
        })
    });
    
    return rd.sort((a, b) => a.day - b.day);
}
export const filterBydataName=(data, dataName)=>{
    const rd=[];
    data.forEach(e=>{
        rd.push({
            day:e.day,
            data:e.data.filter(f=>f.nameData===dataName)
        })
    })
    return rd;
}