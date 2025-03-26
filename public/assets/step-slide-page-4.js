import { useState } from "react";

const StepsSection = () => {
  const steps = [
    { 
      step: "STEP 1", 
      text: "Setup Account", 
      image: "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Step+1" 
    },
    { 
      step: "STEP 2", 
      text: "List Hostel / Enrollee in hostel", 
      image: "https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Step+2" 
    },
    { 
      step: "STEP 3", 
      text: "Setup Profile and Enjoy", 
      image: "https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Step+3" 
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="lg:hidden flex flex-col items-center overflow-hidden relative w-full h-auto">
      {steps.map((item, index) => (
        <div
          key={index}
          className={` p-6 rounded-lg transition-opacity duration-700 transform ${
            index === currentStep ? "opacity-100 scale-100" : "opacity-0 scale-90 hidden"
          }`}
        >
          {/* Image for Each Step */}
          <div className="w-72 h-48 rounded-3xl overflow-hidden shadow-lg mx-auto">
            <img src={item.image} alt={item.step} className="w-full h-full object-cover" />
          </div>

          <div className="text-center mt-4">
            <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
              {item.step}
            </h4>
            <p className="text-lg font-medium text-gray-500">{item.text}</p>
          </div>

          {/*  Buttons: Previous & Next */}
          <div className="flex justify-between mt-4">
            <button
              onClick={goToPreviousStep}
              disabled={currentStep === 0}
              className="px-6 py-2 hover:bg-blue-500 bg-gray-400 text-white font-semibold rounded-full shadow-md "
            >
              ← Previous
            </button>

            {currentStep < steps.length - 1 && (
              <button
                onClick={goToNextStep}
                className="px-6 py-2 bg-gray-400 hover:bg-blue-500 text-white font-semibold rounded-full shadow-md"
              >
                Next Step →
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepsSection;
