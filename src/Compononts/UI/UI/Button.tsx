import type { ButtonHTMLAttributes, ReactNode } from "react"
interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
children:ReactNode,
classNameStyle:string,
width?:'w-full'|'w-fit'
}

export const Button = ({children,classNameStyle,width='w-full',...rest}:Iprops) => {
  return (
    <button className={`${classNameStyle} ${width} p-2 rounded-md`}  {...rest}>{children}</button>
  )
}
