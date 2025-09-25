import { images } from "../../assets/imgExport"

const BuildFor = () => {
    return (
        <div className="mb-[170px] mx-4 md:mx-10 lg:mx-[120px]">
            {/* this is for build for everyone heading part */}
            <div className=" flex flex-col justify-center items-center gap-3">
                <div className="relative">
                    <img className="absolute -bottom-1 right-0" src={images.build_heading_logo1} alt="Build for Everyone" />
                    <h1 className="build_heading text-2xl md:text-4xl lg:text-[48px] z-10">Build for Everyone</h1>
                </div>
                <p className="text-start md:text-center build_desc">Whether you're booking services, managing tasks, or running operations, we've <br className="hidden md:block" /> designed the perfect experience for you.</p>
            </div>
            {/* builder role */}
            <div className="mt-[94px] flex flex-col gap-[40px]">
                {/* this one for builder user role */}
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* this is for user role text */}
                    <div className="flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-4">
                            <div>
                                <button className="build_role">Users</button>
                            </div>
                            <h1 className="build_role_heading ">Book services, track progress <br className="hidden md:block" />
                                and stay updated
                            </h1>
                            <p className="build_role_desc lg:w-[523px]">Easily schedule appointments, get real-time updates, and enjoy a smooth, transparent service experience.</p>
                        </div>
                        {/* this is for user details */}
                        <div className="flex flex-col gap-4">
                            <p className="build_role_details1">Book services in seconds</p>
                            <p className="build_role_details2">Track real-time job updates</p>
                            <p className="build_role_details3">Schedule appointments at your convenience</p>
                        </div>
                    </div>
                    {/* this is for user role image */}
                    <div className="relative">
                        <img className="absolute" src={images.ellipse21} alt="" />
                        <img className="absolute -bottom-1 right-0" src={images.rec_bottom_bluer} alt="" />
                        <img src={images.rec1} alt="" />
                    </div>
                </div>
                {/* this is for business role */}
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
                    {/* this is for user role image */}
                    <div className="relative">
                        <img className="absolute -bottom-1 right-0" src={images.rec_bottom_bluer} alt="" />
                        <img src={images.rec2} alt="" />
                    </div>
                    {/* this is for user role text */}
                    <div className="flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-4">
                            <div>
                                <button className="build_role">Business Owners</button>
                            </div>
                            <h1 className="build_role_heading">Assign jobs, monitor performance, and <br className="hidden md:block" /> streamline operations.
                            </h1>
                            <p className="build_role_desc lg:w-[523px]">Gain full control of your workforce with real-time tracking, smart scheduling, and service management in one app.</p>
                        </div>
                        {/* this is for user details */}
                        <div className="flex flex-col gap-4">
                            <p className="build_role_details1">Assign jobs to the right team member</p>
                            <p className="build_role_details2">Monitor performance in real time</p>
                            <p className="build_role_details3">Manage clients and services seamlessly</p>
                        </div>
                    </div>

                </div>
                {/* this one for builder Employees role */}
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* this is for user role text */}
                    <div className="flex flex-col gap-[32px]">
                        <div className="flex flex-col gap-4">
                            <div>
                                <button className="build_role">Employees</button>
                            </div>
                            <h1 className="build_role_heading">See tasks, track time, and navigate <br className="hidden md:block" />routes with ease.
                            </h1>
                            <p className="build_role_desc lg:w-[523px]">Everything you need to manage your workday from job assignments to optimized routes and time logging.</p>
                        </div>
                        {/* this is for user details */}
                        <div className="flex flex-col gap-4">
                            <p className="build_role_details1">Assign jobs to the right team member</p>
                            <p className="build_role_details2">Monitor performance in real time</p>
                            <p className="build_role_details3">Manage clients and services seamlessly</p>
                        </div>
                    </div>
                    {/* this is for user role image */}
                    <div className="relative">
                        <img className="absolute" src={images.ellipse21} alt="" />
                        <img className="absolute -bottom-1 right-0" src={images.rec_bottom_bluer} alt="" />
                        <img src={images.rec3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildFor