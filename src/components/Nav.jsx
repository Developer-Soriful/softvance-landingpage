import { images } from "../assets/imgExport"

const Nav = () => {
    return (
        <div className="h-[100px] items-center flex justify-between mx-4 md:mx-10 lg:mx-[120px]">
            {/* this is for navbar logo */}
            <img src={images.appLogo} alt="app logo" />
            {/* this is for navbar right button */}
            <div className="nav_button">
                <button className="text-[#fff] font-bold">Get Started</button>
            </div>
        </div>
    )
}

export default Nav