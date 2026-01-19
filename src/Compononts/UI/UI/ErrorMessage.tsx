
interface Iprops{
    msg:string
}


export const ErrorMessage = ({msg}:Iprops) => {
  return (
    <span className="inline-block text-red-700 font-semibold text-sm">{msg}</span>
  )
}
