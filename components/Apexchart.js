"use client"

import React, { useEffect, useRef } from "react"
import ApexCharts from "apexcharts"

const ChartTimeline = () => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    const options = {
      chart: {
        type: "area",
        height: 350,
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      colors: ["#144A6C"],
      dataLabels: { enabled: false },
      stroke: {
        curve: "smooth",
        width: 2
      },
      series: [
        {
          name: "Total Patients",
          data: [45, 50, 55, 60, 65, 70, 75, 80] // one value per month
        }
      ],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "sep",
          "oct",
          "nov",
          "dec"
        ],
        title: {
          text: "Month",
          style: {
            color: "#6B7280",
            fontWeight: 500
          }
        },
        labels: {
          rotate: 0,
          style: {
            fontSize: "12px",
            colors: "#6B7280"
          }
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        title: {
          text: "Number of Patients",
          style: { color: "#6B7280", fontWeight: 500 }
        },
        min: 0,
        max: 100,
        tickAmount: 5
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.2,
          opacityTo: 0.1,
          stops: [0, 100]
        }
      },
      tooltip: {
        y: {
          formatter: val => `${val} patients`
        }
      },
      grid: {
        borderColor: "#E5E7EB",
        row: {
          colors: ["transparent"], // no rows
          opacity: 0.5
        }
      }
    }

    if (chartRef.current) {
      chartInstance.current = new ApexCharts(chartRef.current, options)
      chartInstance.current.render()
    }

    return () => {
      chartInstance.current?.destroy()
    }
  }, [])

  const zoomChart = (start, end) => {
    chartInstance.current?.zoomX(
      new Date(start).getTime(),
      new Date(end).getTime()
    )
  }

  const handleZoom = e => {
    const target = e.currentTarget
    const buttons = document.querySelectorAll("button")
    buttons.forEach(btn => btn.classList.remove("active"))
    target.classList.add("active")
  }

  return (
    <div>
      <div className="mb-4 space-x-2">
        <button
          className="text-[#144A6C]"
          id="one_month"
          onClick={e => {
            handleZoom(e)
            zoomChart("28 Jan 2013", "27 Feb 2013")
          }}
        >
          Total Patients
        </button>
      </div>

      <div id="chart-timeline" ref={chartRef} />
    </div>
  )
}

export default ChartTimeline
