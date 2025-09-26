import { Link, useNavigate } from "react-router";
import { images } from "../../assets/imgExport";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../context/useAuth";

const Register = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const { registerUser } = useAuth()
  const navigate = useNavigate();

  const toggle = () => setOpen(!open);
  const toggle2 = () => setOpen2(!open2);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // API format as required
    const apiData = {
      first_name: formData.get("firstName"),
      last_name: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      password_confirmation: formData.get("confirmPassword"),
      terms: formData.get("terms") ? "true" : "false",
    };

    try {
      const res = await registerUser(apiData); 

      if (res) {
        // 👇 Navigate to OTP page
        navigate("/otp", {
          state: {
            email: apiData.email,
            userData: res.user, // backend response অনুযায়ী adjust করো
          },
        });
      }
    } catch (error) {
      console.error("Registration failed:", error);

      if (error.response) {
        alert(`Error: ${error.response.data.message || "Registration failed"}`);
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen relative flex justify-center items-center">
      {/* logo */}
      <div className="absolute top-0 left-0">
        <img className="px-[32px] py-6" src={images.appLogo} alt="logo" />
      </div>

      {/* form */}
      <div className="flex flex-col justify-center items-center w-[480px] gap-[64px]">
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="formHeading">Create your Account</h1>
          <p className="formDesc">When sports Meets smart Tech.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
          {/* First + Last Name */}
          <div className="flex w-full gap-4">
            <div className="relative w-full">
              <span className="absolute left-4 -top-3 text-[#919EAB] bg-[#fff] px-2">
                First Name
              </span>
              <input
                name="firstName"
                className="formInput focus:outline-none"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
            <div className="relative w-full">
              <input
                name="lastName"
                className="formInput focus:outline-none w-full"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              className="formInput focus:outline-none w-full"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <input
              name="password"
              className="formInput focus:outline-none w-full"
              type={open ? "text" : "password"}
              placeholder="Password"
              required
              minLength="8"
            />
            <span
              onClick={toggle}
              className="absolute right-5 z-20 cursor-pointer top-[35%]"
            >
              {open ? <FaEyeSlash /> : <IoEyeSharp />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              name="confirmPassword"
              className="formInput focus:outline-none w-full"
              type={open2 ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            <span
              onClick={toggle2}
              className="absolute right-5 z-20 cursor-pointer top-[35%]"
            >
              {open2 ? <FaEyeSlash /> : <IoEyeSharp />}
            </span>
          </div>

          {/* Terms */}
          <div className="flex gap-2 items-center">
            <input name="terms" type="checkbox" className="cursor-pointer" required />
            <p className="text-[#212B36] text-[14px]">
              I agree to Tech Takes{" "}
              <span className="underline">Terms of Service</span> and{" "}
              <span className="underline">Privacy Policy.</span>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="createAccountBtn text-[#fff] text-[16px] font-bold"
          >
            Create Account
          </button>

          <p className="text-[#212B36] text-center">
            Already have an account?{" "}
            <Link className="text-[#49AE44] font-semibold" to="/login">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
