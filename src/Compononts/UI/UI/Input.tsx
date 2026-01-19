import type { InputHTMLAttributes } from "react"

interface Iprops extends InputHTMLAttributes<HTMLInputElement>{}


export const Input = ({...rest}:Iprops) => {
  return (
    <input className="border-2 border-gray-300 shadow-md rounded-md px-3 py-3 text-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 " {...rest} />
  )
}
