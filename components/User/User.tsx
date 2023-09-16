import { AiOutlineClose, AiOutlineEdit, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { PiWhatsappLogoLight } from 'react-icons/pi'
import { CiMail } from 'react-icons/ci'
import useUser from '../../hooks/useUser';
import { useCallback } from 'react';
import useBasicDetails from '../../hooks/useBasicDetails';

const User = () => {

    const user = useUser();
    const basicDetails = useBasicDetails();

    const onEdit = useCallback(() => {
        basicDetails.onOpen();
    }, [basicDetails]);

    const onClose = useCallback(() => {
        user.updateName('');
        user.updatePhone('');
        user.updateEmail('');
        user.updateInstagram('');
        user.updateYoutube('');
        user.onClose();
    }, [user]);

    return (
        <div className=" my-10 ml-2 w-[35rem] px-2">
            <div className=" bg-white border-[3px] border-[#E0E0E0] pt-6 pb-20 px-10 rounded-3xl shadow-lg">
                <div className=' flex justify-end hover:cursor-pointer gap-6 items-center'>
                    <AiOutlineClose onClick={onClose} />
                    <AiOutlineEdit onClick={onEdit} />
                </div>
                <h1 className=" font-figtree font-semibold text-2xl">{user.name}</h1>
                <div className=' mt-10'>
                    <div className=" flex gap-10 my-3">
                        <div className=' flex flex-row basis-1/2 justify-start items-center gap-2'>
                            <div className='flex rounded-full bg-[#E9F9EB] m-1 p-2 justify-center'>
                                <PiWhatsappLogoLight size={25} color="#3CC952" />
                            </div>

                            <div className=' font-figtree text-base font-normal underline'>
                                {user.phone}
                            </div>

                        </div>
                        <div className=' flex flex-row basis-1/2 justify-start items-center gap-2'>
                            <div className='flex rounded-full bg-[#FFE9EC] m-1 p-2 justify-center'>
                                <AiOutlineInstagram size={25} color="#FF4E64" />
                            </div>

                            <div className=' font-figtree text-base font-normal underline underline-offset-2'>
                                {user.instagram}
                            </div>

                        </div>
                    </div>
                    <div className=" flex gap-10 my-4">
                        <div className=' flex flex-row basis-1/2 justify-start items-center gap-2'>
                            <div className='flex rounded-full bg-[#E9F9EB] m-1 p-2 justify-center'>
                                <CiMail size={25} color="#5C33CF" />
                            </div>

                            <div className=' font-figtree text-base font-normal underline'>
                                {user.email}
                            </div>

                        </div>
                        <div className=' flex flex-row basis-1/2 justify-start items-center gap-2'>
                            <div className='flex rounded-full bg-[#FFE9E9] m-1 p-2 justify-center'>
                                <AiOutlineYoutube size={25} color="#FF0000" />
                            </div>

                            <div className=' font-figtree text-base font-normal underline underline-offset-2'>
                                {user.youtube}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;