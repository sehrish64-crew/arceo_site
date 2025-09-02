'use client';

import React from 'react';

const PatientSummary = () => {
  const data = [
    { label: 'New', value: 100, color: '#0A3A63' },
    { label: 'Existing', value: 100, color: '#82D1D1' },
    { label: 'Total', value: 100, color: '#D4EDED' },
  ];

  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className="w-full p-2">
      {/* Title */}
      <h3 className="text-[#101828] text-xl font-medium mb-8">Total Patients</h3>

      {/* Stats with vertical dividers */}
      <div className="flex justify-between mb-[200px]">
        {data.map((item, index) => (
          <React.Fragment key={item.label}>
            <div className="flex-1 text-center">
              {/* Dot and label */}
              <div className="flex items-center justify-center gap-2 mb-1">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <p className="text-sm text-[#64748B]">{item.label}</p>
              </div>

              {/* Value */}
              <p className="text-[#0F172A] text-2xl font-semibold">{item.value}</p>
            </div>

            {/* Divider except after last item */}
            {index < data.length - 1 && (
              <div className="border-r border-[#E2E8F0] h-14 self-center"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Segmented bar */}
      <div className="w-full h-[50px] overflow-hidden flex">
        {data.map((item, index) => (
          <div

            key={item.label}
            style={{
              width: `${(item.value / total) * 100}%`,
              backgroundColor: item.color,
            }}
            className={index !== 0 ? '' : ''}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PatientSummary;
