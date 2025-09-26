import { Link, useNavigate } from "react-router";
import { images } from "../../assets/imgExport";
import axios from "axios";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const navigate = useNavigate();
  const toggle = () => setOpen(!open);
  const toggle2 = () => setOpen2(!open2);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Prepare data according to API requirements
    const apiData = {
      first_name: formData.get('firstName'),
      last_name: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('confirmPassword'),
      terms: formData.get('terms') === 'true' ? 'true' : 'false'
    };

    console.log('Sending data:', apiData);

    try {
      const res = await axios.post(
        "https://apitest.softvencefsd.xyz/api/register",
        apiData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      console.log('Registration successful:', res.data);

      // Success handling - Email OTP page-এ পাঠানো
      if (res.data) {
        localStorage.setItem('authToken', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data));
        navigate("/otp", {
          state: {
            email: apiData.email,
            userData: res.data
          }
        });

      }

    } catch (error) {
      console.error("Registration failed:", error);

      // Better error handling
      if (error.response) {
        // Server responded with error status
        console.error('Server error:', error.response.data);
        alert(`Error: ${error.response.data.message || 'Registration failed'}`);
      } else if (error.request) {
        // Network error
        console.error('Network error:', error.request);
        alert('Network error. Please check your connection.');
      } else {
        // Other errors
        console.error('Error:', error.message);
        alert('An error occurred. Please try again.');
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
        {/* heading */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="formHeading">Create your Account</h1>
          <p className="formDesc">When sports Meets smart Tech.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
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

          <div>
            <input
              name="email"
              className="formInput focus:outline-none w-full"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="relative">
            <input
              name="password"
              className="formInput focus:outline-none w-full"
              type={open ? "text" : "password"}
              placeholder="Password"
              required
              minLength="8"
            />
            <span onClick={toggle} className="absolute right-5 z-20 cursor-pointer top-[35%]">
              {
                open ? <FaEyeSlash />
                  : <IoEyeSharp />
              }
            </span>
          </div>

          <div className="relative">
            <input
              name="confirmPassword"
              className="formInput focus:outline-none w-full"
              type={open2 ? "text" : "password"}
              placeholder="Confirm Password"
              required
            />
            <span onClick={toggle2} className="absolute right-5 z-20 cursor-pointer top-[35%]">
              {
                open2 ? <FaEyeSlash />
                  : <IoEyeSharp />
              }
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <input
              name="terms"
              type="checkbox"
              className="cursor-pointer"
              required
            />
            <p className="text-[#212B36] text-[14px]">
              I agree to Tech Takes{" "}
              <span className="underline">Terms of Service</span> and{" "}
              <span className="underline">Privacy Policy.</span>
            </p>
          </div>

          <button
            type="submit"
            className="createAccountBtn text-[#fff] text-[16px] font-bold"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="relative border border-[#e5e8eb] my-4">
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-[#637381]">
              OR
            </span>
          </div>

          <div className="flex justify-center items-center gap-4 googleBtn py-[11px] cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M4.18173 10.2128C4.18173 9.56415 4.28946 8.94231 4.48173 8.35905L1.11627 5.78906C0.460366 7.12081 0.0908203 8.6214 0.0908203 10.2128C0.0908203 11.8028 0.459911 13.3025 1.11491 14.6333L4.47855 12.0583C4.28809 11.4778 4.18173 10.8582 4.18173 10.2128Z" fill="#FBBC05" />
              <path d="M10.0908 4.31204C11.4998 4.31204 12.7726 4.81133 13.7726 5.62835L16.6817 2.72338C14.9089 1.18012 12.6362 0.226929 10.0908 0.226929C6.13894 0.226929 2.74257 2.4869 1.11621 5.78903L4.48167 8.35901C5.25712 6.00508 7.46757 4.31204 10.0908 4.31204Z" fill="#EB4335" />
              <path d="M10.0908 16.1134C7.46757 16.1134 5.25712 14.4204 4.48167 12.0665L1.11621 14.636C2.74257 17.9386 6.13894 20.1986 10.0908 20.1986C12.5298 20.1986 14.8585 19.3325 16.6062 17.7098L13.4117 15.2401C12.5103 15.808 11.3753 16.1134 10.0908 16.1134Z" fill="#34A853" />
              <path d="M19.6363 10.2128C19.6363 9.62269 19.5454 8.98723 19.409 8.39716H10.0908V12.2553H15.4545C15.1863 13.5707 14.4563 14.582 13.4117 15.2402L16.6063 17.7098C18.4422 16.0059 19.6363 13.4677 19.6363 10.2128Z" fill="#4285F4" />
            </svg>
            <span className="googleBtnText">Continue with Google</span>
          </div>

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