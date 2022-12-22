import {getStringPeriod} from "./StringPeriod"


describe('Test for Funciones',()=>{

  test("Given 202201 then return Ene-2022", ()=>{
    const cad= getStringPeriod("202201")
    expect(cad).toEqual("Ene-2022")
  })

  test("Given 202202 then return Feb-2022", ()=>{
    const cad= getStringPeriod("202202")
    expect(cad).toEqual("Feb-2022")
  })


})
