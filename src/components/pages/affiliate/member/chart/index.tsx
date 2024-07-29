// components/LineChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// ลงทะเบียน components ที่จำเป็น
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart: React.FC = () => {
  const data = {
    labels: ["สมาชิดใหม่", "จำนวนคลิกลิงค์แนะนำ", "ยอดแอคทีฟ"],
    datasets: [
      {
        label: "จำนวน",
        data: [0, 0, 0],
        fill: false,
        backgroundColor: "#F1BD59",
        borderColor: "#F1BD59",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} />

      <div className="bg-black flex justify-between items-center overflow-x-scroll text-[10px] text-[#99918e] p-1">
        <button className="text-center py-[6px] px-7 rounded-[6px] hover:bg-[#6c757d]">วันนี้</button>
        <button className="text-center py-[6px] px-7 rounded-[6px] hover:bg-[#6c757d]">7วันที่แล้ว</button>
        <button className="text-center py-[6px] px-7 rounded-[6px] hover:bg-[#6c757d]">เดือนที่แล้ว</button>
        <button className="text-center py-[6px] px-7 rounded-[6px] hover:bg-[#6c757d]">ทั้งหมด</button>
      </div>
    </>
  );
};

export default Chart;
