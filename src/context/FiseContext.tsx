import React, { createContext, ReactNode, useContext, useState } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
type FiseProviderProps = {
  children: ReactNode
}
type Data = {
  telefono: string
  token: string
  codigo?: string
  agente?: string
  tokenIni?: string
}
type FiseContext = {
  setValores: (data: Data)=> void
  data: Data
}

const FiseContext = createContext({} as FiseContext)

export function useFise(){
  return useContext(FiseContext)
}


export function FiseProvider({children}: FiseProviderProps){
  const [token, setToken] = useLocalStorage('token',"")
  const [agente, setAgente] = useLocalStorage('agente',"")
  const [data, setData] = useState<Data>({telefono:"", token:token, codigo:"", agente: agente})


  function setValores(datos:Data){
      if (datos.token){
          setToken(datos.token)
      }
      if (datos.agente){
        setAgente(datos.agente)
      }
      setData(datos)
  }

  return (
    <FiseContext.Provider value={{ data,setValores}}>
      {children}
    </FiseContext.Provider>
  )

}
