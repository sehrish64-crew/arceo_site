"use client"
import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

const generateDayWiseTimeSeries = (baseval, count, yrange) => {
  const series = []
  let y = Math.floor((yrange.min + yrange.max) / 2) // start from middle value

  for (let i = 0; i < count; i++) {
    const x = baseval

    // Add small random delta for smooth change
    const delta = Math.floor(Math.random() * 10 - 5) // small ups and downs
    y += delta

    // Clamp y to stay within min-max range
    y = Math.max(yrange.min, Math.min(yrange.max, y))

    series.push({ x, y })
    baseval += 86400000 // +1 day
  }

  return series
}

const StackedAreaChart = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const options = {
    chart: {
      type: "area",
      height: 350,
      stacked: false,
      toolbar: { show: false },
      zoom: { enabled: false }
    },
    colors: ["#144A6C", "#177606", "#EF2D2D"], // blue, green, red
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 2
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.05,
        stops: [0, 100]
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: {
        width: 12,
        height: 12,

        // ✅ Valid property here
        radius: 12
      },
      fontSize: "14px",
      fontWeight: 500
    },
    xaxis: {
      type: "datetime",
      labels: {
        format: "MMM",
        style: {
          fontSize: "12px",
          colors: "#6B7280"
        }
      },
      title: {
        text: "Month",
        style: {
          color: "#6B7280",
          fontWeight: 500
        }
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      title: {
        text: "Numbers are in $ (000)",
        style: {
          color: "#6B7280",
          fontWeight: 500
        }
      },
      labels: {
        style: {
          fontSize: "12px",
          colors: "#6B7280"
        }
      },
      min: 0,
      tickAmount: 5
    },
    grid: {
      borderColor: "#E5E7EB"
    },
    tooltip: {
      x: {
        format: "MMM yyyy"
      },
      y: {
        formatter: val => `$${val}k`
      }
    }
  }

  const series = [
    {
      name: "Total Sales",
      data: generateDayWiseTimeSeries(new Date("2025-01-01").getTime(), 8, {
        min: 40,
        max: 90
      })
    },
    {
      name: "Sales",
      data: generateDayWiseTimeSeries(new Date("2025-01-01").getTime(), 8, {
        min: 20,
        max: 50
      })
    },
    {
      name: "Fixed Expenses",
      data: generateDayWiseTimeSeries(new Date("2025-01-01").getTime(), 8, {
        min: 10,
        max: 30
      })
    }
  ]

  return (
    <div className="w-full">
      <button className="text-[#144A6C]">Sales Vs Expense</button>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  )
}

export default StackedAreaChart
