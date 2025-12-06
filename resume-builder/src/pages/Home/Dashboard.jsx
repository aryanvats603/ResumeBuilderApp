import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { CirclePlus, Sparkles, FileText } from 'lucide-react'
import moment from 'moment'
import ResumeSummaryCard from "../../components/Cards/ResumeSummaryCard";
import CreateResumeForm from "./CreateResumeForm";
import Modal from "../../components/Modal";

const Dashboard = () => {
  const navigate = useNavigate();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [allResumes, setAllResumes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllResumes = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(API_PATHS.RESUME.GET_ALL);
      setAllResumes(response.data);
    } catch (error) {
      console.error("Error fetching resumes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResumeCreated = () => {
    fetchAllResumes();
  };

  const handleCloseModal = () => {
    setOpenCreateModal(false);
  };

  useEffect(() => {
    fetchAllResumes();
  }, []);

  return (
    <DashboardLayout>
      <div className="px-4 md:px-0">
        {/* Welcome Header */}
        <div className="glass-card p-8 rounded-2xl mb-8 border border-purple-200/50 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Resumes
              </h1>
              <p className="text-gray-600 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                Create and manage your professional resumes
              </p>
            </div>
            <button
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 animate-gradient"
              onClick={() => setOpenCreateModal(true)}
            >
              <CirclePlus className="w-5 h-5" />
              Create New Resume
            </button>
          </div>
        </div>

        {/* Resume Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card rounded-2xl p-6 animate-pulse">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Create New Card */}
            <div
              className="h-[320px] flex flex-col gap-5 items-center justify-center glass-card rounded-2xl border-2 border-dashed border-purple-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer group transition-all duration-300 hover:scale-105"
              onClick={() => setOpenCreateModal(true)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                  <CirclePlus className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-lg text-gray-800 mb-1">Create New Resume</h3>
                <p className="text-sm text-gray-600">Start building your professional resume</p>
              </div>
            </div>

            {/* Resume Cards */}
            {allResumes?.map((resume, index) => (
              <ResumeSummaryCard
                key={resume?._id || `resume-${index}`}
                imgUrl={resume?.thumbnailLink || null}
                title={resume.title}
                lastUpdated={
                  resume?.updatedAt
                    ? moment(resume.updatedAt).format("Do MMM YYYY")
                    : ""
                }
                onSelect={() => navigate(`/resume/${resume?._id}`)}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && allResumes?.length === 0 && (
          <div className="glass-card rounded-3xl p-16 text-center border-2 border-dashed border-purple-300 mt-8">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">No Resumes Yet</h3>
              <p className="text-gray-600 mb-6">
                Start creating your first professional resume and take the first step towards your dream job!
              </p>
              <button
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 animate-gradient"
                onClick={() => setOpenCreateModal(true)}
              >
                <CirclePlus className="w-5 h-5" />
                Create Your First Resume
              </button>
            </div>
          </div>
        )}

        {/* Stats Card */}
        {allResumes && allResumes.length > 0 && (
          <div className="glass-card rounded-2xl p-6 mt-8 border border-purple-200/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  {allResumes.length}
                </div>
                <div className="text-sm text-gray-600 font-medium">Total Resumes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  {allResumes.filter(r => r.updatedAt && moment(r.updatedAt).isAfter(moment().subtract(7, 'days'))).length}
                </div>
                <div className="text-sm text-gray-600 font-medium">Updated This Week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-1">
                  100%
                </div>
                <div className="text-sm text-gray-600 font-medium">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-1">
                  ⭐ 4.9
                </div>
                <div className="text-sm text-gray-600 font-medium">Quality Score</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Modal
        isOpen={openCreateModal}
        onClose={handleCloseModal}
        hideHeader
      >
        <div>
          <CreateResumeForm 
            onResumeCreated={handleResumeCreated}
            onClose={handleCloseModal}
          />
        </div>
      </Modal>
    </DashboardLayout>
  );
};

export default Dashboard;