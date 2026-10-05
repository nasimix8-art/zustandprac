import type React from "react"
import Setcounter from "../stor/store"
import PriceCard from "../pricecard"
import ImageCrad from "../imagecard"
import Choosing from "../choosing"
import Navbar from "../navbar"
import { useEffect } from "react"



interface Procard {

    productname: string
    price: number
    detail: string
}
useEffect(()=>{},[])
export const Procards: React.FC<Procard> = ({ }) => {
    const increase = Setcounter((state) => state.increase)
    const decrease = Setcounter((state) => state.decrease)
    const count = Setcounter((state) => state.count)
    return (
        <>
<Navbar/>
            <div className="w-4/5 h-180  bg-pink-300 border border-pink-300 rounded-2xl items-start flex justify-between text-black">
                
                     <PriceCard num="number:" price={10000} />

                    <Choosing detail="choose which one do u like" />

                <ImageCrad image="/pic3.jpg" price={1000} productname="Lilys" detail="this could be a good choise for ur partner" />
            </div>
        </>
    )

}
export default Procards
