import { useNavigate } from "react-router";
import { images } from "../assets/imgExport";
import { useAuth } from "../context/useAuth";

const Profile = () => {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();
    if (loading) return <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
    </div>
    console.log(user);
    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <p className="text-gray-600 mb-4">Please login to view profile</p>
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-[#3a8b36] cursor-pointer text-white font-bold px-6 py-2 rounded-lg"
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex justify-center items-center relative bg-gray-50">
            {/* logo */}
            <div className="absolute top-0 left-0">
                <img className="px-[32px] py-6" src={images.appLogo} alt="logo" />
            </div>

            {/* Profile Content */}
            <div className="w-full lg:w-[480px] px-4 py-8 ">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    {/* Profile Header */}
                    <button
                        onClick={() => navigate("/")}
                        className="text-green-600 hover:text-green-700 text-sm font-medium cursor-pointer"
                    >
                        Back to Home
                    </button>
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-xl font-bold text-green-600">
                                {user.email?.[0]?.toUpperCase() || "U"}
                            </span>
                        </div>
                        <h2 className="text-lg font-bold text-gray-900">
                            {user.first_name || user.last_name ? `${user.first_name || ''} ${user.last_name || ''}`.trim() : "User"}
                        </h2>
                        <p className="text-gray-600 text-sm">{user.email}</p>
                    </div>

                    {/* Profile Details */}
                    <div className="space-y-4">
                        <div className="border-b pb-4">
                            <h3 className="text-sm font-semibold text-gray-900 mb-2">Account Information</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Email:</span>
                                    <span className="text-sm font-medium">{user.data.email}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Status:</span>
                                    <span className="text-sm font-medium text-green-600">Active</span>
                                </div>
                            </div>
                        </div>

                        {/* Personal Information - Show only if available */}
                        {(user.first_name || user.last_name) && (
                            <div className="border-b pb-4">
                                <h3 className="text-sm font-semibold text-gray-900 mb-2">Personal Information</h3>
                                <div className="space-y-2">
                                    {user.first_name && (
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">First Name:</span>
                                            <span className="text-sm font-medium">{user.first_name}</span>
                                        </div>
                                    )}
                                    {user.last_name && (
                                        <div className="flex justify-between">
                                            <span className="text-sm text-gray-500">Last Name:</span>
                                            <span className="text-sm font-medium">{user.last_name}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Logout Button */}
                    <div className="mt-6">
                        <button
                            onClick={logout}
                            className="w-full cursor-pointer bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 font-medium"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;