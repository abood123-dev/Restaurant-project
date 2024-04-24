import { createContext } from "react";
export type Cot=
{
    id:number,
    desc:string,
    price:number,
    img:string,
    category:string
}

export interface contextFood 
{
    Food:Cot,
    setFood: React.Dispatch<Cot>
}
