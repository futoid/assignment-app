interface InputProps {
    header ?: string;
    placeholder : string;
    value ?: string;
    type ?: string;
    width : number,
    onChange ?: (event : React.ChangeEvent<HTMLInputElement>) => void;
}

const Input : React.FC<InputProps> = (
    {   header,
        placeholder , 
        value, 
        type, 
        width,
        onChange
    }
    ) => {
    return ( 
        <div className=" py-3">
        <p className=" text-black text-base font-normal">{header}</p>
        <input
            placeholder= {placeholder}
            value= {value}
            type= {type}
            onChange= {onChange}

            className=" w-full p-3 rounded-md bg-[#F5F5F5] outline-none focus:bg-[#EAEAEA] mt-2"
        >
        
        </input>
        </div>
     );
}
 
export default Input;