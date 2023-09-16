import { useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import useBasicDetails from "../../hooks/useBasicDetails";
import useUser from "../../hooks/useUser";

const NoUser = () => {

    const basicDetails = useBasicDetails();
    const user = useUser();

    const addUser = useCallback(() => {
        basicDetails.onOpen();
    }, [basicDetails]);

    return ( 
        <div className=" my-10 ml-2 w-[35rem] px-2">
            <div className=" bg-white border-[3px] border-[#E0E0E0] py-[5.8rem] px-56 rounded-3xl shadow-lg">
                <div className=" flex justify-center bg-[#F5F5F5] rounded-full p-4 hover:cursor-pointer" onClick={addUser}>
                    <AiOutlinePlus size={60} color="#999CA0"/>
                </div>
                <div className=" flex justify-center font-semibold text-base text-[#858585] font-lato mt-4">
                    Add Profile
                </div>
            </div>
        </div>
     );
}
 
export default NoUser;