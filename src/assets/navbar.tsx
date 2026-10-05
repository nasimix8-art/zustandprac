import Setcounter from "./stor/store"


function Navbar(){
      const count = Setcounter((state) => state.count)
        const increase = Setcounter((state) => state.increase)
        const decrease = Setcounter((state) => state.decrease)
        const SaveCount=Setcounter((state)=> state.SaveCount)
        const saveCount = Setcounter((state) => state.saveCount)
    return(
<div className=" w-full h-15 border-b-2 m-2 flex items-center p-2">
  
<button className="w-20 h-10 bg-pink-400 border rounded-2xl flex items-center justify-center relative"><svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="rgb(255, 255, 255)" d="M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/></svg></button>
 <div className=" items-center flex justify-center absolute bg-white border border-pink-400 w-8 h-8 rounded-4xl top-3 left-14 text-black">{saveCount}</div> 
</div>
    )
}
export default Navbar
