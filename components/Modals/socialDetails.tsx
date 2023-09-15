import { useCallback } from "react";
import { AiOutlineClose } from 'react-icons/ai'
import Input from "../reuseable-components/Input";
import useSocialDetails from "../../hooks/useSocialDetails";
import useBasicDetails from "../../hooks/useBasicDetails";

const BasicDetails = () => {
    const socialDetails = useSocialDetails();
    const basicDetails = useBasicDetails();

    const onClose = useCallback(() => {
        socialDetails.onClose();
    }, [socialDetails])

    const onToggle = useCallback(() => {
        socialDetails.onClose();
        basicDetails.onOpen();
    }, [basicDetails, socialDetails])

    if (socialDetails.isOpen === false) {
        return null
    }

    return (
        <div className="flex fixed w-full h-full bg-black bg-opacity-50 items-center justify-center">
            <div className="w-[35rem] h-fit bg-white rounded-2xl pb-5">
                <div className=" flex flex-col border-b-[1px]">
                    <div className=" flex flex-row my-4 mx-4 font-montserrat text-lg font-semibold justify-start items-center">
                        <div>Add New Profile</div>
                        <div className=" ml-[17rem] hover:cursor-pointer" onClick={onClose}>
                            <AiOutlineClose />
                        </div>
                    </div>
                </div>
                <div className=" flex flex-row gap-24 justify-center items-center p-2 font-semibold text-base">
                    <div className=" border-b-4 px-20 pb-2 border-[#D9D9D9] hover:cursor-pointer" onClick={onToggle}>
                        Basic
                    </div>
                    <div className=" border-b-4 px-20 pb-2 border-[#3F84F8] hover:cursor-pointer" >
                        Social
                    </div>
                </div>
                <div className=" flex flex-col px-6">
                    <Input header="Instagram Link" placeholder="Eg. Aliek Mandal" optional />
                    <Input header="Youtube Link" placeholder="Eg. aliek@duck.com" optional />
                    <div className="flex flex-row gap-4 justify-end">
                        <button
                            className=" font-montserrat font-normal text-black bg-white py-2 px-4 border-2 border-[#999CA0] rounded-lg "
                            onClick={onToggle}
                        >
                            Back
                        </button>

                        <button
                            className=" font-montserrat font-normal text-white bg-[#3E84F8] py-2 px-4 rounded-lg "
                            onClick={onToggle}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasicDetails;