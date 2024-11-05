import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer
} from "recharts";

export default function App() {
  const data = useLoaderData();

  return (
 <div>
     <div className="bg-violetPrimary w-full">
        <div className="flex container w-11/12 flex-col items-center  max-w-2xl mx-auto space-y-32 pt-12 pb-20">
          <div className="text-center text-white ">
            <h2 className="font-bold text-3xl">Statistics</h2>
            <p>
            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
          </div>
   
        </div>
      </div>
      <div className="container w-11/12 my-12 mx-auto">
        <p className="text-2xl font-bold ">Statistics</p>
      </div>
       <div className="container w-11/12 mx-auto" style={{ width: "100%", height: "400px" }}>
      <ResponsiveContainer>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="product_title" />
          <YAxis dataKey="price" /> {/* Ensure price is a numeric value */}
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="category" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="category" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
          <Scatter dataKey="product_title" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
 </div>
  );
}
