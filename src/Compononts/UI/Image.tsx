interface Iprops{
    imageURL:string,
    altImg:string,
    classNameStyle:string
}


export const Image = ({imageURL,altImg,classNameStyle,...rest}:Iprops) => {
  return (
    <img src={imageURL} alt={altImg} className={`${classNameStyle}..{.${rest}`} />
  )
}
