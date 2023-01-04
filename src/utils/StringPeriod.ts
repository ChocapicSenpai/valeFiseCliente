export function getStringPeriod(periodo: string):string{
  const year = periodo.substring(0,4)

  const meses = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct", "Nov","Dic"]
  try{

    const month = Number(periodo.substring(4))
    if (month>12 || month < 0 || month == undefined){
      return ""
    }
    return `${meses[month-1]}-${year}`
  } catch(error){
    return ""
  }

}
