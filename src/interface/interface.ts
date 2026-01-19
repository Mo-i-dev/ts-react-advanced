export interface IProduct{
id?:string|undefined,   
title:string,
description:string,
imageURL:string,
price:string,
Color:string[],
category:{
    name:string,
    imageURL:string

}
}

export interface IformInput{
    id:string
    name:"title"|'description'|'imageURL'|'price',
    label:string,
    type:string,
}