import { Setcounter } from "./assets/stor/store";
function Mysetcounter() {
    const count = Setcounter((state) => state.count)
    const increase = Setcounter((state) => state.increase)
    const decrease = Setcounter((state) => state.decrease)
    return (
        <div>
            <h1 className="text-black text-3xl">{count}</h1>
            <div className=" flex justify-around gap-5">
                <button onClick={increase} className="w-1/4 border-2 border-b-blue-400 h-20 rounded-2xl bg-cyan-400 font-black text-4xl">+</button>
               <button onClick={decrease} className="w-1/4 border-2 h-20  border-b-blue-400 rounded-2xl bg-cyan-400 font-black text-4xl">-</button>
            </div>

        </div>
    )
}
export default Mysetcounter