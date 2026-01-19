import type { IProduct } from "../../interface/interface"
import { Image } from "./Image"
import { Button } from "./UI/Button"
interface Iprops{
    product:IProduct
}


export const CardForm = ({product}:Iprops) => {
  const {title,description,imageURL,price} = product;
  return (
    <div className="max-w-sm w-full border rounded-md p-3 flex flex-col h-full">
            <div className="w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-md">
           <Image imageURL={imageURL} altImg="Ferrarie" classNameStyle="rounded-md w-full h-full object-cover" />
          </div>
           <h3>{title}</h3>
           <p>{description}</p>
            <div className=" flex items-center my-4 gap-2">
              <span className="inline-block bg-amber-700 h-5 w-5 rounded-full cursor-pointer"></span>
              <span className="inline-block bg-indigo-400 h-5 w-5 rounded-full cursor-pointer"></span>
              <span className="inline-block bg-blue-800 h-5 w-5 rounded-full cursor-pointer"></span>
            </div>
            <div className="flex justify-between items-center">
                <h3>{price}</h3>
                <Image altImg="Icon Ferrarie" imageURL={imageURL} classNameStyle="h-10 w-10 rounded-full object-bottom"/>
            </div>
            <div className="flex items-center justify-between gap-2 mt-auto pt-4">
                <Button classNameStyle="bg-blue-700 w-full" >Edit</Button>
                <Button classNameStyle="bg-red-700 w-full">Destroyed</Button>
            </div>

    </div>
  )
}
