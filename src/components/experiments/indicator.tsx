import React from 'react';
import { RadialBar, RadialBarChart, Tooltip } from 'recharts';

interface IndicatorProps {
  currentValue: number;
  max: number;
  min?: number;
  steps: number;
  labels: string[];
}

const Indicator: React.FC<IndicatorProps> = ({
  currentValue,
  max,
  min = 0,
 
}) => {
// Radio del semicírculo

 
const data = [{ name: 'Dato', uv: 10 }];

  const domain = [min, max];
  return (
    
<>
<RadialBarChart 
    width={500} 
    height={300} 
    cx={150} 
    cy={150} 
    innerRadius={20} 
    outerRadius={140} 
    barSize={10} 
    data={data} 
    startAngle={180} 
    endAngle={0}
  >
    <RadialBar  label={{ position: 'insideStart', fill: '#fff' }} background  dataKey='uv' />
    <Tooltip />
  </RadialBarChart></>
  );
};

export default Indicator;
