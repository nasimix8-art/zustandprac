import { create } from "zustand";


interface Setcount{
    count:number
    saveCount:number
    increase:()=>void
    decrease:()=>void
 SaveCount:()=>void

}
export const Setcounter=create<Setcount>((set)=>({
count:0,
saveCount:0,
decrease:()=>set((state)=>({
        count: state.count > 0 ? state.count - 1 : 0,
   
}))
    
,
increase:()=>set((state)=>({
    count:state.count+1
})),
 SaveCount: () =>
    set((state) => ({
      saveCount: state.count,
    })),

}))
export default Setcounter