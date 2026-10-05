import type { ReactNode } from "react";
import Button from "../MyButton";
import type { Buttontype } from "../MyButton";
interface Buttons{
    logo?:ReactNode
    className?:string
    buttontext?:string
    type:Buttontype
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const ButtonSize={
    small:"w-10 h-10",
    med:"w-20 h-10",
    large:"w-60 h-20 text-lg"
}
export const ButtonFactory=({logo,className,buttontext,type,onClick}:Buttons)=>{
    
  const sizeClass = ButtonSize[type];
    return(
<Button logo={logo}  className={`${sizeClass} ${className}`} buttontext={buttontext} type={type} onClick={onClick}/>
    )

}
export default ButtonFactory
