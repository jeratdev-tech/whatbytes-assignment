import { Trophy, Clipboard, CheckCircle } from "lucide-react";

export default function Statistics({ rank, percentile, score }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full mx-auto">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-center sm:text-left">
        Quick Statistics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3">
          <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold">{rank}</span>
            <span className="text-gray-500 text-xs sm:text-sm">YOUR RANK</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Clipboard className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500" />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold">{percentile}%</span>
            <span className="text-gray-500 text-xs sm:text-sm">PERCENTILE</span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold text-green-600">
              {score} / 15
            </span>
            <span className="text-gray-500 text-xs sm:text-sm">
              CORRECT ANSWERS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
