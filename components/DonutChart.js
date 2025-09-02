"use client"

import React, { useEffect, useRef } from "react"
import ApexCharts from "apexcharts"

const DonutChart = () => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    const options = {
      chart: {
        type: "donut",
        height: 280,
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800
        }
      },
      series: [35, 25, 20, 20],
      labels: ["Completed", "Pending", "Cancelled", "Rescheduled"],
      colors: ["#144A6C", "#CEE5E4", "#88C8CE", "#F5FAFA"],
      legend: {
        show: false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      borderRadius: 12,
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
            background: "#fff",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "18px",
                fontWeight: 500,
                color: "#0F172A",
                offsetY: -10
              },
              value: {
                show: true,
                fontSize: "28px",
                fontWeight: 600,
                color: "#144A6C",
                offsetY: 10,
                formatter: val => `${val}%`
              },
              total: {
                show: true,
                label: "Total",
                color: "#475569",
                fontSize: "16px",
                fontWeight: 400,
                formatter: () => "100%"
              }
            }
          },
          customScale: 0.9,
          offsetY: 5,
          borderRadius: 12 // 12px border radius for all segments
        }
      },
      stroke: {
        show: true,
        width: 0 // Set to 0 to let borderRadius take effect
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 0.1
          }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        style: {
          fontSize: "14px",
          fontFamily: "inherit"
        },
        y: {
          formatter: val => `${val}%`,
          title: {
            formatter: seriesName => seriesName
          }
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

  return (
    <div className="donut-chart-container">
      <div ref={chartRef} />
      <div className="chart-label">
        <p className="chart-title">Total Material Reorders</p>
        <p className="chart-value">700</p>
      </div>
      <style jsx>{`
        .donut-chart-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .chart-label {
          text-align: center;
          margin-top: 10px;
        }
        .chart-title {
          font-size: 18px;
          font-weight: 300;
          color: #0f172a;
          margin-bottom: 5px;
        }
        .chart-value {
          font-size: 32px;
          font-weight: normal;
          color: #0f172a;
          margin: 0;
        }
      `}</style>
    </div>
  )
}

export default DonutChart
