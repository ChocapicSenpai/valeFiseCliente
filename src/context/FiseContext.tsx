import { createContext, ReactNode, useContext, useState } from "react"

type FiseProviderProps = {
  children: ReactNode
}
type Data = {
  telefono: string
  token: string
  codigo?: number
}
type FiseContext = {
  setData: (data: Data)=> void
  data: Data
}

const FiseContext = createContext({} as FiseContext)

export function useFise(){
  return useContext(FiseContext)
}

export function FiseProvider({children}: FiseProviderProps){
  const [data, setData] = useState<Data>({telefono:"", token:"", codigo:0})
  return (
    <FiseContext.Provider value={{setData, data}}>
      {children}
    </FiseContext.Provider>
  )

}
