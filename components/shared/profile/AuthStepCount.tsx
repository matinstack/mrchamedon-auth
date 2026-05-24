"use client";

const AuthStepCount = ({ currentStep = 1 }) => {
  const steps = [
    { id: 1, title: "اطلاعات فردی" },
    { id: 2, title: "آدرس" },
    { id: 3, title: "کد ملی" },
    { id: 4, title: "ویدئو سلفی" },
  ];

  return (
    <div className="flex items-center justify-center gap-0 w-full max-w-3xl mx-auto">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex items-center gap-2">
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 flex-shrink-0 ${
                currentStep > step.id
                  ? "text-white bg-blue-500 shadow-md"
                  : currentStep === step.id
                    ? "text-white bg-orange-400 shadow-md"
                    : "bg-gray-400 text-white"
              }`}
            >
              {currentStep > step.id ? "✓" : step.id}
            </span>
            <span
              className={`text-sm whitespace-nowrap ${
                currentStep === step.id
                  ? "text-orange-500 font-semibold"
                  : currentStep > step.id
                    ? "text-gray-800 font-medium"
                    : "text-gray-500"
              }`}
            >
              {step.title}
            </span>
          </div>

          {index < steps.length - 1 && (
            <>
              <div
                className={`hidden min-[675px]:block mx-3 w-12 h-0.5 rounded-full ${
                  currentStep > step.id ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>

              <div
                className={`min-[675px]:hidden mx-2 w-2 h-2 rounded-full flex-shrink-0 ${
                  currentStep > step.id ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default AuthStepCount;
