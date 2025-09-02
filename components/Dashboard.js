'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import DashboardStructure from "./DashboardStructure"

export default function Dashboard() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const metrics = [
    { label: "Total Sales", value: "$5,045.00" },
    { label: "Total Cost", value: "$5,045.00" },
    { label: "Total Bookings", value: "5,893" },
    { label: "Total Subscriptions", value: "4,000" },
    { label: "Total Stock Worth", value: "$5,045.00" },
    { label: "Remaining Amount", value: "$5,045.00" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current?.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownSelect = (option) => {
    console.log('Selected:', option);
    setShowDropdown(false);
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden">
      <h1 className='text-[#144A6C] font-normal text-2xl'>Dashboard</h1>
      <div className="relative w-full h-[420px] mt-5">
        <Image
          src="/new.png"
          alt="Doctors"
          fill
          className="object-cover rounded-[12px]"
          style={{ borderRadius: '12px' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-[12px]" />
        <div className="absolute top-4 right-4">
          <button
            ref={buttonRef}
            onClick={() => setShowDropdown(prev => !prev)}
            className="flex items-center gap-1 bg-white px-4 py-2 rounded-md shadow text-sm text-gray-700 hover:bg-gray-100"
          >
            Filter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showDropdown && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-40 overflow-hidden"
            >
              <ul className="text-sm text-gray-700">
                {["Today", "This Week", "This Month"].map(option => (
                  <li
                    key={option}
                    onClick={() => handleDropdownSelect(option)}
                    className="px-4 py-2 hover:bg-[#144A6C] hover:text-white cursor-pointer transition-colors"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Total Revenue Text */}
        <div className="absolute top-8 left-8 text-white">
          <h2 className="text-xl font-normal">Total Revenue</h2>
          <p className="text-6xl font-normal mt-[50px]">$5,045.00</p>
        </div>

        {/* Metric Cards INSIDE image */}
        <div className="absolute bottom-5 left-0 w-full px-6 flex gap-3 justify-between whitespace-nowrap overflow-x-auto pb-4">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-sm w-full h-[110px] rounded-lg shadow-md px-5 py-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-sm font-medium text-[#6B6B6B]">
                <span>{item.label}</span>
                <svg
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.0878906" width={24} height={24} rx={12} fill="#F5FAFA" />
                  <rect
                    x="0.5"
                    y="0.587891"
                    width={23}
                    height={23}
                    rx="11.5"
                    stroke="url(#paint0_linear_586_3442)"
                    strokeOpacity="0.3"
                  />
                  <path
                    d="M12.0002 13.8431C14.3013 13.8431 16.1668 11.9776 16.1668 9.67643C16.1668 7.37525 14.3013 5.50977 12.0002 5.50977C9.69898 5.50977 7.8335 7.37525 7.8335 9.67643C7.8335 11.9776 9.69898 13.8431 12.0002 13.8431ZM12.0002 13.8431C8.31826 13.8431 5.3335 16.0817 5.3335 18.8431M12.0002 13.8431C15.6821 13.8431 18.6668 16.0817 18.6668 18.8431"
                    stroke="#144A6C"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_586_3442"
                      x1={12}
                      y1="0.0878906"
                      x2={12}
                      y2="24.0879"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-2xl font-normal text-[#000]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <DashboardStructure />
      </div>
    </div>
  );
}
