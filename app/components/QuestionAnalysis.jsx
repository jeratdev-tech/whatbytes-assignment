import { CircularProgress } from "@mui/material";

const QuestionAnalysis = () => {
  const score = 10;
  const total = 15;
  const percentage = (score / total) * 100;

  return (
    <div className="w-full h-full p-4 bg-white shadow-md rounded-lg border">
      <div className="flex justify-between text-gray-800 font-bold text-sm">
        <span>Question Analysis</span>
        <span className="text-blue-600 font-bold">
          {score}/{total}
        </span>
      </div>
      <p className="mt-2 text-gray-600 text-sm">
        You scored{" "}
        <b>
          {score} question correct out of {total}
        </b>
        . However, it still needs some improvements.
      </p>
      <div className="flex justify-center items-center mt-10 w-full">
        <div className="relative w-24 h-24 ">
          {/* <CircularProgress
            variant="determinate"
            value={100}
            size={15}
            thickness={10}
            className="text-gray-200 absolute"
          /> */}
          <CircularProgress
            variant="determinate"
            value={percentage}
            size={100}
            thickness={6}
            className="text-blue-500"
          />
          <div className="absolute inset-0 flex items-center justify-center text-2xl  ">
            🎯
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
