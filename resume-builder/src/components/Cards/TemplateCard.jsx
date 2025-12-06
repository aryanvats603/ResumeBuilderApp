import React, { useState } from "react";
import { Lock, CheckCircle2, Zap } from "lucide-react";

const TemplateCard = ({ 
  thumbnailImg, 
  isSelected, 
  onSelect, 
  isLocked = false, 
  onLockedClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isLocked) {
      onLockedClick && onLockedClick();
    } else {
      onSelect();
    }
  };

  return (
    <div
      className={`h-auto md:h-[320px] flex flex-col items-center justify-between glass-card overflow-hidden cursor-pointer relative group transition-all duration-300 hover:shadow-2xl ${
        isSelected 
          ? "ring-4 ring-purple-500 ring-offset-2 scale-105 shadow-2xl shadow-purple-500/40" 
          : "hover:scale-105"
      }`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Template Preview */}
      <div className="relative w-full h-full">
        {thumbnailImg ? (
          <>
            <img 
              src={thumbnailImg} 
              alt="Template" 
              className={`w-full h-full object-cover transition-all duration-500 ${
                isLocked ? "blur-sm scale-110" : "group-hover:scale-105"
              }`}
            />
            
            {/* Selected Badge */}
            {isSelected && !isLocked && (
              <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-xl flex items-center gap-1 animate-pulse">
                <CheckCircle2 className="w-4 h-4 fill-white" />
                Selected
              </div>
            )}

            {/* Hover Overlay for unlocked templates */}
            {!isLocked && (
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-600/50 to-transparent transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <button className="w-full bg-white text-purple-600 font-bold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4 fill-purple-600" />
                    Use This Template
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Template</span>
          </div>
        )}
      </div>
      
      {/* Locked Overlay */}
      {isLocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900/95 via-purple-800/90 to-pink-900/95 backdrop-blur-md">
          <div className="text-center space-y-4 p-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="relative bg-white rounded-full p-6 shadow-2xl">
                <Lock className="text-purple-600 w-12 h-12" />
              </div>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-2">Premium Template</h3>
              <p className="text-purple-200 text-sm font-medium mb-4">
                Upgrade to unlock this template
              </p>
              <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white font-bold px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
                <Zap className="w-4 h-4 fill-white" />
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animated selection border */}
      {isSelected && (
        <div className="absolute inset-0 rounded-2xl pointer-events-none">
          <div className="absolute inset-0 rounded-2xl animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75"></div>
        </div>
      )}
    </div>
  );
};

export default TemplateCard;