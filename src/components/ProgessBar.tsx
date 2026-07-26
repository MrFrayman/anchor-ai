import React from "react";

interface ProgressBarProps {
  progress?: number;
  width?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 0,
  width = "w-full",
}) => {
  return (
    <div className={`${width} bg-[#e8e8e8] h-0.5`}>
      <div
        className="bg-[#fb4a24] h-0.5 transition-all duration-800 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
