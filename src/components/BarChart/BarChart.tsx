import React from 'react';
import './BarChart.scss';
import cm from 'classnames';

interface BarChartProps {
  points: number[];
  className?: string;
}

export const BarChart: React.FC<BarChartProps> = ({ points, className }) => (
  <div className={cm(className, 'bar-chart')}>
    {points.map((point, i) => (
      // индекс в ключе, потому что статический список
      <div className="bar" key={i} style={{ height: `${point}%` }}>
        <p className="bar__text">{point}</p>
      </div>
    ))}
  </div>
);
