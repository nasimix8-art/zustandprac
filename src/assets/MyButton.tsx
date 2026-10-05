import type React from "react"
import type { ReactNode } from "react"

export type Buttontype="small"|"med"|"large"
interface Buttonprps{
    logo?:ReactNode 
    buttontext?:string
    type:"small"|"med"|"large"
    className?:string
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
export const Button:React.FC<Buttonprps>=({logo,buttontext,type="med",className,onClick})=>{
    return(
        
<button onClick={onClick} className={`bg-pink-400 border border-pink-400 rounded-2xl shadow-2xl flex items-center justify-center ${className}` }>
    {logo}{buttontext}</button>)
}
export default Button