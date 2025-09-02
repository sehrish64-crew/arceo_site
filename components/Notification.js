"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"

const tabs = [
  "Real-Time Budget Alerts",
  "Spending Habit Analysis",
  "Bill Reminders",
  "Financial Forecasting"
]

export default function Notification() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="flex flex-col items-center gap-10 py-12 bg-[#FAFAFA] pb-[150px]">
      {/* Tabs */}
      <div className="flex gap-10 border-b border-gray-200">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={clsx(
              "pb-2 text-sm font-medium transition-colors duration-300",
              activeTab === i
                ? "text-black border-b-2 border-black"
                : "text-gray-400 hover:text-black"
            )}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div
        className="max-w-6xl w-full p-[100px]"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "white", // changed from transparent to white
          backgroundImage: `
      linear-gradient(var(--token-f5a7c943-8b36-46e3-a5c4-ec7830a70866, rgb(250, 250, 250)) 2px, transparent 2px),
      linear-gradient(90deg, var(--token-f5a7c943-8b36-46e3-a5c4-ec7830a70866, rgb(250, 250, 250)) 2px, transparent 2px),
      linear-gradient(var(--token-f5a7c943-8b36-46e3-a5c4-ec7830a70866, rgb(250, 250, 250)) 1px, transparent 1px),
      linear-gradient(90deg, var(--token-f5a7c943-8b36-46e3-a5c4-ec7830a70866, rgb(250, 250, 250)) 1px, var(--token-17ab3bbb-fde0-43e8-bad0-4c918f819ff8, rgb(255, 255, 255)) 1px)
    `,
          backgroundPosition: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
          backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
          borderRadius: "12px"
        }}
      >
        <div className="grid grid-cols-2 gap-10 max-w-6xl w-full">
          {/* Left Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">{tabs[activeTab]}</h2>
            <p className="text-gray-600">
              Never miss a payment again—Get alerts and reminders for your
              finances and make smarter decisions.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded shadow">
              Read More About This
            </button>
          </div>

          {/* Right Section */}
          <div className="relative">
            {/* White Card Container */}
            <div className="relative mx-auto overflow-hidden">
              {/* Mobile Image */}
              <img
                src="/mobile.png"
                alt="Phone UI"
                className="w-[700px] h-[700px] object-contain z-0"
              />

              {/* Notification Cards */}
              <AnimatePresence mode="wait">
                {activeTab === 0 && (
                  <>
                    <AnimatedCard
                      key="card-1"
                      text="You're over your Grocery Budget by $50 this month."
                      time="01:00 PM"
                      className="top-[2px] left-[4px] bg-orange-100 border-orange-300"
                    />
                    <AnimatedCard
                      key="card-2"
                      text="Your Entertainment Budget is almost maxed out!"
                      time="02:00 PM"
                      className="top-[180px] left-[266px] bg-blue-100 border-blue-300"
                    />
                    <AnimatedCard
                      key="card-3"
                      text="You've spent 80% of your Dining Budget"
                      time="03:00 PM"
                      className="top-[340px] left-[10px] bg-green-100 border-green-300"
                    />
                  </>
                )}

                {activeTab === 1 && (
                  <AnimatedCard
                    key="card-4"
                    text="You spent 30% more on Subscriptions this month"
                    time="12:45 PM"
                    className="top-[160px] left-[30px] bg-purple-100 border-purple-300"
                  />
                )}

                {activeTab === 2 && (
                  <>
                    <AnimatedCard
                      key="card-5"
                      text="Your $100 internet bill is due in 3 days."
                      time="01:00 PM"
                      className="top-[120px] left-[20px] bg-blue-100 border-blue-300"
                    />
                    <AnimatedCard
                      key="card-6"
                      text="Your rent is due in 5 days. Set aside the funds now!"
                      time="03:00 PM"
                      className="top-[320px] left-[10px] bg-orange-100 border-orange-300"
                    />
                    <AnimatedCard
                      key="card-7"
                      text="You’ve got a $250 credit card payment tomorrow!"
                      time="02:00 PM"
                      className="top-[200px] left-[200px] bg-pink-100 border-pink-300"
                    />
                  </>
                )}

                {activeTab === 3 && (
                  <AnimatedCard
                    key="card-8"
                    text="Projected overspend next week!"
                    time="10:00 AM"
                    className="top-[90px] left-[120px] bg-red-100 border-red-300"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ✨ Animated Card Component
function AnimatedCard({ text, time, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "absolute z-10 p-3 rounded-md border shadow-sm text-sm w-60",
        className
      )}
    >
      <p className="font-medium">{text}</p>
      <span className="block text-xs text-gray-500 mt-1">{time}</span>
    </motion.div>
  )
}
