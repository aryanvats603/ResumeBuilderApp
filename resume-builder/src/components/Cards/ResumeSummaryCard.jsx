import React, { useEffect, useState } from "react";
import { getLightColorFromImage } from "../../utils/helper";
import { Calendar, Eye } from "lucide-react";

const ResumeSummaryCard = ({ imgUrl, title, lastUpdated, onSelect }) => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (imgUrl) {
      getLightColorFromImage(imgUrl)
        .then((color) => {
          setBgColor(color);
        })
        .catch(() => {
          setBgColor("#ffffff");
        });
    }
  }, [imgUrl]);

  return (
    <div
      className="h-[320px] flex flex-col items-center justify-between glass-card hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden cursor-pointer group transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* Preview Section */}
      <div className="w-full flex-1 p-3 relative">
        {imgUrl ? (
          <>
            <img
              src={imgUrl}
              alt={title}
              className="w-full h-full object-cover rounded-xl shadow-md transition-transform duration-500 group-hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${bgColor} 0%, #ffffff 100%)`
              }}
            />
            {/* Hover Overlay */}
            <div 
              className={`absolute inset-3 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent rounded-xl flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="text-center">
                <Eye className="w-12 h-12 text-white mx-auto mb-2 animate-pulse" />
                <p className="text-white font-semibold text-sm">View Resume</p>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
            <span className="text-purple-400 text-sm font-medium">No Preview Available</span>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="w-full bg-white/90 backdrop-blur-md px-4 py-4 flex-shrink-0 border-t border-purple-100">
        <h5 className="text-sm font-bold text-gray-800 truncate overflow-hidden whitespace-nowrap mb-2 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h5>
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
          <Calendar className="w-3.5 h-3.5 text-purple-500" />
          <span>Updated: {lastUpdated}</span>
        </div>
      </div>

      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px]">
          <div className="w-full h-full rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSummaryCard;