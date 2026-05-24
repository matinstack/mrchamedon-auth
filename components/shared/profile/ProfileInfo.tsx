"use client";
import { Bell, MessageSquareMore, Settings } from "lucide-react";
import AuthStepCount from "@/components/shared/profile/AuthStepCount";
import AuthForm from "@/components/shared/profile/AuthForm";
import { useState } from "react";
import SelfieForm from "./SelfieForm";
import NationalCodeForm from "@/components/shared/profile/NationalCodeForm";
import AddressForm from "@/components/shared/profile/AddressForm";

const ProfileInfo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: null,
    step2: null,
    step3: null,
    step4: null,
  });

  const handleNext = (step: number, data: any) => {
    setFormData((prev) => ({ ...prev, [`step${step}`]: data }));
    setCurrentStep(step + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleFinalSubmit = (data: any) => {
    setFormData((prev) => ({ ...prev, step4: data }));
    console.log("FORM DATA ::", {
      ...formData,
      step4: data,
    });
  };

  return (
    <div className="flex flex-col px-3 mx-auto">
      {/* breadcrumb */}
      <div>
        <div className="bg-white shadow-sm rounded-lg justify-between flex flex-row-reverse h-12 items-center mt-6 px-4">
          <div className="flex items-center gap-1">
            <span className="relative border-r px-4">
              <MessageSquareMore size={18} />
              <span className="absolute -top-2.5 right-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[10px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center">
                ۰
              </span>
            </span>
            <span className="relative border-r px-4">
              <Bell size={18} />
              <span className="absolute -top-2.5 right-1.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-[10px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center">
                ۰
              </span>
            </span>
            <span className="relative border-r px-4">
              <Settings size={18} />
            </span>
          </div>
          <p className="text-[12px] font-semibold text-gray-500 flex items-center gap-1">
            <span className="lg:hidden relative border-l pl-2 ml-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </span>
            <span>خانه</span>
            <span>/</span>
            <span>حساب کاربری</span>
            <span>/</span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              احراز هویت
            </span>
          </p>
        </div>
      </div>

      {/* step counter */}
      <div className="bg-white shadow-sm rounded-lg justify-between flex flex-row-reverse h-12 items-center my-6 px-4 overflow-x-auto max-w-full">
        <AuthStepCount currentStep={currentStep} />
      </div>

      {/* فرم مرحله فعلی */}
      <div className="bg-white min-h-[500px] rounded-lg shadow-sm">
        {currentStep === 1 && (
          <AuthForm
            onNext={(data) => handleNext(1, data)}
            defaultValues={formData.step1}
          />
        )}

        {currentStep === 2 && (
          <AddressForm
            onNext={(data) => handleNext(2, data)}
            onPrev={handlePrev}
            defaultValues={formData.step2}
          />
        )}

        {currentStep === 3 && (
          <NationalCodeForm
            onNext={(data) => handleNext(3, data)}
            onPrev={handlePrev}
            defaultValues={formData.step3}
          />
        )}

        {currentStep === 4 && (
          <SelfieForm
            onPrev={handlePrev}
            onSubmit={handleFinalSubmit}
            defaultValues={formData.step4}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
