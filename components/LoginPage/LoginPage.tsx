import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillApple } from 'react-icons/ai';
import { BiLogoDiscord } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import Input from '../reuseable-components/Input';
import Button from '../reuseable-components/Button';
import { signIn } from 'next-auth/react';


const LoginPage = () => {

    return (
        <div>
            <div className="lg:grid lg:grid-cols-2 gap-2 h-screen">
                <div className="hidden lg:block bg-gradient-to-r from-[#4285F4] to-[#286DE0] -skew-x-12 -translate-x-20">
                    <div className=" text-2xl font-bold text-white pl-10 pt-10 skew-x-12 font-poppins">
                        LOGO
                    </div>
                    <div className=" text-7xl text-white font-bold ml-60 font-montserrat mt-60 skew-x-12">
                        Board.
                    </div>
                    <div className=" flex flex-row gap-10 skew-x-12 pl-72 pt-60 items-center">
                        <BsGithub size={35} color='white' />
                        <AiFillTwitterCircle size={40} color='white' />
                        <BsLinkedin size={35} color='white' />
                        <BiLogoDiscord size={45} color='white' />
                    </div>
                </div>
                <div className="flex items-center justify-center p-5">
                    <div>
                        <div className=" ml-6 mt-5">
                            <h1 className=" text-black font-bold text-4xl font-montserrat"> Sign In</h1>
                            <p className="text-black text-base font-normal font-lato pt-3">Sign in to your account</p>
                        </div>

                        <div className=" flex flex-row gap-6">
                            <div className=" flex flex-row gap-2 p-2 mt-8 ml-4 bg-white rounded-xl items-center justify-center hover:cursor-pointer" onClick={() => signIn('google')}>
                                <FcGoogle size={30} />
                                <p className=" text-sm flex text-[#858585] font-montserrat justify-center items-center"> Sign in with Google</p>
                            </div>
                            <div className=" flex flex-row gap-4 p-2 mt-8 ml-4 bg-white rounded-xl">
                                <AiFillApple size={30} color="#999999" />
                                <p className=" text-sm flex text-[#858585] font-montserrat justify-center items-center"> Sign in with Apple</p>
                            </div>
                        </div>

                        <div className=' flex flex-col gap-1 px-8 py-10 rounded-xl mt-4 ml-4 bg-white font-lato'>
                            <Input
                                header="Email address"
                                placeholder="Enter your mail"
                                type="email"
                                onChange={() => { }}
                            />
                            <Input
                                header="Password"
                                placeholder="Password"
                                type="password"
                                onChange={() => { }}
                            />
                            <p className=' text-[#346BD4] text-base font-normal'>
                                Forget Password?
                            </p>

                            <Button
                                label='Sign In'
                                fullWidth
                            />
                        </div>

                        <div className=' mt-10 text-center'>
                            <h1 className=" text-base font-normal text-[#858585]">Don’t have an account? <span className=" text-[#346BD4]">Register here</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;