import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { BiBell } from 'react-icons/bi';

const DashboardHeader = () => {
    const { data: userData } = useSession();
    return (
        <div className=" flex flex-row mt-14 items-center">
            <div>
                <h1 className=" text-black text-2xl font-bold">
                    Dashboard
                </h1>
            </div>

            <div className=" flex flex-row w-40 ml-[50rem] gap-8 items-center">
                <div className="">
                    <BiBell size={30} />
                </div>
                <div className="w-9 h-9 overflow-hidden rounded-full">
                    <Image
                        src={userData?.user?.image as string}
                        alt='Profile'
                        width={100}
                        height={100}
                        loading='lazy'
                    />
                </div>

            </div>

        </div>
    );
}

export default DashboardHeader;