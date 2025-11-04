import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RatingsChart = ({ app }) => {
  if (!app?.ratings) return null;

  return (
    <div className="bg-white p-5 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-indigo-900 mb-4">Ratings</h2>

      <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={app.ratings}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
              labelStyle={{ color: "#333" }}
              itemStyle={{ color: "#00c9a7" }}
            />
            <Legend />
            <Bar dataKey="count" fill="#00c9a7" barSize={25} radius={[4, 4, 4, 4]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RatingsChart;
