export function convertHoursToMinutes(time: string) {
  if(time.length === 1 || time.length === 2){
    return (Number(time) * 60).toString();
  }else{
    const arrTime = time.split(':');
    const [ first, second ] = arrTime    
  
    return Number(first) * 60 + Number(second).toString();;
  }
}