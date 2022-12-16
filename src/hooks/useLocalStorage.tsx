import { useEffect, useState } from "react"

type SetValueState = React.Dispatch<React.SetStateAction<string>>

function getStorageValue(key:string, defaultValue:string) {
  // getting stored value
 try{
   const saved = localStorage.getItem(key);
   let  initial: string = ""
   if (saved)
    initial = JSON.parse(saved);
   return initial || defaultValue;

 }catch(err){
  return ""
 }
}

export const useLocalStorage = (key:string, defaultValue:string) => {
  const [value, setValue] = useState<SetValueState>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    console.log('value',value)
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};
