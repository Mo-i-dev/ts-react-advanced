

export const ValidationProduct=(product:{title:string,description:string,imageURL:string,price:string})=>{
const errors:{title:string,description:string,imageURL:string,price:string}={
    title:"",
    description:"",
    imageURL:"",
    price:"",
}
const imageUrlRegex =
  /^https?:\/\/[^\s?#]+\.(?:png|jpe?g|gif|webp|svg|avif)(?:[?#][^\s]*)?$/i;
if(!product.title.trim() || product.title.length <10 || product.title.length>80)
    errors.title='Character must be between 10 and 80'
if(!product.description.trim() || product.description.length <10 || product.description.length>900)
   errors.description='description must be between 10 and 900'
 if(!product.imageURL.trim() || imageUrlRegex.test(product.imageURL))
    errors.imageURL="Unvalid Image URl"
 if(!product.price.trim() || isNaN(Number(product.price)))
    errors.price="its not a price"
 
 return errors
}