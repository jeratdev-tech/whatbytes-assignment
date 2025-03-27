import { useState, useMemo } from "react";
import { FaHtml5 } from "react-icons/fa";

const UpdateScoresModal = ({ isOpen, onClose, updateStats }) => {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);

  const memoizedValues = useMemo(
    () => ({ rank, percentile, score }),
    [rank, percentile, score]
  );

  const handleSave = () => {
    updateStats({ rank, percentile, score }); // This updates the Dashboard state
    onClose(); // Close modal after saving
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-xl relative">
        <h2 className="text-2xl font-bold mb-4">Update Scores</h2>
        <FaHtml5 className="absolute top-4 right-4 text-orange-500 text-3xl" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-semibold flex items-center gap-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                1
              </span>{" "}
              Update your <strong>Rank</strong>
            </span>
            <input
              type="number"
              className="border p-2 rounded w-full"
              value={memoizedValues.rank}
              onChange={(e) => setRank(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold flex items-center gap-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                2
              </span>{" "}
              Update your <strong>Percentile</strong>
            </span>
            <input
              type="number"
              className="border p-2 rounded w-full"
              value={memoizedValues.percentile}
              onChange={(e) => setPercentile(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold flex items-center gap-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                3
              </span>{" "}
              Update your <strong>Current Score (out of 15)</strong>
            </span>
            <input
              type="number"
              className="border p-2 rounded w-full"
              value={memoizedValues.score}
              onChange={(e) => setScore(Number(e.target.value))}
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
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2"
          >
            Save <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const QuizInfoCard = ({ updateStats }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 border border-gray-200">
      {/* Logo */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
        alt="HTML5 Logo"
        className="w-10 h-10 sm:w-12 sm:h-12"
      />

      {/* Quiz Info */}
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg font-bold">Hyper Text Markup Language</h3>
        <p className="text-sm text-gray-600">
          <span className="font-medium">
            Questions: 08 | Duration: 15 mins | Submitted on 6 July 2021
          </span>
        </p>
      </div>

      {/* Update Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-900 sm:self-auto"
      >
        Update
      </button>

      {/* Modal Component */}
      <UpdateScoresModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        updateStats={updateStats}
      />
    </div>
  );
};

export default QuizInfoCard;
