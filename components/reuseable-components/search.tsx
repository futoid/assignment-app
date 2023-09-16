import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
    return (
        <div className=' flex flex-row items-center'>
            <input type="search" className=" w-[10rem] p-2 outline-none bg-white rounded-s-lg font-lato text-[#B0B0B0] text-base" placeholder="Search..." />
            <div className=' bg-white rounded-e-lg p-3'>
                <FiSearch size={17} color="#858585"/>
            </div>

        </div>
    );
}

export default SearchBar;