
const weekdays = [ '0','1','2','3','4','5','6',];

export function convertWeekday(weekday: string){
  switch (weekday) {
    case 'Domingo': return weekdays[0];
    case 'Segunda': return weekdays[1];
    case 'Terça':   return weekdays[2];
    case 'Quarta':  return weekdays[3];
    case 'Quinta':  return weekdays[4];
    case 'Sexta':   return weekdays[5];
    case 'Sábado':  return weekdays[6];

    default: console.log("Erro"); break;
  }

  return weekday;
}