"use client"

import React from "react"

const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
const titles = [
  "Doctor",
  "Patient",
  "Inventory",
  "Staff",
  "Clinic",
  "Room",
  "Appointment",
  "Bill",
  "Quote",
  "Note"
]

const getColorForValue = value => {
  if (value === null) return "#E2E2E2"
  if (value > 200) return "#144A6C"
  if (value > 100) return "#88C8CE"
  if (value > 50) return "#CEE5E4"
  if (value >= 0) return "#F5FAFA"
  return "#E2E2E2"
}

const BoxChart = () => {
  // Simulated data: 7 rows (days) × 10 columns (titles)
  const data = Array.from({ length: 7 }, (_, rowIndex) =>
    Array.from({ length: 10 }, (__, colIndex) => {
      const index = rowIndex * 10 + colIndex
      if (index % 11 === 0) return null
      return Math.floor(Math.random() * 300)
    })
  )

  return (
    <div className="p-6 w-full overflow-x-auto">
      {/* Heading and legend */}
      <div className="flex justify-between items-center mb-6 flex-col md:flex-row">
        <h3 className="text-[#0F172A] text-2xl font-normal">Near-end Stocks</h3>
        <div className="flex gap-4 text-xs text-[#0F172A] flex-col md:flex-row">
          <Legend color="#144A6C" label="200 - 500" />
          <Legend color="#88C8CE" label="100 - 200" />
          <Legend color="#CEE5E4" label="51 - 100" />
          <Legend color="#F5FAFA" label="0 - 50" />
          <Legend color="#E2E2E2" label="Empty" border />
        </div>
      </div>

      {/* Aligned X-axis titles and grid */}
      <div className="space-y-3">
        {/* X-axis (Titles) */}
        <div className="flex gap-2 w-full justify-between items-center mb-4 overflow-x-auto">
          <div className="" /> {/* Spacer for Y-axis */}
          {titles.map((title, i) => (
            <div
              key={i}
              className="w-[60px] text-start text-sm text-[#0F172A] font-normal"
            >
              {title}
            </div>
          ))}
        </div>

        {/* Data Grid Rows */}
        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex gap-2 w-full overflow-x-auto items-center mb-4"
          >
            {/* Y-axis label */}
            <div className="w-[80px] text-sm text-[#0F172A] font-medium">
              {days[rowIndex]}
            </div>

            {/* Row of boxes */}
            {row.map((value, colIndex) => (
              <div
                key={colIndex}
                className="min-w-[40px] h-[40px] flex-1 rounded-md"
                style={{
                  backgroundColor: getColorForValue(value),
                  border: value === null ? "1px solid #88C8CE" : "none"
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const Legend = ({ color, label, border = false }) => (
  <div className="flex items-center gap-1">
    <div
      className="w-4 h-4 rounded-sm"
      style={{
        backgroundColor: color,
        border: border ? "1px solid #88C8CE" : "none"
      }}
    ></div>
    <span>{label}</span>
  </div>
)

export default BoxChart
