import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Card } from "../base/card/Card";
import { ButtonSolid } from "../base/buttons/Button";
import { Calendar } from "lucide-react";

export const TenderBarChart = () => {
  const barchartData = [
    { name: "Jan", Submitted: 100, Awarded: 50, Rejections: 70 },
    { name: "Feb", Submitted: 40, Awarded: 20, Rejections: 80 },
    { name: "Mar", Submitted: 60, Awarded: 50, Rejections: 60 },
    { name: "Apr", Submitted: 80, Awarded: 60, Rejections: 50 },
    { name: "May", Submitted: 100, Awarded: 70, Rejections: 90 },
    { name: "Jun", Submitted: 50, Awarded: 40, Rejections: 10 },
    { name: "Jul", Submitted: 90, Awarded: 50, Rejections: 80 },
    { name: "Aug", Submitted: 70, Awarded: 40, Rejections: 50 },
    { name: "Sep", Submitted: 60, Awarded: 50, Rejections: 40 },
    { name: "Oct", Submitted: 50, Awarded: 60, Rejections: 30 },
  ];

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Monthly Tender Submissions & Outcomes</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={barchartData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" tick={{ fill: "#4B5563" }} />
          <YAxis tick={{ fill: "#4B5563" }} />
          <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "6px" }} />
          <Legend />
          <Bar dataKey="Submitted" fill="#091A7A" barSize={30} />
          <Bar dataKey="Awarded" fill="#008060" barSize={30} />
          <Bar dataKey="Rejections" fill="#E00000" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const TenderBreakdownChart = () => {
  const doughnutData = [
    { name: "Successful Tenders", value: 56, color: "#00A76F" },
    { name: "Pending Tenders", value: 40, color: "#001F87" },
    { name: "Rejected Tenders", value: 30, color: "#E53935" },
  ];

  return (
    <Card className="p-4 shadow-md rounded-2xl w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Tender Breakdown</h3>
        <ButtonSolid variant="outline" size="sm" className="flex items-center gap-2">
          <Calendar className="w-4 h-4" /> Filter Period
        </ButtonSolid>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={doughnutData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, value }) => `${value}`}
          >
            {doughnutData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ borderRadius: "10px", padding: "5px" }} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center mt-4 space-x-4">
        {doughnutData.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2 text-sm">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
            {entry.name}
          </div>
        ))}
      </div>
    </Card>
  );
};
