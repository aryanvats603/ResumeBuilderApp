import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { LogOut, Crown, Star } from "lucide-react";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handelLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className="flex items-center gap-3 glass-card px-4 py-2 hover:shadow-2xl hover:scale-105 transition-all duration-300">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={user.profileImageUrl}
            alt="Profile"
            className="relative w-12 h-12 bg-gray-300 rounded-full ring-2 ring-white shadow-lg object-cover"
          />
          {user.subscriptionPlan === 'premium' && (
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1 shadow-md">
              <Crown className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="text-[15px] font-bold text-gray-800 leading-tight">
              {user.name || ""}
            </div>
            {user.subscriptionPlan === 'premium' ? (
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                <Star className="w-3 h-3 fill-white" />
                Premium
              </div>
            ) : (
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2.5 py-1 rounded-full text-xs font-bold shadow-md">
                Basic
              </div>
            )}
          </div>
          <button
            className="text-purple-600 text-sm font-semibold cursor-pointer hover:text-purple-800 flex items-center gap-1 group transition-colors duration-200"
            onClick={handelLogout}
          >
            <LogOut className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;