import React from 'react'
import { images } from '../assets/imgExport'
import { Link } from 'react-router'

const UserCrateSucc = () => {
    return (
        <div className="min-h-screen relative flex justify-center items-center">
            {/* logo */}
            <div className="absolute top-0 left-0">
                <img className="px-[32px] py-6" src={images.appLogo} alt="logo" />
            </div>
            <div className='w-[90%] mx-auto lg:w-[480px] flex flex-col justify-center items-center gap-[35px]'>
                <img src={images.userSucc} alt="userSucc" />
                <div className='flex flex-col gap-10 lg:gap-[80px] w-full'>
                    <h1 className='successMessage text-center text-2xl lg:text-[32px]'>Account Created Successfully!</h1>
                    <Link to={'/login'} className='createAccountBtn w-full text-white font-bold'>Go to Login</Link>
                </div>
            </div>
        </div>
    )
}

export default UserCrateSucc