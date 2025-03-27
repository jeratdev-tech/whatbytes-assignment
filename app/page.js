"use client";

import Image from "next/image";
import Link from "next/link";
import IconMenu from "./components/IconMenu";
import Navbar from "./components/Navbar";
import QuizInfoCard from "./components/QuizInfoCard";
import Statistics from "./components/Statistics";
import ComparisonGraph from "./components/ComparisonGraph";
import SyllabusAnalysis from "./components/SyllabusAnalysis";
import QuestionAnalysis from "./components/QuestionAnalysis";
import { useState } from "react";

export default function Dashboard() {
  // Centralized state for statistics
  const [stats, setStats] = useState({ rank: 1, percentile: 30, score: 10 });

  // Function to update statistics when admin updates QuizInfoCard
  const updateStats = (newStats) => {
    setStats((prevStats) => ({ ...prevStats, ...newStats }));
  };

  return (
    <div className="h-screen flex">
      {/* LEFT NAVIGATION */}
      <div className="w-[10%] md:w-[8%] lg:w-[13%] xl:w-[14%] p-4">
        <IconMenu />
      </div>

      {/* MAIN CONTENT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        <div className="p-4 flex gap-4 flex-col md:flex-row">
          {/* MAIN SECTION */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            <QuizInfoCard stats={stats} updateStats={updateStats} />
            <Statistics
              rank={stats.rank}
              percentile={stats.percentile}
              score={stats.score}
            />
            <ComparisonGraph />
          </div>

          {/* SIDEBAR SECTION */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <SyllabusAnalysis />
            <QuestionAnalysis />
          </div>
        </div>
      </div>
    </div>
  );
}
