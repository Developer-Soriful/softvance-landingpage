import { images } from "../assets/imgExport"

const Hero = () => {
    return (
        <div className="flex  flex-col lg:flex-row justify-between items-center  mx-4 md:mx-10 lg:ml-[120px]">
            {/* hero highlight text section */}
            <div className="flex-1">
                <div className="flex flex-col gap-4 relative">
                    {/* this is for hero textImg 2 */}
                    <img className="absolute -bottom-3 lg:hidden" src={images.hero_logo2} alt="" />
                    <h1 className="text-2xl md:text-[48px] lg:text-[84px] font-bold lg:hero_heading  relative">
                        {/* this is for hero textImg 1 */}
                        <img className="absolute -top-12 right-[40%]" src={images.hero_logo1} alt="" />
                        {/* this is for hero textImg 2 */}
                        <img className="absolute bottom-0 lg:right-25 hidden lg:block" src={images.hero_logo2} alt="" />
                        All Your Jobs <br className="hidden lg:block" />
                        One Smart App
                    </h1>
                    <p className="text-[#637381] lg:w-[495px] text-[16px]">Built for business owners, employees, and clients streamline job scheduling, service tracking, and team management in one powerful app.</p>
                </div>
                {/* this is for app download part */}
                <div className="flex gap-[18px] mt-[64px]">
                    <div className="hero_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="27" viewBox="0 0 22 27" fill="none">
                            <path d="M18.375 14.3585C18.3883 13.3236 18.6636 12.3089 19.1753 11.4088C19.6869 10.5087 20.4183 9.7524 21.3013 9.21035C20.7403 8.41042 20.0003 7.75211 19.1399 7.2877C18.2796 6.8233 17.3227 6.56559 16.3451 6.53505C14.2599 6.3165 12.2384 7.78094 11.1757 7.78094C10.0926 7.78094 8.45653 6.55675 6.69478 6.59294C5.55523 6.6297 4.44465 6.96057 3.47125 7.55332C2.49785 8.14606 1.69482 8.98046 1.14041 9.97522C-1.26113 14.1269 0.530205 20.2285 2.83072 23.5845C3.98172 25.2278 5.3269 27.0634 7.08707 26.9983C8.80949 26.9269 9.45279 25.9016 11.5319 25.9016C13.5917 25.9016 14.1952 26.9983 15.9911 26.9569C17.8394 26.9269 19.0038 25.3063 20.1145 23.6474C20.9415 22.4765 21.5778 21.1824 22 19.813C20.9262 19.3596 20.0099 18.6005 19.3653 17.6305C18.7206 16.6606 18.3762 15.5226 18.375 14.3585Z" fill="#212B36" />
                            <path d="M14.9827 4.32802C15.9904 3.1201 16.4869 1.56752 16.3667 0C14.8271 0.161459 13.4049 0.89617 12.3836 2.05774C11.8842 2.6252 11.5017 3.28537 11.258 4.00051C11.0143 4.71564 10.9142 5.47172 10.9633 6.22553C11.7334 6.23344 12.4952 6.06678 13.1914 5.7381C13.8877 5.40942 14.5001 4.92729 14.9827 4.32802Z" fill="#212B36" />
                        </svg>
                        <div className="flex flex-col">
                            <span className="text-[#212B36] text-[9px]">Download on the</span>
                            <p className="font-semibold text-[18px]">App Store</p>
                        </div>
                    </div>
                    <div className="hero_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 23 27" fill="none">
                            <path d="M10.7381 12.9168L0.0976562 24.3398C0.0986556 24.3418 0.0986555 24.3448 0.0996549 24.3468C0.426454 25.5872 1.54577 26.5 2.87495 26.5C3.40663 26.5 3.90532 26.3544 4.33306 26.0997L4.36704 26.0795L16.3437 19.0892L10.7381 12.9168Z" fill="#EA4335" />
                            <path d="M21.5033 10.9717L21.4933 10.9646L16.3225 7.93296L10.4971 13.1764L16.3435 19.088L21.4863 16.0867C22.3878 15.5934 23.0004 14.6321 23.0004 13.5241C23.0004 12.4223 22.3968 11.466 21.5033 10.9717Z" fill="#FBBC04" />
                            <path d="M0.0979399 2.6594C0.0339792 2.89796 0 3.14866 0 3.40745V23.5927C0 23.8515 0.0339792 24.1022 0.0989393 24.3397L11.1042 13.2089L0.0979399 2.6594Z" fill="#4285F4" />
                            <path d="M10.8171 13.4999L16.3237 7.93094L4.36104 0.915442C3.92631 0.651602 3.41862 0.49997 2.87595 0.49997C1.54677 0.49997 0.425455 1.41482 0.0986551 2.65618C0.0986551 2.65719 0.0976562 2.6582 0.0976562 2.65921L10.8171 13.4999Z" fill="#34A853" />
                        </svg>
                        <div className="flex flex-col">
                            <span className="text-[#212B36] text-[9px]">Download on the</span>
                            <p className="font-semibold text-[18px]">Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero right rectangle */}
            <div className="relative flex-1">
                <img className="absolute bottom-0" src={images.rec_bottom_bluer} alt="" />
                <img src={images.hero_rec} alt="hero rec" />
            </div>
        </div>
    )
}

export default Hero