import React, { useState, useEffect } from "react";
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";
import { FileText, Sparkles } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`h-20 backdrop-blur-xl bg-white/70 border-b transition-all duration-300 py-3 px-4 md:px-0 sticky top-0 z-30 ${
        scrolled 
          ? 'border-purple-200/50 shadow-xl shadow-purple-500/10' 
          : 'border-white/30'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to='/dashboard' className="group">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight flex items-center gap-2">
                Resume Builder
                <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
              </h2>
              <p className="text-xs text-gray-600 font-medium">Create stunning resumes effortlessly</p>
            </div>
          </div>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  );
};

export default Navbar;