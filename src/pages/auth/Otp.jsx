import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { images } from "../../assets/imgExport";
import { useNavigate, useLocation } from "react-router";
import { apiRequest } from "../../api/api";

const Otp = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" }); // success/error message
    const [email, setEmail] = useState("");
    const [resendCountdown, setResendCountdown] = useState(0);

    const navigate = useNavigate();
    const location = useLocation();
    const inputRefs = useRef([]);

    // Get email from navigation state or localStorage
    useEffect(() => {
        const extractEmail = () => {
            const stateEmail = location.state?.email;
            if (stateEmail) {
                setEmail(stateEmail);
            } else {
                setEmail("acb@domain.com"); // Fallback
            }
        };
        extractEmail();
    }, [location]);

    // Countdown timer for resend
    useEffect(() => {
        if (resendCountdown > 0) {
            const timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [resendCountdown]);

    // Common API call function
    const makeApiCall = async (endpoint, data) => {
        setLoading(true);
        setMessage({ text: "", type: "" });

        try {
            // Assume apiRequest is correctly configured to use the base URL
            const response = await apiRequest(endpoint, data);
            return { success: true, data: response };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.message || "Verification failed. Check your code and API endpoint."
            };
        } finally {
            setLoading(false);
        }
    };

    // Handle OTP input changes
    const handleOtpChange = (value, index) => {
        if (isNaN(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // Verify OTP Logic Correction
    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        const fullOtp = otp.join("");

        if (fullOtp.length !== 6) {
            setMessage({ text: "Please enter 6-digit OTP code", type: "error" });
            return;
        }

        const result = await makeApiCall("/api/verify_otp", { email, otp: fullOtp });

        if (result.success) {
            setMessage({ text: "Email verified successfully!", type: "success" });
            setTimeout(() => navigate("/user_create_succ"), 2000);
        } else {
            setMessage({ text: result.error, type: "error" });
        }
    };

    // Resend OTP
    const handleResendOtp = async () => {
        // '/api/resend_otp'
        const result = await makeApiCall("/api/resend_otp", { email });
        console.log(result);
        
        if (result.success) {
            setMessage({ text: "New OTP sent to your email!", type: "success" });
            setResendCountdown(60);
            setOtp(["", "", "", "", "", ""]);
            inputRefs.current[0]?.focus();
        } else {
            setMessage({ text: result.error, type: "error" });
        }
    };

    const canSubmit = !otp.includes("") && !loading;
    const canResend = resendCountdown === 0 && !loading;

    return (
        <div className="min-h-screen relative flex justify-center items-center">
            {/* Logo */}
            <div className="absolute top-0 left-0">
                <img className="px-8 py-6" src={images.appLogo} alt="logo" />
            </div>

            <div className="w-[90%] max-w-[480px] flex flex-col">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center mb-6 text-[#49AE44] hover:text-gray-800 transition-colors"
                >
                    <IoIosArrowBack className="text-xl mr-1" />
                    <span className="text-sm font-medium">Back</span>
                </button>

                {/* Header */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold text-gray-900">Please check your email!</h1>
                    <p className="text-sm text-gray-500">
                        We've emailed a 6-digit confirmation code to <span className="font-semibold">{email}</span>, please enter the code in below box to verify your email.
                    </p>
                </div>

                {/* Message Display */}
                {message.text && (
                    <div className={`mt-4 p-3 rounded-md border ${message.type === "error"
                        ? "bg-red-50 border-red-200 text-red-600"
                        : "bg-green-50 border-green-200 text-green-600"
                        }`}>
                        <p className="text-sm">{message.text}</p>
                    </div>
                )}

                {/* OTP Form */}
                <form className="mt-10" onSubmit={handleVerifyOtp}>
                    <div className="flex justify-between gap-2 mb-8">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={el => inputRefs.current[index] = el}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                disabled={loading}
                                className="otpInput text-center disabled:opacity-50"
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        disabled={!canSubmit}
                        className="createAccountBtn w-full font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Verifying..." : "Verify"}
                    </button>

                    <p className="mt-4 text-center text-sm text-gray-500">
                        Didn't receive the code?{" "}
                        <button
                            type="button"
                            onClick={handleResendOtp}
                            disabled={!canResend}
                            className="text-[#3ba334] hover:text-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {resendCountdown > 0 ? `Resend in ${resendCountdown}s` : "Resend Code"}
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Otp;