import { IoIosArrowBack } from "react-icons/io"
import { images } from "../../assets/imgExport"
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";

const ForgetPass = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" }); // success/error message

    // this is for api call
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: "", type: "" });

        const email = e.target.email.value;

        try {
            const response = await axios.post(
                'https://apitest.softvencefsd.xyz/api/forgot-password',
                { email },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            console.log('API Response:', response.data);

            if (response.data) {
                setMessage({
                    text: "Password reset link sent to your email!",
                    type: "success"
                });
                // Optional: Redirect after success
                navigate("/otp_forget");
            } else {
                setMessage({
                    text: response.data.message || "Failed to send reset link",
                    type: "error"
                });
            }

        } catch (error) {
            console.error('Error:', error);
            setMessage({
                text: error.response?.data?.message || "An error occurred. Please try again.",
                type: "error"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen relative flex justify-center items-center">
            {/* Logo */}
            <div className="absolute top-0 left-0">
                <img className="px-8 py-6" src={images.appLogo} alt="logo" />
            </div>

            <div className="w-[90%] mx-auto lg:w-[480px] flex flex-col justify-center items-start">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center mb-6 text-[#49AE44] hover:text-gray-800 transition-colors"
                >
                    <IoIosArrowBack className="text-xl mr-1" />
                    <span className="text-sm font-medium">Back</span>
                </button>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl lg:text-[32px] font-bold text-[#212B36]">Forgot your password?</h1>
                    <p className="role_desc">Please enter the email address associated with your account, and we'll email you a link to reset your password.</p>
                </div>

                {/* Message Display */}
                {message.text && (
                    <div className={`w-full mt-4 p-3 rounded-md border ${message.type === "error"
                        ? "bg-red-50 border-red-200 text-red-600"
                        : "bg-green-50 border-green-200 text-green-600"
                        }`}>
                        <p className="text-sm">{message.text}</p>
                    </div>
                )}

                {/* Forget Password Form */}
                <form onSubmit={handleSubmit} className="w-full mt-[40px] flex flex-col gap-[35px]">
                    <div className="relative">
                        <input
                            className="formInput w-full"
                            name="email"
                            type="email"
                            placeholder="Email address"
                            required
                            disabled={loading}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="createAccountBtn w-full text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                {/* Loading Spinner */}
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            "Reset Password"
                        )}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ForgetPass;