import React from 'react';
import { TenderBarChart, TenderBreakdownChart } from './Charts';

export default function ChartHead() {
  return (
    <div>
      <div className="flex gap-5">
        <TenderBarChart />
        <TenderBreakdownChart />
      </div>
    </div>
  );
}
