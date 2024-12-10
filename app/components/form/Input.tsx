type Props = {
    item:{
        label:string,
        name:string,
        type?:string,  
    }
    value?:string
}

const Input = ({item,value}:Props) => {
  return (
    <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor={item.name}>
            {item.label}
          </label>
          <input
            className="shadow rounded-lg py-1 px-3"
            type={item.type}
            name={item.name}
            id={item.name}
            defaultValue={value}
          />
        </div>
  )
}

export default Input