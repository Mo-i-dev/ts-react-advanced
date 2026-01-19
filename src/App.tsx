
import { CardForm } from './Compononts/UI/CardForm'
import { Input } from './Compononts/UI/UI/Input'
import  Model  from './Compononts/UI/UI/Model'
import { FormsInput, products } from './Data/Data'
import { useState } from 'react'
import type { IProduct } from './interface/interface'
import type { ChangeEvent } from 'react'
import  {Button} from './Compononts/UI/UI/Button'
import { ValidationProduct } from './Validation'
import { ErrorMessage } from './Compononts/UI/UI/ErrorMessage'


 const App = () => {
//error 
const [error,setError]=useState(
  {
    title:"",
    description:"",
    imageURL:"",
    price:""
  }
)


//link with product
const [product,setProduct]=useState<IProduct>({
 title:'',
 description:"",
 imageURL:"",
 price:"",
 Color:[],
 category:{
  name:"",
  imageURL:""
 }
})
const setProductHandler = (e:ChangeEvent<HTMLInputElement>)=>{ 
  const {value,name}=e.target
  setProduct({
    ...product,
    [name]:value
  })
  setError({
    ...error,
    [name]:""
  })
};
 
//Rendering
  const RenderFormInput= FormsInput.map(input => 
  <div className='flex flex-col' key={input.id}>
   <label htmlFor={input.id}>{input.label}</label>
   <Input type='text' id={input.id} name={input.name} value={product[input.name]} onChange={setProductHandler} />
   <ErrorMessage msg={error[input.name]}/>

  </div>

)


  //Model
   const [isOpen, setIsOpen] = useState(false);
     
   
    const setClose=()=>{
      setIsOpen(false)
    }

  //Rendering
  const RenderProductlist=products.map( (product) => < CardForm key={product.id} product={product} />)
//Handlers
  const submitHandler=(event:React.FormEvent<HTMLFormElement>):void=>{
     event.preventDefault()
     const {title,description,imageURL,price}=product
     const errors =ValidationProduct({
       title,
       description,
       imageURL,
       price
     });
     const HasErrorMsg=Object.values(errors).some(value=> value==='') && Object.values(errors).every(value => value==='')
     if(!HasErrorMsg){
      setError(errors)
      return
     }
     console.log("Send this To Server")

  }
  const CancelFun=()=>{
    setProduct({
 title:'',
 description:"",
 imageURL:"",
 price:"",
 Color:[],
 category:{
  name:"",
  imageURL:""
 }
}   )
  setClose();
  }


 

   const openModal=()=> {
     setIsOpen(true)
   }

  return (
    <main className='container mx-auto px-4 py-6'> 
          <Button
        classNameStyle="block bg-indigo-700 hover:bg-indigo-800 mx-auto my-10 px-10 font-medium"
        onClick={openModal}
        width="w-fit"   >   
        Build a Product
      </Button>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
            {RenderProductlist}
            <Model isOpen={isOpen}  title='Build' closeModal={setClose} >
              
              {RenderFormInput}
               <form onSubmit={submitHandler}>
            <div className="flex justify-end gap-3 pt-4">
            
              <Button
                classNameStyle="
                  px-6 py-2
                  bg-blue-600 text-white
                  rounded-md
                  hover:bg-blue-700
                  transition
                "
                onClick={setClose}
              >
                Add
              </Button>

              <Button
                onClick={()=>{
                    setClose()
                    CancelFun()
                }}
                
                classNameStyle="
                  px-6 py-2
                  border border-gray-300
                  text-gray-700
                  rounded-md
                  hover:bg-gray-100
                  transition
                " 
              >
                Cancel
              </Button>
              
              </div>
            </form>
            </Model>
          
       </div>
    </main>
  )
}

export default App