"use client"

import React from "react"
import dynamic from "next/dynamic"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "./ui/select"
import { useState } from "react"
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const LineChart = () => {
  const [selectedMetric, setSelectedMetric] = useState("monthly") // default: "Buy Count"

  const isCount = selectedMetric === "monthly"

  const chartData = isCount
    ? [75, 90, 65] // Buy Count data (Number of Sales)
    : [3000, 4200, 2800] // Buy Revenue data (Sales in Amount)

  const chartTitle = isCount ? "Number of Sales" : "Sales in Amount"

  const series = [
    {
      name: chartTitle,
      data: chartData
    }
  ]

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 4,
        distributed: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ["Filling", "Molar Extraction", "Root Canal"],
      labels: {
        style: {
          fontSize: "12px",
          colors: ["#0F172A", "#0F172A", "#0F172A"]
        }
      }
    },
    yaxis: {
      title: {
        text: chartTitle,
        style: {
          fontSize: "12px",
          color: "#144A6C",
          fontWeight: 500
        }
      },
      labels: {
        style: {
          fontSize: "12px",
          colors: "#64748B"
        }
      },
      min: 0,
      max: isCount ? 100 : 5000,
      tickAmount: 5
    },
    colors: ["#0A3A63"],
    grid: {
      strokeDashArray: 4,
      borderColor: "#E2E8F0"
    },
    tooltip: {
      theme: "light"
    }
  }
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h3 className="text-[#0F172A] text-2xl font-normal">Top Treatments</h3>
        <div className="slct">
          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger className="bg-[#fff] border border-[#F0F0F0] pl-10 pr-10 rounded-lg text-sm text-[#333] font-normal">
              <SelectValue placeholder="Monthly" />
            </SelectTrigger>
            <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm">
              <SelectItem
                value="monthly"
                className="text-sm font-normal py-2 px-3 pl-8 relative bg-[#fff] hover:bg-[#eee]"
                style={{ fontFamily: "Poppins" }}
              >
                Buy Count
              </SelectItem>
              <SelectItem
                value="weekly"
                className="text-sm font-normal py-2 px-3 pl-8 relative bg-[#fff] hover:bg-[#eee]"
                style={{ fontFamily: "Poppins" }}
              >
                Buy Revenue
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  )
}

export default LineChart
