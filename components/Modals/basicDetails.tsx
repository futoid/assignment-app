import { useCallback } from "react";
import useBasicDetails from "../../hooks/useBasicDetails";
import {AiOutlineClose} from 'react-icons/ai'

const BasicDetails = () => {
    const basicDetail = useBasicDetails();

    const onToggle = useCallback(()=> {
        basicDetail.onClose();
    }, [basicDetail])

    if(basicDetail.isOpen === false){
        return null
    }

    return ( 
        <div className="flex fixed w-full h-full bg-black bg-opacity-50 items-center justify-center">
            <div className="w-[30rem] h-96 bg-white rounded-2xl">
                <div className=" flex flex-col">
                    <div className=" flex flex-row my-4 mx-4 font-montserrat text-lg font-semibold justify-start items-center">
                        <div>Add New Profile</div>
                        <div className=" ml-[17rem] hover:cursor-pointer" onClick={onToggle}>
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BasicDetails;