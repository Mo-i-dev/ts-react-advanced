  
  import type { IformInput, IProduct } from "../interface/interface";
 export const products: IProduct[] = [
  {
    id: "1",
    title: "Nike Air Max 270",
    description: "Comfortable running shoes with modern design.",
    imageURL: "src/assets/images.jpg",
    price: "120$",
    Color: ["Black", "White", "Red"],
    category: {
      name: "Shoes",
      imageURL: "src/assets/images.jpg"
    }
  },
  {
    id: "2",
    title: "Apple iPhone 14",
    description: "Latest iPhone with powerful performance and camera.",
    imageURL: "src/assets/apple-iphone-14-plus-256gb-blue-750x750.jpeg",
    price: "999$",
    Color: ["Black", "Silver", "Purple"],
    category: {
      name: "Electronics",
      imageURL: "src/assets/apple-iphone-14-plus-256gb-blue-750x750.jpeg"
    }
  },
  {
    id:"3",
    title: "Leather Backpack",
    description: "Stylish leather backpack perfect for daily use and for traveling.",
    imageURL: "src/assets/imageBackPack.jpg",
    price: "75$",
    Color: ["Brown", "Black"],
    category: {
      name: "Bags",
      imageURL: "src/assets/imageBackPack.jpg"
    }
  },
  {
    id: "4",
    title: "Smart Watch",
    description: "Smartwatch with health tracking and notifications.",
    imageURL: "src/assets/imagesWatch.jpg",
    price: "199$",
    Color: ["Black", "Gray", "Blue"],
    category: {
      name: "Accessories",
      imageURL: "src/assets/imagesWatch.jpg"
    }
  },
  {
    id: "5",
    title: "Wireless Headphones",
    description: "Noise cancelling wireless headphones.",
    imageURL: "src/assets/imagesHeadPhone.jpg",
    price: "150$",
    Color: ["Black", "White"],
    category: {
      name: "Audio",
      imageURL: "src/assets/imagesHeadPhone.jpg"
    }
  },
  {
    id: "6",
    title: "Gaming Mouse",
    description: "High precision RGB gaming mouse.",
    imageURL: "src/assets/Mouselaser.jpg",
    price: "60$",
    Color: ["Black", "Red"],
    category: {
      name: "Gaming",
      imageURL: "src/assets/Mouselaser.jpg"
    }
  }
];

export const FormsInput:IformInput[]=[
  {
    id:"title",
    name:"title",
    label:"Product Title",
    type:"text",
  },
  {
    id:"description",
    name:"description",
    label:"Product description",
    type:"text",
  },
  {
    id:"image",
    name:"imageURL",
    label:"Product Image URL",
    type:"Text",
  },
  {
    id:"price",
    name:"price",
    label:"Product price",
    type:"text",
  }
]