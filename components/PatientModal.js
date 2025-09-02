"use client"
import { useState, useEffect } from "react"

export default function PatientModal({ isOpen, onClose }) {
  const [ModalAnimation, setModalAnimation] = useState(false)

  // Effect to handle modal animation when isOpen changes
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setModalAnimation(true), 10)
    } else {
      setModalAnimation(false)
    }
  }, [isOpen])

  const handleClose = () => {
    setModalAnimation(false)
    setTimeout(onClose, 500) // Allow time for animation to complete
  }

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      className="relative z-10"
    >
      {/* <div className="fixed inset-0 bg-gradient-to-br from-[#144A6C]/60 to-[#144A6C]/20 backdrop-blur-md transition-opacity" /> */}
      <div className="fixed inset-0 bg-[#000]/60 backdrop-blur-md transition-opacity overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 py-8 text-center">
          {/* Background overlay */}
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0"></div>
          </div>
          {/* Modal panel */}
          <div
            className={`inline-block align-bottom bg-white  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 
                        sm:align-middle w-full max-w-4xl mx-auto 
              ${ModalAnimation ? "scale-100 skew-y-0" : "scale-0 skew-y-6"}
              duration-500 ease-out
            `}
          >
            <div className="bg-white  px-4 pt-5 pb-4 sm:p-8 sm:pb-6">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <div className="flex gap-1 border-b border-[#E5E7EB]  pb-4 w-100">
                    <div className="user-icon">
                      <svg
                        width={44}
                        height={44}
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={44} height={44} rx={22} fill="#F5FAFA" />
                        <rect
                          x="0.5"
                          y="0.5"
                          width={43}
                          height={43}
                          rx="21.5"
                          stroke="url(#paint0_linear_0_7879)"
                          strokeOpacity="0.3"
                        />
                        <path
                          d="M14.5 29.5H15.3333M29.5 29.5H28.6667M15.3333 29.5V17.7C15.3333 16.5799 15.3333 16.0198 15.5513 15.592C15.7431 15.2157 16.049 14.9097 16.4254 14.718C16.8532 14.5 17.4132 14.5 18.5333 14.5H22.1333C23.2534 14.5 23.8135 14.5 24.2413 14.718C24.6176 14.9097 24.9236 15.2157 25.1153 15.592C25.3333 16.0198 25.3333 16.5799 25.3333 17.7V18.6667M15.3333 29.5H18.6667M25.3333 29.5V18.6667M25.3333 29.5H28.6667M25.3333 29.5H22M25.3333 18.6667H27.0667C27.6267 18.6667 27.9067 18.6667 28.1207 18.7757C28.3088 18.8715 28.4618 19.0245 28.5577 19.2127C28.6667 19.4266 28.6667 19.7066 28.6667 20.2667V29.5M20.3333 17.8333V21.1667M18.6667 19.5H22M18.6667 29.5V26.1C18.6667 25.5399 18.6667 25.2599 18.7757 25.046C18.8715 24.8578 19.0245 24.7049 19.2127 24.609C19.4266 24.5 19.7066 24.5 20.2667 24.5H20.4C20.9601 24.5 21.2401 24.5 21.454 24.609C21.6422 24.7049 21.7951 24.8578 21.891 25.046C22 25.2599 22 25.5399 22 26.1V29.5M18.6667 29.5H22"
                          stroke="#144A6C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_0_7879"
                            x1={22}
                            y1={0}
                            x2={22}
                            y2={44}
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset={1}
                              stopColor="white"
                              stopOpacity={0}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-regular text-[#144A6C] text-start">
                        Add New Patient
                      </h3>
                      <span className="text-[#A1A5AA] font-regular">
                        Provide details to add a new Patient
                      </span>
                    </div>
                    <hr />
                  </div>
                  <div
                    style={{
                      maxHeight: "500px",
                      minHeight: "400px",
                      overflowY: "auto"
                    }}
                  >
                    <form className="w-full max-w-4xl mx-auto mt-5">
                      <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                        <div className="w-full px-3 mb-6 md:mb-0 text-start">
                          <label
                            className="text-[#757575]"
                            htmlFor="grid-address"
                          >
                            Ful Name
                          </label>
                          <input
                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                            id="grid-address"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                          <label
                            className="text-[#757575]"
                            htmlFor="grid-address"
                          >
                            Sex
                          </label>
                          <input
                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                            id="grid-address"
                            type="text"
                          />
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                          <label
                            className="text-[#757575]"
                            htmlFor="grid-address"
                          >
                            Phone Number
                          </label>
                          <input
                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                            id="grid-address"
                            type="number"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                          <label
                            className="text-[#757575]"
                            htmlFor="grid-address"
                          >
                            Birth Date
                          </label>
                          <input
                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                            id="datepicker"
                            type="text"
                          />
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                          <label
                            className="text-[#757575]"
                            htmlFor="grid-address"
                          >
                            Age
                          </label>
                          <input
                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                            id="grid-address"
                            type="number"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                        <div className="w-full px-3 mb-6 md:mb-0 text-start">
                          <label
                            className="text-[#757575]"
                            htmlFor="grid-address"
                          >
                            Address
                          </label>
                          <input
                            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                            id="grid-address"
                            type="text"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-white  gap-2 py-3 sm:flex sm:flex-row-reverse border-t border-[#E5E7EB]  mt-5">
                <button
                  type="button"
                  className="bg-[#144A6C] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"
                  onClick={handleClose}
                >
                  Create
                </button>
                <button
                  type="button"
                  className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                  onClick={handleClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
