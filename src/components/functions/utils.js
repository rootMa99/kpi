

export const getMonthAndYear=()=>{
    const today = new Date();
const currentMonth = today.toLocaleString('default', { month: 'long' });
const currentYear = today.getFullYear();
return `${currentMonth}-${currentYear}`
}