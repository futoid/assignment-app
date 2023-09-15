interface InputProps {
    header ?: string;
    placeholder : string;
    value ?: string;
    type ?: string;
    onChange ?: (event : React.ChangeEvent<HTMLInputElement>) => void;
    optional ?: boolean;
}

const Input : React.FC<InputProps> = (
    {   header,
        placeholder , 
        value, 
        type, 
        onChange,
        optional
    }
    ) => {
    return ( 
        <div className=" py-3">
        <p className=" text-black text-base font-normal">{header} { optional ? <span className=" text-[#999CA0]"> (Optional)</span> : " "}</p>
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