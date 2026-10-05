import type React from "react"
import Setcounter from "./stor/store"

interface pricecard {
    num: string
 

}
export const PriceCard: React.FC<pricecard> = ({ num }) => {
    const count = Setcounter((state) => state.count)
    const increase = Setcounter((state) => state.increase)
    const decrease = Setcounter((state) => state.decrease)
    const SaveCount=Setcounter((state)=>state.SaveCount)
    return (
        <>
            <div className="flex bg-white w-1/3 h-50 flex-col justify-between items-center rounded-2xl ">
                <div className="flex  justify-between gap-5 m-5">
                    <p>{num}</p>
                    <div>
                        <button onClick={increase} className="w-10 h-10 rounded-l-4xl bg-pink-400 text-white hover:bg-white hover:text-pink-400 hover:border-pink-400 hover:border hover:border-pink-400">+</button>
                        <button className="bg-pink-400 w-5 h-10 text-white">{count}</button>
                        <button className="w-10 h-10 rounded-r-4xl bg-pink-400 text-white  hover:bg-white hover:text-pink-400 hover:border hover:border-pink-400" onClick={decrease}>-</button>
                    </div>

                </div>
                <button onClick={SaveCount} className=" bg-pink-400 w-2/3 rounded-2xl shadow-2xl h-20 flex items-center justify-center text-white hover:bg-white hover:text-pink-400 m-5 hover:border hover:border-pink-400">add to bag</button>
            </div>



        </>
    )
}
export default PriceCard