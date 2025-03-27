const SyllabusAnalysis = () => {
  const syllabusData = [
    {
      title: "HTML Tools, Forms, History",
      percentage: 80,
      color: "bg-blue-500",
    },
    {
      title: "Tags & References in HTML",
      percentage: 60,
      color: "bg-orange-500",
    },
    {
      title: "Tables & References in HTML",
      percentage: 24,
      color: "bg-red-500",
    },
    { title: "Tables & CSS Basics", percentage: 96, color: "bg-green-500" },
  ];

  return (
    <div className="w-full  mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Syllabus Wise Analysis</h2>
      {syllabusData.map((item, index) => (
        <div key={index} className="mb-14">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium">{item.title}</span>
            <span
              className="text-sm font-semibold"
              style={{ color: item.color }}
            >
              {item.percentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`${item.color} h-2.5 rounded-full`}
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllabusAnalysis;
