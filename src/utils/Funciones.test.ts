import {groupArrayByPeriod, Vale, isNumber} from "./Funciones"

describe('Test for Funciones',()=>{

  test("Given one item into an array then should return only one group", ()=>{
    const vales:Vale[] = [{nroVale: "1", idVale: "1", dni: "23", periodo: "202204", fcaducidad:"21/12/2024", tipoGen: "A", idEmpresa:"3", idDJ:"23"}]
    const grupos = groupArrayByPeriod(vales)
   expect(grupos.length).toEqual(1)
  })

  test("Given two items with the same period then should return one grouped item", ()=>{
    const vales:Vale[] = [
      {
        nroVale: "1",
        idVale: "1",
        dni: "23",
        periodo: "202204",
        fcaducidad:"21/12/2024",
        tipoGen: "A",
        idEmpresa:"3",
        idDJ:"23"
    },
    {
      nroVale: "2",
      idVale: "2",
      dni: "233",
      periodo: "202204",
      fcaducidad:"27/12/2024",
      tipoGen: "A",
      idEmpresa:"3",
      idDJ:"23"
  }
  ]
    const grupos = groupArrayByPeriod(vales)
   expect(grupos.length).toEqual(1)
   expect(grupos[0].items.length).toEqual(2)
  })

  test("Given two items with diferent period then should return two grouped item", ()=>{
    const vales:Vale[] = [
      {
        nroVale: "1",
        idVale: "1",
        dni: "23",
        periodo: "202204",
        fcaducidad:"21/12/2024",
        tipoGen: "A",
        idEmpresa:"3",
        idDJ:"23"
    },
    {
      nroVale: "2",
      idVale: "2",
      dni: "233",
      periodo: "202205",
      fcaducidad:"27/12/2024",
      tipoGen: "A",
      idEmpresa:"3",
      idDJ:"23"
  }
  ]
    const grupos = groupArrayByPeriod(vales)
   expect(grupos.length).toEqual(2)
   expect(grupos[0].items.length).toEqual(1)
  })

  test("Given three items with diferent period then should return two grouped item", ()=>{
    const vales:Vale[] = [
      {
        nroVale: "1",
        idVale: "1",
        dni: "23",
        periodo: "202204",
        fcaducidad:"21/12/2024",
        tipoGen: "A",
        idEmpresa:"3",
        idDJ:"23"
    },
    {
      nroVale: "2",
      idVale: "2",
      dni: "233",
      periodo: "202204",
      fcaducidad:"27/12/2024",
      tipoGen: "A",
      idEmpresa:"3",
      idDJ:"23"
  },
  {
    nroVale: "3",
    idVale: "3",
    dni: "2334",
    periodo: "202205",
    fcaducidad:"27/10/2024",
    tipoGen: "A",
    idEmpresa:"3",
    idDJ:"233"
}
  ]
    const grupos = groupArrayByPeriod(vales)
   expect(grupos.length).toEqual(2)
   expect(grupos[0].items.length).toEqual(2)
  })

test("Given a char a then should return false",()=>{

  expect(isNumber('a')).toBe(false)
})

test("Given a char 8 then should return true",()=>{
  expect(isNumber('8')).toBe(true)
})

})
