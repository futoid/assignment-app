import Image from 'next/image'
import { useSession } from 'next-auth/react';
import { BiBell } from 'react-icons/bi';
import SearchBar from '../reuseable-components/search';

const DashboardHeader = () => {
    const { data: userData } = useSession();
    return (
        <div className=" flex flex-row mt-14  gap-[43rem] items-center">
            <div>
                <h1 className=" text-black text-2xl font-bold">
                    Dashboard
                </h1>
            </div>

            <div className=" flex flex-row gap-8 items-center">
                <div>
                    <SearchBar/>
                </div>
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