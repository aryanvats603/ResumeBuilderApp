import React, { useContext, useState, useEffect } from "react";
import HERO_IMG from "../assets/hero-img.png";
import { useNavigate, useLocation } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Modal from "../components/Modal";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";
import { 
  Edit3, 
  Download, 
  Eye, 
  Star, 
  Check, 
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Zap,
  Shield,
  Smartphone,
  FileText,
  Sparkles,
  Layout,
  Palette,
  Target,
  CheckCircle2,
  Play
} from "lucide-react";
import toast from "react-hot-toast";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const verified = params.get("emailVerified");
    if (!verified) return;

    const handledKey = "emailVerifiedToastHandled";
    if (sessionStorage.getItem(handledKey) === "true") {
      if (location.search) navigate(location.pathname, { replace: true });
      return;
    }

    const reason = params.get("reason");
    if (verified === "success") {
      toast.success("Email verified successfully. You can now log in.");
    } else if (verified === "failed") {
      toast.error(reason ? decodeURIComponent(reason) : "Email verification failed. Please request a new link.");
    }

    sessionStorage.setItem(handledKey, "true");
    navigate(location.pathname, { replace: true });
  }, [location.search, navigate]);

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  const features = [
    {
      icon: <Layout className="w-8 h-8 text-blue-600" />,
      title: "Professional Templates",
      description: "Choose from 20+ ATS-friendly templates designed by HR experts and hiring managers."
    },
    {
      icon: <Edit3 className="w-8 h-8 text-purple-600" />,
      title: "Smart Editor",
      description: "Intuitive editing interface with AI-powered content suggestions and grammar checking."
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: "Real-Time Preview",
      description: "See exactly how your resume looks while editing. What you see is what you get."
    },
    {
      icon: <Palette className="w-8 h-8 text-pink-600" />,
      title: "Custom Styling",
      description: "Customize colors, fonts, and layouts to match your personal brand perfectly."
    },
    {
      icon: <Download className="w-8 h-8 text-orange-600" />,
      title: "Multiple Formats",
      description: "Download as PDF, Word, or share with a custom link. All formats ATS-optimized."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: "100% Secure",
      description: "Bank-level encryption protects your data. We never share your information."
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: "Beat The ATS",
      description: "Our templates are optimized to pass Applicant Tracking Systems used by 98% of Fortune 500 companies.",
      stat: "98% ATS Pass Rate"
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-600" />,
      title: "Save Time",
      description: "Create a professional resume in under 10 minutes with our intuitive builder and smart templates.",
      stat: "10 Min Average"
    },
    {
      icon: <CheckCircle2 className="w-12 h-12 text-green-600" />,
      title: "Get Hired Faster",
      description: "Users with our professional resumes get 2.5x more interview callbacks than average.",
      stat: "2.5x More Interviews"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Choose Your Template",
      description: "Select from our collection of professional, ATS-friendly templates designed by experts.",
      icon: <Layout className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Fill In Your Details",
      description: "Add your experience, education, and skills using our smart form with helpful suggestions.",
      icon: <Edit3 className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Customize & Preview",
      description: "Adjust colors, fonts, and layout while seeing real-time preview of your resume.",
      icon: <Palette className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Download & Apply",
      description: "Download your resume in PDF or Word format and start applying to your dream jobs!",
      icon: <Download className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Google",
      content: "I got 3 interview calls within a week of using this resume builder. The templates are modern and the ATS optimization really works!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "Microsoft",
      content: "Best resume builder I've used. The real-time preview and customization options are incredible. Landed my dream job!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      company: "Apple",
      content: "The templates are beautiful and professional. My resume stands out now and I got hired at my top choice company!",
      rating: 5,
      avatar: "ED"
    }
  ];

  const pricingFeatures = {
    free: [
      "1 Professional Template",
      "Basic Editor",
      "PDF Download",
      "Email Support"
    ],
    premium: [
      "20+ Premium Templates",
      "AI Writing Assistant",
      "Multiple Export Formats",
      "Custom Color Schemes",
      "Priority Support",
      "Resume Analytics",
      "Cover Letter Builder",
      "LinkedIn Integration"
    ]
  };

  return (
    <div className="w-full min-h-full relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10"></div>
      
      {/* Floating gradient orbs */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float -z-10"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float -z-10" style={{animationDelay: '1s'}}></div>
      <div className="fixed top-1/2 left-1/3 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl animate-float -z-10" style={{animationDelay: '2s'}}></div>
      
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-white/30 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl shadow-lg">
                  <FileText className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent flex items-center gap-2">
                Resume Builder
                <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
              </span>
            </div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-sm md:text-base animate-gradient"
                onClick={() => setOpenAuthModal(true)}
              >
                Get Started Free
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section - Completely New Layout */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Centered Hero Content */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full text-sm font-medium mb-6 hover:scale-105 transition-transform">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                  Trusted by 50,000+ professionals worldwide
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Create Your Perfect Resume
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  In Just 10 Minutes
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Professional resume templates, AI-powered writing assistance, and ATS optimization. 
                <span className="font-semibold text-purple-600"> Everything you need to land your dream job.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-3 group animate-gradient"
                  onClick={handleCTA}
                >
                  <Sparkles className="w-5 h-5" />
                  Start Building Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="glass-card border-2 border-purple-300 text-gray-800 px-10 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg">
                  Watch Demo
                </button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
                {[
                  { number: "50K+", label: "Resumes Created" },
                  { number: "2.5x", label: "More Interviews" },
                  { number: "98%", label: "ATS Pass Rate" },
                  { number: "4.9★", label: "User Rating" }
                ].map((stat, index) => (
                  <div key={index} className="glass-card p-4 rounded-xl hover:scale-105 transition-transform">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.number}</div>
                    <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image with Floating Cards */}
            <div className="relative max-w-4xl mx-auto">
              <div className="glass-card p-6 rounded-3xl shadow-2xl animate-float">
                <img
                  src={HERO_IMG}
                  alt="Resume Builder Preview"
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
              
              {/* Floating Feature Cards */}
              <div className="hidden lg:block absolute -left-20 top-20 glass-card p-4 rounded-xl shadow-xl max-w-[200px] animate-float" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-sm">ATS Optimized</div>
                </div>
                <p className="text-xs text-gray-600">Passes all applicant tracking systems</p>
              </div>

              <div className="hidden lg:block absolute -right-20 bottom-20 glass-card p-4 rounded-xl shadow-xl max-w-[200px] animate-float" style={{animationDelay: '1s'}}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-sm">10 Min Build</div>
                </div>
                <p className="text-xs text-gray-600">Create your resume in minutes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - NEW */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose Our 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Resume Builder?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              More than just a template. Get real results with our proven system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="glass-card p-8 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  {benefit.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - NEW */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How It 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Works</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Four simple steps to your perfect resume
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {howItWorks.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <div className="flex items-start gap-4 mt-2">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-purple-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Job Seekers</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, customize, and download your perfect resume
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl w-fit group-hover:scale-110 group-hover:rotate-3 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section - UPDATED WITH RESUME TUTORIAL */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Learn How to Write a 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Winning Resume</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Watch this expert guide on creating professional resumes that get you hired
              </p>
            </div>
            
            <div className="glass-card rounded-3xl shadow-2xl p-6 md:p-10 hover:scale-[1.02] transition-transform duration-500">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl relative group">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Tt08KmFfIYQ"
                  title="How to Write a Winning Resume"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Resume Writing Masterclass</h3>
                <p className="text-gray-600 mb-4">Learn professional resume writing strategies from industry experts</p>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="font-medium">ATS Optimization Tips</span>
                  </div>
                  <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Professional Formatting</span>
                  </div>
                  <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Expert Strategies</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA After Video */}
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 mb-6">Ready to create your professional resume?</p>
              <button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg inline-flex items-center gap-3 animate-gradient"
                onClick={handleCTA}
              >
                <Sparkles className="w-5 h-5" />
                Start Building Now - It's Free!
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg md:text-xl text-gray-600">Choose the plan that works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="glass-card p-8 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Free</h3>
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">₹0</div>
                <p className="text-gray-600 font-medium">Perfect for getting started</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pricingFeatures.free.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 py-4 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300"
                onClick={handleCTA}
              >
                Get Started Free
              </button>
            </div>

            {/* Premium Plan */}
            <div className="relative glass-card p-8 rounded-3xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-purple-300">
              <div className="absolute -top-4 right-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                🔥 Most Popular
              </div>
              
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Premium</h3>
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient">₹999</div>
                <p className="text-gray-600 font-medium">One-time payment, lifetime access</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {pricingFeatures.premium.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 animate-gradient"
                onClick={handleCTA}
              >
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Loved by Professionals</h2>
            <p className="text-lg md:text-xl text-gray-600">Join thousands of happy users who landed their dream jobs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-purple-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto glass-card-dark p-12 md:p-16 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to Land Your Dream Job?</h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">Join 50,000+ professionals who created winning resumes</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
                onClick={handleCTA}
              >
                <Sparkles className="w-6 h-6" />
                Start Building Free
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            <p className="mt-6 text-white/80 text-sm">No credit card required • Free forever • Premium from ₹999</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card-dark text-white py-16 relative border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-lg">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ResumeBuilder
                </span>
              </div>
              <p className="text-white/70 mb-4 text-sm">
                Build professional resumes that get you hired. Trusted by professionals worldwide.
              </p>
              <div className="flex space-x-3">
                {[Users, TrendingUp, Award].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 cursor-pointer transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                ))}
              </div>
            </div>
            
            {[
              { title: "Product", items: ["Templates", "Features", "Pricing", "Examples"] },
              { title: "Support", items: ["Help Center", "Contact Us", "FAQ", "Tutorials"] },
              { title: "Company", items: ["About", "Blog", "Careers", "Privacy"] }
            ].map((section, i) => (
              <div key={i}>
                <h3 className="font-bold mb-4 text-white">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/70 text-sm">&copy; 2024 ResumeBuilder. Made with ❤️ for professionals worldwide.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;