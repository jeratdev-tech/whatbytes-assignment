import { useState, useMemo } from "react";
import { FaHtml5 } from "react-icons/fa";

const UpdateScoresModal = ({ isOpen, onClose }) => {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);

  const memoizedValues = useMemo(
    () => ({ rank, percentile, score }),
    [rank, percentile, score]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl relative">
        <h2 className="text-2xl font-bold mb-4">Update Scores</h2>
        <FaHtml5 className="absolute top-4 right-4 text-orange-500 text-3xl" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-semibold flex items-center gap-2">
              {" "}
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                1
              </span>{" "}
              Update your <strong>Rank</strong>
            </span>
            <input
              type="number"
              className="border p-2 rounded w-full"
              value={memoizedValues.rank}
              onChange={(e) => setRank(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold flex items-center gap-2">
              {" "}
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                2
              </span>{" "}
              Update your <strong>Percentile</strong>
            </span>
            <input
              type="number"
              className="border p-2 rounded w-full"
              value={memoizedValues.percentile}
              onChange={(e) => setPercentile(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold flex items-center gap-2">
              {" "}
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                3
              </span>{" "}
              Update your <strong>Current Score (out of 15)</strong>
            </span>
            <input
              type="number"
              className="border p-2 rounded w-full"
              value={memoizedValues.score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-400 rounded text-gray-700"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2">
            Save <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const QuizInfoCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full h-full  bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 border border-gray-200 ">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
        alt="HTML5 Logo"
        className="w-12 h-12"
      />

      <div className="flex-1 pl-20px items-center justify-between">
        <h3 className="text-lg font-semibold">Hyper Text Markup Language</h3>
        <p className="text-sm text-gray-600">
          Questions: <span className="font-medium">08</span> | Duration:{" "}
          <span className="font-medium">15 mins</span> | Submitted on{" "}
          <span className="font-medium">5 June 2021</span>
        </p>
      </div>

      {/* Update Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-900"
      >
        Update
      </button>
      <UpdateScoresModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default QuizInfoCard;
