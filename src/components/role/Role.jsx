import React from 'react'
import { images } from '../../assets/imgExport'
import { Link } from 'react-router'

const Role = () => {
    return (
        <div className='min-h-screen flex  flex-col items-center justify-center gap-[120px]'>
            {/* this is for role heading part */}
            <div className='flex flex-col items-center gap-6 '>
                <div>
                    <img src={images.appLogo} alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='role_heading'>Who Are You?</h1>
                    <p className='role_desc'>Choose the option that best describes you so we can tailor your experience.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-[32px]'>
                {/* user role */}
                <Link to={'/register'}>
                    <div className='role p-4 lg:w-[315px] lg:h-[238px] cursor-pointer  group role_hover px-[36px] flex flex-col text-center justify-center items-center gap-5'>
                        <div>
                            <img src={images.client_img} alt="" />
                        </div>
                        <div>
                            <h1 className='user_roleCard text-[16px] lg:text-[22px] group-hover:!text-[#49AE44]'>I'm a Client</h1>
                            <p className='user_roleCard_desc text-[9px] lg:text-[14px] group-hover:!text-[#6DBE69]'>Discover services & track projects effortlessly.</p>
                        </div>
                    </div>
                </Link>
                {/* owner role */}
                <Link to={'/register'}>
                    <div className='role p-4 group  cursor-pointer role_hover px-[36px] flex flex-col text-center justify-center items-center gap-5'>
                        <div>
                            <img className='h-[100px] w-[100px]' src={images.owner_img} alt="" />
                        </div>
                        <div>
                            <h1 className='user_roleCard text-[16px] lg:text-[22px] group-hover:!text-[#49AE44]'>I’m a Business Owner</h1>
                            <p className='user_roleCard_desc text-[9px] lg:text-[14px] group-hover:!text-[#6DBE69]'>Manage jobs, staff & clients with ease.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Role