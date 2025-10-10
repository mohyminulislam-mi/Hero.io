import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,} from 'recharts';
import useData from '../Hooks/useData';

const Chart = () => {
    const { apps } = useData();
    console.log(apps);
    
  const appData = apps[0];

  if (!appData || !appData.ratings) return <p>Loading...</p>;

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-xl font-semibold mb-2">Ratings</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart layout="vertical" data={appData.ratings}barCategoryGap="20%">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FF8811" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
