import type React from "react";
import ButtonFactory from "./productcard/Buttonfactory";
 interface choose{
    detail:string
 }

export const Choosing:React.FC<choose>=({detail})=>{
    return(
<>

<div className="w-1/3 h-100  border border-white rounded-2xl flex flex-col">
<p>{detail}</p>
<div className=" flex gap-4">
<ButtonFactory type="med" buttontext="1"/>
<ButtonFactory type="med" buttontext="2"/>
<ButtonFactory type="med" buttontext="3"/>
<ButtonFactory type="med" buttontext="4"/>
</div>
<p>what color would u like?</p>
<div className=" flex gap-4 ">

<ButtonFactory type="med" buttontext="1"/>
<ButtonFactory type="med" buttontext="2"/>
<ButtonFactory type="med" buttontext="3"/>
<ButtonFactory type="med" buttontext="4"/>
</div>
</div>
</>
    )
}
export default Choosing