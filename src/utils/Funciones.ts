export type Vale = {
  nroVale: string
  idVale: string
  dni: string
  idDJ: string
  periodo: string
  fcaducidad: string
  tipoGen:string
  idEmpresa: string
}

export interface ValesG
  {periodo: string
    items: Vale[]
  }

export function groupArrayByPeriod (arr:Vale[]): ValesG[]
{
  let gVales: ValesG[] = []
  let eGVale: ValesG
  let anterior: string
  anterior = arr[0].periodo
  eGVale = { periodo: anterior, items:[]}
  arr.forEach((vale, index)=>{
    if (anterior === vale.periodo){
      eGVale.items.push(vale)
    }else {
      gVales.push(eGVale)
      eGVale = { periodo: vale.periodo, items:[]}
      eGVale.items.push(vale)
      anterior = vale.periodo
    }
    if (index == arr.length-1)
      gVales.push(eGVale)


  })
  return gVales
};
