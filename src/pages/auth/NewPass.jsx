import { FaEyeSlash } from "react-icons/fa";
import { images } from "../../assets/imgExport";
import { IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import axios from "axios";

const NewPass = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation(); // to get token from state or query params

    const toggle = () => setOpen(!open);

    // get token from location state or URL query
    const token = location.state?.token || new URLSearchParams(location.search).get("token");
    console.log(token);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const formData = new FormData(e.target);
        const password = formData.get("new_password");
        const password_confirmation = formData.get("confirm_password");

        if (password !== password_confirmation) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post(
                "https://apitest.softvencefsd.xyz/api/reset-password",
                {
                    password,
                    password_confirmation,
                    token,
                },
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            console.log("Password reset successful:", res.data);

            // Navigate to login page after successful reset
            navigate("/login", { state: { successMsg: "Password reset successful. Please login." } });
        } catch (err) {
            console.error("Password reset failed:", err);

            if (err.response) {
                setError(err.response.data.message || "Password reset failed.");
            } else if (err.request) {
                setError("Network error. Please try again.");
            } else {
                setError("An error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative flex justify-center items-center">
            {/* logo */}
            <div className="absolute top-0 left-0">
                <img className="px-[32px] py-6" src={images.appLogo} alt="logo" />
            </div>

            {/* form */}
            <div className="flex flex-col justify-center items-center w-[90%] mx-auto lg:w-[480px] gap-[64px]">
                {/* heading */}
                <div className="flex flex-col gap-2 justify-center"> <h1 className="formHeading">Enter your new password</h1> <p className="formDesc"> Please enter the email address associated with your account, will email you a link to reset your password. </p> </div>

                {/* Error Message */}
                {error && (
                    <div className="w-full p-3 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-600 text-sm">{error}</p>
                    </div>
                )}

                <form className="flex flex-col w-full gap-6" onSubmit={handleSubmit}>
                    {/* new password */}
                    <div className="relative">
                        <input
                            name="new_password"
                            className="formInput focus:outline-none w-full"
                            type={open ? "text" : "password"}
                            placeholder="New password"
                            required
                            minLength="8"
                            disabled={loading}
                        />
                        <span
                            onClick={toggle}
                            className="absolute right-5 z-20 cursor-pointer top-[35%]"
                        >
                            {open ? <FaEyeSlash /> : <IoEyeSharp />}
                        </span>
                    </div>

                    {/* confirm password */}
                    <div className="relative">
                        <input
                            name="confirm_password"
                            className="formInput focus:outline-none w-full"
                            type={open ? "text" : "password"}
                            placeholder="Confirm password"
                            required
                            minLength="8"
                            disabled={loading}
                        />
                        <span
                            onClick={toggle}
                            className="absolute right-5 z-20 cursor-pointer top-[35%]"
                        >
                            {open ? <FaEyeSlash /> : <IoEyeSharp />}
                        </span>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="createAccountBtn cursor-pointer text-[#fff] text-[16px] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Resetting..." : "Reset Password"}
                    </button>

                    {/* Back Link */}
                    <div className="flex justify-center items-center">
                        <Link className="text-[#49AE44] font-semibold" to="/login">
                            Back to Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPass;
