import type React from "react"

interface imagecard {
   
    productname: string
    price: number
    detail: string
}
export const ImageCrad: React.FC<imagecard> = ({ productname, price, detail }) => {
    return (
        <div className="w-1/2  h-150 bg-white rounded-2xl flex flex-col p-2 m-2 justify-center  items-center text-black">
            <img className="w-100 h-100 rounded-2xl"  src="/pic3.jpg" alt="" />
            <div className="h-100 w-2/3 flex  gap-5 items-center justify-end flex-col">
                <p className=" font-bold">name:{productname}</p>
                <span className="font-bold">price:{price}</span>
                <p className="mb-5 p-5">{detail}</p>
            </div>

        </div>

    )

}
export default ImageCrad