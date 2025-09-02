"use client"
import { useState } from "react"
import Image from "next/image"
import AppointmentPicker from "./AppointmentPicker"
import { Search } from "lucide-react"
import { Listbox } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import { format } from "date-fns"
const DoctorsTable = [
  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "Routine Checkup",
    lastVisit: "2025-06-15",
    nextVisit: "2025-07-30",
    treatmentRequired: "Blood Test"
  },
  {
    id: "D002",
    fullName: "Dr. Adeel Sheikh",
    visitReason: "Dental Pain",
    lastVisit: "2025-07-01",
    nextVisit: "2025-08-01",
    treatmentRequired: "Root Canal"
  },
  {
    id: "D003",
    fullName: "Dr. Sehrish Khan",
    visitReason: "Routine Checkup",
    lastVisit: "2025-06-15",
    nextVisit: "2025-07-30",
    treatmentRequired: "Blood Test"
  }
]
const today = format(new Date(), "yyyy-MM-dd")

const slotsByDate = {
  [today]: ["10:30am", "11:30am", "02:30pm", "03:30pm", "04:30pm", "05:30pm"],
  "2025-08-10": ["09:00am", "10:00am", "01:00pm"]
}
const patients = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Alexa" },
  { id: 3, name: "Jordan" }
]

const treatments = [
  { id: 1, name: "Physiotherapy" },
  { id: 2, name: "Cardiology" },
  { id: 3, name: "Neurology" }
]

const bookingMonths = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" }
]
const openSlots = [
  { id: 1, name: "9:00 AM - 9:30 AM" },
  { id: 2, name: "10:00 AM - 10:30 AM" },
  { id: 3, name: "11:00 AM - 11:30 AM" },
  { id: 4, name: "12:00 PM - 12:30 PM" },
  { id: 5, name: "2:00 PM - 2:30 PM" }
]

const DoctorsTables = [
  {
    Treatment: "Palate Expansion",
    visitReason: "Maria Thompson",
    lastVisit: "04-02-2025",
    Amount: "2000",
    Status: "Complete"
  },
  {
    Treatment: "Braces",
    visitReason: "John Doe",
    lastVisit: "10-03-2025",
    Amount: "1500",
    Status: "Pending"
  },
  {
    Treatment: "Root Canal",
    visitReason: "Emma Shah",
    lastVisit: "20-07-2025",
    Amount: "1800",
    Status: "Ongoing"
  }
]

export default function DoctorProfileTabs() {
  const [selectPatient, setSelectPatient] = useState(patients[0])
  const [selectedTab, setSelectedTab] = useState(0)
  const tabs = ["Profile", "Patients", "Treatments"]
  const [isOpen, setIsOpen] = useState(false)
  const [ModalAnimation, setModalAnimation] = useState(false)
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0])
  const [selected, setSelected] = useState(bookingMonths[0])
  const [selectedSlot, setSelectedSlot] = useState(openSlots[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchTerm1, setSearchTerm1] = useState("")
  const [isOpen1, setIsOpen1] = useState(false)
  const [ModalAnimation1, setModalAnimation1] = useState(false)
  const filteredDoctors = DoctorsTable.filter(doctors => {
    const matchSearch = doctors.fullName
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return matchSearch
  })

  const filteredDoctores = DoctorsTables.filter(doctors => {
    const matchSearch =
      doctors.Treatment.toLowerCase().includes(searchTerm1.toLowerCase()) ||
      doctors.visitReason.toLowerCase().includes(searchTerm1.toLowerCase())
    return matchSearch
  })

  return (
    <>
      {isOpen1 && (
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
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0"></div>
              </div>
              {/* Modal panel */}
              <div
                className={`inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 
                      sm:align-middle w-full max-w-2xl mx-auto 
            ${ModalAnimation1 ? "scale-100 skew-y-0" : "scale-0 skew-y-6"}
            duration-500 ease-out
          `}
              >
                <div className="bg-white  px-4 pt-5 pb-4 sm:p-8 sm:pb-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                      <div className="flex gap-2 pb-4 w-100">
                        <div className="user-icon">
                          <svg
                            width={44}
                            height={44}
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width={44}
                              height={44}
                              rx={22}
                              fill="#FAF5F5"
                            />
                            <rect
                              x="0.5"
                              y="0.5"
                              width={43}
                              height={43}
                              rx="21.5"
                              stroke="url(#paint0_linear_90_2081)"
                              strokeOpacity="0.3"
                            />
                            <path
                              d="M27.7435 27.0297L28.4934 27.0364L27.7435 27.0297ZM15.333 16.25C14.9188 16.25 14.583 16.5857 14.583 17C14.583 17.4142 14.9188 17.75 15.333 17.75V16.25ZM28.6663 17.75C29.0806 17.75 29.4163 17.4142 29.4163 17C29.4163 16.5857 29.0806 16.25 28.6663 16.25V17.75ZM21.083 20.3333C21.083 19.9191 20.7472 19.5833 20.333 19.5833C19.9188 19.5833 19.583 19.9191 19.583 20.3333H21.083ZM19.583 27C19.583 27.4142 19.9188 27.75 20.333 27.75C20.7472 27.75 21.083 27.4142 21.083 27H19.583ZM24.4163 20.3333C24.4163 19.9191 24.0806 19.5833 23.6663 19.5833C23.2521 19.5833 22.9163 19.9191 22.9163 20.3333H24.4163ZM22.9163 27C22.9163 27.4142 23.2521 27.75 23.6663 27.75C24.0806 27.75 24.4163 27.4142 24.4163 27H22.9163ZM27.833 17L27.083 16.9933L26.9935 27.023L27.7435 27.0297L28.4934 27.0364L28.583 17.0067L27.833 17ZM24.4103 30.3333V29.5833H19.4997V30.3333V31.0833H24.4103V30.3333ZM16.1663 17H15.4163V27H16.1663H16.9163V17H16.1663ZM15.333 17V17.75H16.1663V17V16.25H15.333V17ZM16.1663 17V17.75H18.6663V17V16.25H16.1663V17ZM18.6663 17V17.75H25.333V17V16.25H18.6663V17ZM25.333 17V17.75H27.833V17V16.25H25.333V17ZM27.833 17V17.75H28.6663V17V16.25H27.833V17ZM18.6663 16.6296H19.4163C19.4163 15.488 20.4875 14.4166 21.9997 14.4166V13.6666V12.9166C19.83 12.9166 17.9163 14.4984 17.9163 16.6296H18.6663ZM21.9997 13.6666V14.4166C23.5119 14.4166 24.583 15.488 24.583 16.6296H25.333H26.083C26.083 14.4984 24.1694 12.9166 21.9997 12.9166V13.6666ZM18.6663 16.6296H17.9163V17H18.6663H19.4163V16.6296H18.6663ZM25.333 16.6296H24.583V17H25.333H26.083V16.6296H25.333ZM19.4997 30.3333V29.5833C18.0729 29.5833 16.9163 28.4267 16.9163 27H16.1663H15.4163C15.4163 29.2551 17.2445 31.0833 19.4997 31.0833V30.3333ZM27.7435 27.0297L26.9935 27.023C26.9808 28.4407 25.828 29.5833 24.4103 29.5833V30.3333V31.0833C26.6512 31.0833 28.4734 29.2773 28.4934 27.0364L27.7435 27.0297ZM20.333 20.3333H19.583V27H20.333H21.083V20.3333H20.333ZM23.6663 20.3333H22.9163V27H23.6663H24.4163V20.3333H23.6663Z"
                              fill="#EF2D2D"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_90_2081"
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
                        <h3 className="text-lg font-regular text-[#144A6C] text-start mt-2 font-normal">
                          Delete
                        </h3>
                      </div>
                      <div className="mt-3">
                        <span className="text-[#A1A5AA]">
                          Are you sure you want to delete this? Once deleted,
                          this action can not be undone.
                        </span>
                      </div>
                      <form>
                        <div className="bg-white  gap-2 py-3 sm:flex sm:flex-row-reverse border-t border-[#E5E7EB] mt-5">
                          <button
                            type="button"
                            className="bg-[#EF2D2D] border border-[#EF2D2D] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"
                            onClick={() => {
                              setIsOpen1(false)
                              setModalAnimation1(false)
                            }}
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                            onClick={() => {
                              setTimeout(() => {
                                setIsOpen1(false)
                              }, 500)
                              setModalAnimation1(false)
                            }}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="p-4 overflow-y-auto">
        <div className="mt-6">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left Panel */}
            <div className="xl:col-span-2 space-y-0">
              <div className="flex md:space-x-4 space-x-0 md:flex-row flex-row md:ml-4 ml-0 overflow-x-auto">
                {tabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTab(idx)}
                    className={`clip-path-custom-shape py-3 px-6 text-sm font-medium border-b-2 mb-0 md:-mb-px focus:outline-none  ${
                      selectedTab === idx
                        ? "border-[#144A6C] text-[#144A6C] bg-[#FFFFFF80]"
                        : "text-gray-500 border-transparent opacity-50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {selectedTab === 0 && (
                <>
                  <div className="card">
                    <div className="bg-[#F9FAFB] rounded-xl p-4 grid grid-cols-1 md:grid-cols-5 gap-2">
                      {/* Doctor Info - Larger Box (3/5 on md+) */}
                      {/* <div className="bg-areas flex gap-4 items-start md:col-span-3"> */}
                      <div className="bg-areas flex flex-col md:flex-row gap-4 items-start md:col-span-3">
                        <Image
                          src="/profile.png"
                          alt="doctor"
                          width={200}
                          height={200}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h2 className=" text-[clamp(20px,4vw,20px)] text-[#144A6C] font-semibold white-space-nowrap">
                            Dr. Patel Bharori
                          </h2>
                          <p className="text-base text-[#7E7E7E]">
                            Orthodontic
                          </p>
                          <p className="text-base text-[#7E7E7E]">ID : 2342</p>
                          <div>
                            <button
                              className="w-full bg-[#144A6C] text-white px-4 py-2 rounded-xl mt-3 md:text-sm"
                              onClick={() => {
                                setIsOpen(true)
                                setTimeout(() => setModalAnimation(true), 10)
                              }}
                            >
                              Create Booking
                            </button>
                            {isOpen && (
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
                                    <div
                                      className="fixed inset-0 transition-opacity"
                                      aria-hidden="true"
                                    >
                                      <div className="absolute inset-0"></div>
                                    </div>
                                    {/* Modal panel */}
                                    <div
                                      className={`inline-block align-bottom bg-white  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 
                                              sm:align-middle w-full max-w-4xl mx-auto 
                                    ${
                                      ModalAnimation
                                        ? "scale-100 skew-y-0"
                                        : "scale-0 skew-y-6"
                                    }
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
                                                  <rect
                                                    width={44}
                                                    height={44}
                                                    rx={22}
                                                    fill="#F5FAFA"
                                                  />
                                                  <rect
                                                    x="0.5"
                                                    y="0.5"
                                                    width={43}
                                                    height={43}
                                                    rx="21.5"
                                                    stroke="url(#paint0_linear_0_5513)"
                                                    strokeOpacity="0.3"
                                                  />
                                                  <path
                                                    d="M16.6034 16.4438L16.3913 16.8149C15.7055 18.0151 15.4393 19.4096 15.6347 20.7779C15.9848 23.2282 16.8791 25.5689 18.252 27.6283L18.3728 27.8095C18.7992 28.4491 19.7838 28.2694 19.9567 27.5203L20.7818 23.9446C21.0799 22.6527 22.9197 22.6527 23.2178 23.9446L24.043 27.5203C24.2158 28.2694 25.2004 28.4491 25.6268 27.8095L25.7476 27.6283C27.1205 25.5689 28.0148 23.2282 28.3649 20.7779C28.5603 19.4096 28.2941 18.0151 27.6083 16.8149L27.3962 16.4438C26.4064 14.7115 23.9818 14.5225 22.7354 16.0804C22.3583 16.5519 21.6413 16.5519 21.2642 16.0804C20.0178 14.5225 17.5932 14.7115 16.6034 16.4438Z"
                                                    stroke="#144A6C"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                  />
                                                  <defs>
                                                    <linearGradient
                                                      id="paint0_linear_0_5513"
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
                                                  Book Appointment
                                                </h3>
                                                <span className="text-[#A1A5AA] font-regular">
                                                  Provide details to book an
                                                  appointment
                                                </span>
                                              </div>
                                              <hr />
                                            </div>
                                            <form className="w-full max-w-4xl mx-auto mt-5">
                                              <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="grid-address"
                                                  >
                                                    Patient
                                                  </label>
                                                  <Listbox
                                                    value={selectPatient}
                                                    onChange={setSelectPatient}
                                                  >
                                                    <div className="mt-2 relative">
                                                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                        <span className="block truncate">
                                                          {selectPatient.name}
                                                        </span>
                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                          <ChevronDownIcon
                                                            className="h-5 w-5 text-[#144A6C]"
                                                            aria-hidden="true"
                                                          />
                                                        </span>
                                                      </Listbox.Button>

                                                      <Listbox.Options className="absolute z-10 mt-1 max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {patients.map(
                                                          patient => (
                                                            <Listbox.Option
                                                              key={patient.id}
                                                              value={patient}
                                                              className={({
                                                                active
                                                              }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                  active
                                                                    ? "bg-[#144A6C] text-white"
                                                                    : "text-gray-900"
                                                                }`
                                                              }
                                                            >
                                                              {({
                                                                selected
                                                              }) => (
                                                                <>
                                                                  <span
                                                                    className={`block truncate ${
                                                                      selected
                                                                        ? "font-medium"
                                                                        : "font-normal"
                                                                    }`}
                                                                  >
                                                                    {
                                                                      patient.name
                                                                    }
                                                                  </span>
                                                                  {selected && (
                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#144A6C]">
                                                                      <CheckIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                      />
                                                                    </span>
                                                                  )}
                                                                </>
                                                              )}
                                                            </Listbox.Option>
                                                          )
                                                        )}
                                                      </Listbox.Options>
                                                    </div>
                                                  </Listbox>
                                                </div>
                                              </div>

                                              <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="grid-category"
                                                  >
                                                    Treatment
                                                  </label>
                                                  <Listbox
                                                    value={selectedTreatment}
                                                    onChange={
                                                      setSelectedTreatment
                                                    }
                                                  >
                                                    <div className="mt-2 relative">
                                                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                        <span className="block truncate">
                                                          {
                                                            selectedTreatment.name
                                                          }
                                                        </span>
                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                          <ChevronDownIcon
                                                            className="h-5 w-5 text-[#144A6C]"
                                                            aria-hidden="true"
                                                          />
                                                        </span>
                                                      </Listbox.Button>

                                                      <Listbox.Options className="absolute z-10 mt-1 max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {treatments.map(
                                                          treatment => (
                                                            <Listbox.Option
                                                              key={treatment.id}
                                                              value={treatment}
                                                              className={({
                                                                active
                                                              }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                  active
                                                                    ? "bg-[#144A6C] text-white"
                                                                    : "text-gray-900"
                                                                }`
                                                              }
                                                            >
                                                              {({
                                                                selected
                                                              }) => (
                                                                <>
                                                                  <span
                                                                    className={`block truncate ${
                                                                      selected
                                                                        ? "font-medium"
                                                                        : "font-normal"
                                                                    }`}
                                                                  >
                                                                    {
                                                                      treatment.name
                                                                    }
                                                                  </span>
                                                                  {selected && (
                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                      <CheckIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                      />
                                                                    </span>
                                                                  )}
                                                                </>
                                                              )}
                                                            </Listbox.Option>
                                                          )
                                                        )}
                                                      </Listbox.Options>
                                                    </div>
                                                  </Listbox>
                                                </div>
                                              </div>

                                              <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="grid-address"
                                                  >
                                                    Booking Month
                                                  </label>
                                                  <Listbox
                                                    value={selected}
                                                    onChange={setSelected}
                                                  >
                                                    <div className="mt-2 relative">
                                                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                        <span className="block truncate">
                                                          {selected.name}
                                                        </span>
                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                          <ChevronDownIcon
                                                            className="h-5 w-5 text-[#144A6C]"
                                                            aria-hidden="true"
                                                          />
                                                        </span>
                                                      </Listbox.Button>

                                                      <Listbox.Options className="absolute z-10 mt-1 max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {bookingMonths.map(
                                                          month => (
                                                            <Listbox.Option
                                                              key={month.id}
                                                              value={month}
                                                              className={({
                                                                active
                                                              }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                  active
                                                                    ? "bg-[#144A6C] text-white"
                                                                    : "text-gray-900"
                                                                }`
                                                              }
                                                            >
                                                              {({
                                                                selected
                                                              }) => (
                                                                <>
                                                                  <span
                                                                    className={`block truncate ${
                                                                      selected
                                                                        ? "font-medium"
                                                                        : "font-normal"
                                                                    }`}
                                                                  >
                                                                    {month.name}
                                                                  </span>
                                                                  {selected && (
                                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                      <CheckIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                      />
                                                                    </span>
                                                                  )}
                                                                </>
                                                              )}
                                                            </Listbox.Option>
                                                          )
                                                        )}
                                                      </Listbox.Options>
                                                    </div>
                                                  </Listbox>
                                                </div>

                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="grid-category"
                                                  >
                                                    Open Slots
                                                  </label>
                                                  <Listbox
                                                    value={selectedSlot}
                                                    onChange={setSelectedSlot}
                                                  >
                                                    <div className="mt-2 relative">
                                                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                        <span className="block truncate">
                                                          {selectedSlot.name}
                                                        </span>
                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                          <ChevronDownIcon
                                                            className="h-5 w-5 text-[#144A6C]"
                                                            aria-hidden="true"
                                                          />
                                                        </span>
                                                      </Listbox.Button>

                                                      <Listbox.Options className="absolute z-10 mt-1 max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {openSlots.map(slot => (
                                                          <Listbox.Option
                                                            key={slot.id}
                                                            value={slot}
                                                            className={({
                                                              active
                                                            }) =>
                                                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                active
                                                                  ? "bg-[#144A6C] text-white"
                                                                  : "text-gray-900"
                                                              }`
                                                            }
                                                          >
                                                            {({ selected }) => (
                                                              <>
                                                                <span
                                                                  className={`block truncate ${
                                                                    selected
                                                                      ? "font-medium"
                                                                      : "font-normal"
                                                                  }`}
                                                                >
                                                                  {slot.name}
                                                                </span>
                                                                {selected && (
                                                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                                                    <CheckIcon
                                                                      className="h-5 w-5"
                                                                      aria-hidden="true"
                                                                    />
                                                                  </span>
                                                                )}
                                                              </>
                                                            )}
                                                          </Listbox.Option>
                                                        ))}
                                                      </Listbox.Options>
                                                    </div>
                                                  </Listbox>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                        <div className="bg-white  gap-2 py-3 sm:flex sm:flex-row-reverse border-t border-[#E5E7EB]  mt-5">
                                          <button
                                            type="button"
                                            className="bg-[#144A6C] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"
                                            onClick={() => {
                                              setIsOpen(false)
                                              setModalAnimation(false)
                                            }}
                                          >
                                            Book Appointment
                                          </button>
                                          <button
                                            type="button"
                                            className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                                            onClick={() => {
                                              setTimeout(() => {
                                                setIsOpen(false)
                                              }, 500)
                                              setModalAnimation(false)
                                            }}
                                          >
                                            Cancel
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Stats Box - Smaller (2/5 on md+) */}
                      <div className="md:col-span-2">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 text-center text-sm text-gray-700">
                          {[
                            { value: 20, label: "Total Patients" },
                            { value: "$2,000", label: "Total Earnings" },
                            { value: 5, label: "Surgeries" },
                            { value: 12, label: "Appointments" }
                          ].map((stat, i) => (
                            <div
                              key={i}
                              className="bg-white py-12 w-full rounded-lg flex flex-col justify-center whitespace-nowrap gap-4 flex-col-reverse"
                            >
                              <p className="font-medium md:text-[clamp(20px,4vw,30px)] text-[clamp(30px,4vw,35px)] text-[#144A6C]">
                                {stat.value}
                              </p>
                              <p className="md:text-[clamp(10px,2vw,15px)] text-[clamp(15px,2vw,20px)] text-[#56555C]">
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#F9FAFB] rounded-xl p-6 grid md:grid-cols-2 grid-cols-1 gap-4 text-sm text-gray-600 mt-8">
                      {[
                        {
                          icon: (
                            <svg
                              width={40}
                              height={41}
                              viewBox="0 0 40 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.0878906"
                                width={40}
                                height={40}
                                rx={8}
                                fill="white"
                              />
                              <path
                                d="M12.5 25.0879L15 27.5879M14.1667 25.9213L16.6667 23.4213M15 21.7546L18.3333 25.0879M15 21.7546L20.4882 16.2664C21.139 15.6156 22.1943 15.6156 22.8452 16.2664L23.8215 17.2428C24.4724 17.8936 24.4724 18.9489 23.8215 19.5998L18.3333 25.0879M15 21.7546L14.1667 20.9213M18.3333 25.0879L19.1667 25.9213M23.3333 16.7546L26.6667 13.4213"
                                stroke="#144A6C"
                                strokeLinecap="round"
                              />
                            </svg>
                          ),
                          label: "Specialty",
                          value: "Orthodontic"
                        },
                        {
                          icon: (
                            <svg
                              width={40}
                              height={41}
                              viewBox="0 0 40 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.0878906"
                                width={40}
                                height={40}
                                rx={8}
                                fill="white"
                              />
                              <path
                                d="M13.8781 19.0495L11.8793 17.863C11.5962 17.695 11.5962 17.2891 11.8793 17.121L19.1004 12.8345C19.6543 12.5057 20.3463 12.5057 20.9003 12.8345L28.1213 17.121C28.4044 17.2891 28.4044 17.695 28.1213 17.863L26.1225 19.0495M13.8781 19.0495L19.1003 22.1495C19.6543 22.4784 20.3463 22.4784 20.9002 22.1495L26.1225 19.0495M13.8781 19.0495V23.2615C13.8781 23.8693 14.2005 24.4327 14.7274 24.7454L19.1003 27.3413C19.6543 27.6701 20.3463 27.6701 20.9002 27.3413L25.2733 24.7454C25.8001 24.4327 26.1225 23.8693 26.1225 23.2614V19.0495M20.0003 17.5879H22.5003"
                                stroke="#144A6C"
                                strokeLinecap="round"
                              />
                            </svg>
                          ),
                          label: "Qualification",
                          value: "Doctor of Dental Surgery (DDS)"
                        },
                        {
                          icon: (
                            <svg
                              width={40}
                              height={41}
                              viewBox="0 0 40 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.0878906"
                                width={40}
                                height={40}
                                rx={8}
                                fill="white"
                              />
                              <path
                                d="M12.4998 14.2545L18.9766 19.292C19.5785 19.7601 20.4212 19.7601 21.0231 19.292L27.4998 14.2545M14.3332 26.7545H25.6665C26.5999 26.7545 27.0666 26.7545 27.4232 26.5729C27.7368 26.4131 27.9917 26.1581 28.1515 25.8445C28.3332 25.488 28.3332 25.0213 28.3332 24.0879V16.0879C28.3332 15.1544 28.3332 14.6877 28.1515 14.3312C27.9917 14.0176 27.7368 13.7626 27.4232 13.6029C27.0666 13.4212 26.5999 13.4212 25.6665 13.4212H14.3332C13.3997 13.4212 12.933 13.4212 12.5765 13.6029C12.2629 13.7626 12.0079 14.0176 11.8482 14.3312C11.6665 14.6877 11.6665 15.1544 11.6665 16.0879V24.0879C11.6665 25.0213 11.6665 25.488 11.8482 25.8445C12.0079 26.1581 12.2629 26.4131 12.5765 26.5729C12.933 26.7545 13.3997 26.7545 14.3332 26.7545Z"
                                stroke="#144A6C"
                              />
                            </svg>
                          ),
                          label: "Email",
                          value: "Something@gmail.com"
                        },
                        {
                          icon: (
                            <svg
                              width={40}
                              height={41}
                              viewBox="0 0 40 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.0878906"
                                width={40}
                                height={40}
                                rx={8}
                                fill="white"
                              />
                              <path
                                d="M16 22.623C13.6088 23.3146 12 24.6073 12 26.0879C12 28.297 15.5817 30.0879 20 30.0879C24.4183 30.0879 28 28.297 28 26.0879C28 24.6073 26.3912 23.3146 24 22.623M26 16.4879C26 20.0225 21.5 26.0879 20 26.0879C18.5 26.0879 14 20.0225 14 16.4879C14 12.9533 16.6863 10.0879 20 10.0879C23.3137 10.0879 26 12.9533 26 16.4879ZM22 16.0879C22 17.1925 21.1046 18.0879 20 18.0879C18.8954 18.0879 18 17.1925 18 16.0879C18 14.9833 18.8954 14.0879 20 14.0879C21.1046 14.0879 22 14.9833 22 16.0879Z"
                                stroke="#144A6C"
                              />
                            </svg>
                          ),
                          label: "Address",
                          value: "123 Highland Drive, Anytown USA"
                        },
                        {
                          icon: (
                            <svg
                              width={40}
                              height={41}
                              viewBox="0 0 40 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.0878906"
                                width={40}
                                height={40}
                                rx={8}
                                fill="white"
                              />
                              <path
                                d="M17.4837 18.2172C18.0137 19.3209 18.7361 20.3554 19.651 21.2704C20.5659 22.1853 21.6004 22.9077 22.7042 23.4377C22.7991 23.4832 22.8466 23.506 22.9067 23.5235C23.1202 23.5858 23.3823 23.5411 23.5631 23.4116C23.6139 23.3752 23.6575 23.3317 23.7445 23.2446C24.0107 22.9784 24.1438 22.8453 24.2776 22.7583C24.7824 22.4301 25.4331 22.4301 25.9378 22.7583C26.0717 22.8453 26.2048 22.9784 26.471 23.2446L26.6193 23.393C27.024 23.7977 27.2263 24 27.3362 24.2173C27.5548 24.6494 27.5548 25.1598 27.3362 25.592C27.2263 25.8093 27.024 26.0116 26.6193 26.4162L26.4993 26.5363C26.096 26.9395 25.8944 27.1412 25.6203 27.2952C25.3161 27.466 24.8436 27.5889 24.4947 27.5879C24.1803 27.5869 23.9654 27.5259 23.5356 27.404C21.2259 26.7484 19.0464 25.5115 17.2282 23.6932C15.4099 21.8749 14.173 19.6955 13.5174 17.3858C13.3954 16.956 13.3344 16.7411 13.3335 16.4266C13.3325 16.0777 13.4553 15.6053 13.6262 15.3011C13.7802 15.027 13.9818 14.8253 14.3851 14.4221L14.5051 14.302C14.9098 13.8974 15.1121 13.695 15.3294 13.5851C15.7616 13.3666 16.2719 13.3666 16.7041 13.5851C16.9214 13.695 17.1237 13.8974 17.5284 14.302L17.6767 14.4504C17.9429 14.7166 18.076 14.8497 18.1631 14.9835C18.4912 15.4883 18.4912 16.139 18.1631 16.6437C18.076 16.7776 17.9429 16.9107 17.6767 17.1769C17.5897 17.2639 17.5462 17.3074 17.5097 17.3583C17.3803 17.5391 17.3356 17.8012 17.3978 18.0147C17.4153 18.0748 17.4381 18.1222 17.4837 18.2172Z"
                                stroke="#144A6C"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ),
                          label: "Phone",
                          value: "231-2324-2324"
                        },
                        {
                          icon: (
                            <svg
                              width={40}
                              height={41}
                              viewBox="0 0 40 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.0878906"
                                width={40}
                                height={40}
                                rx={8}
                                fill="white"
                              />
                              <path
                                d="M19.9997 29.2545C25.0623 29.2545 29.1663 25.1505 29.1663 20.0879C29.1663 15.0253 25.0623 10.9212 19.9997 10.9212M19.9997 29.2545C14.9371 29.2545 10.833 25.1505 10.833 20.0879C10.833 15.0253 14.9371 10.9212 19.9997 10.9212M19.9997 29.2545C21.8406 29.2545 23.333 25.1505 23.333 20.0879C23.333 15.0253 21.8406 10.9212 19.9997 10.9212M19.9997 29.2545C18.1587 29.2545 16.6663 25.1505 16.6663 20.0879C16.6663 15.0253 18.1587 10.9212 19.9997 10.9212M11.6663 16.7545H28.333M11.6663 22.5879H28.333"
                                stroke="#144A6C"
                                strokeLinecap="round"
                              />
                            </svg>
                          ),
                          label: "Language",
                          value: "English, Spanish"
                        },
                        {
                          icon: (
                            <svg
                              width={40}
                              height={41}
                              viewBox="0 0 40 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.0878906"
                                width={40}
                                height={40}
                                rx={8}
                                fill="white"
                              />
                              <path
                                d="M21.6665 16.7545H24.9998M21.6665 20.0879H24.9998M21.6665 23.4212H24.9998M14.3332 26.7545H25.6665C26.5999 26.7545 27.0666 26.7545 27.4232 26.5729C27.7368 26.4131 27.9917 26.1581 28.1515 25.8445C28.3332 25.488 28.3332 25.0213 28.3332 24.0879V16.0879C28.3332 15.1544 28.3332 14.6877 28.1515 14.3312C27.9917 14.0176 27.7368 13.7626 27.4232 13.6029C27.0666 13.4212 26.5999 13.4212 25.6665 13.4212H14.3332C13.3997 13.4212 12.933 13.4212 12.5765 13.6029C12.2629 13.7626 12.0079 14.0176 11.8482 14.3312C11.6665 14.6877 11.6665 15.1544 11.6665 16.0879V24.0879C11.6665 25.0213 11.6665 25.488 11.8482 25.8445C12.0079 26.1581 12.2629 26.4131 12.5765 26.5729C12.933 26.7545 13.3997 26.7545 14.3332 26.7545ZM15.4165 20.0879H17.9165C18.1466 20.0879 18.3332 19.9013 18.3332 19.6712V17.1712C18.3332 16.9411 18.1466 16.7545 17.9165 16.7545H15.4165C15.1864 16.7545 14.9998 16.9411 14.9998 17.1712V19.6712C14.9998 19.9013 15.1864 20.0879 15.4165 20.0879Z"
                                stroke="#144A6C"
                                strokeLinecap="round"
                              />
                            </svg>
                          ),
                          label: "License Number",
                          value: "34-34323-se43"
                        },
                        {
                          icon: (
                            <svg
                              width={40}
                              height={41}
                              viewBox="0 0 40 41"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.0878906"
                                width={40}
                                height={40}
                                rx={8}
                                fill="white"
                              />
                              <path
                                d="M12.5 18.4212H27.5M16.6667 15.0879V11.7546M23.3333 15.0879V11.7546M17.8333 28.4212H22.1667C24.0335 28.4212 24.9669 28.4212 25.68 28.0579C26.3072 27.7384 26.8171 27.2284 27.1367 26.6012C27.5 25.8882 27.5 24.9548 27.5 23.0879V18.7546C27.5 16.8877 27.5 15.9543 27.1367 15.2413C26.8171 14.6141 26.3072 14.1041 25.68 13.7846C24.9669 13.4212 24.0335 13.4212 22.1667 13.4212H17.8333C15.9665 13.4212 15.0331 13.4212 14.32 13.7846C13.6928 14.1041 13.1829 14.6141 12.8633 15.2413C12.5 15.9543 12.5 16.8877 12.5 18.7546V23.0879C12.5 24.9548 12.5 25.8882 12.8633 26.6012C13.1829 27.2284 13.6928 27.7384 14.32 28.0579C15.0331 28.4212 15.9665 28.4212 17.8333 28.4212Z"
                                stroke="#144A6C"
                                strokeLinecap="round"
                              />
                            </svg>
                          ),
                          label: "License Expiry",
                          value: "23-10-2025"
                        }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          {item.icon}
                          <div>
                            <p className="text-gray-500">{item.label}</p>
                            <p>{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white rounded-xl p-6 mt-8">
                      <div>
                        <h3 className="text-[#144A6C] font-semibold mb-2">
                          Availability
                        </h3>
                        <AppointmentPicker slotsByDate={slotsByDate} />
                      </div>
                    </div>
                  </div>
                </>
              )}
              {selectedTab === 1 && (
                <div className="bg-white rounded-xl shadow p-6">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      placeholder="Search"
                      onChange={e => setSearchTerm(e.target.value)}
                      className="text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:[#E6E4F0] w-full sm:w-64 bg-white text-sm border border-[#E6E4F0] focus:border-[#E6E4F0]"
                    />
                  </div>
                  <div className="w-full overflow-x-auto mt-3">
                    <table className="min-w-full">
                      <thead className="bg-gray-50">
                        <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            ID No
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Full Name
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Visit Reason
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Last Visit
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Next Visit
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Treatment Required
                          </th>
                        </tr>
                      </thead>

                      <tbody className="bg-white divide-y divide-[#EAECF0]">
                        {filteredDoctors.length === 0 ? (
                          <tr>
                            <td
                              colSpan={8}
                              className="py-8 px-4 text-center text-gray-400 text-sm"
                            >
                              <div className="flex flex-col items-center justify-center min-h-[500px]">
                                <svg
                                  width={221}
                                  height={228}
                                  viewBox="0 0 221 228"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M23.5351 99.8425C23.5351 99.8425 62.306 98.2899 70.6844 34.5588C78.1247 -22.0405 143.503 3.72142 162.401 26.2833C186.882 55.5102 173.832 105.787 205.501 112.138C237.17 118.49 216.49 189.106 168.418 182.346C108.618 173.938 123.086 208.882 105.134 223.673C92.2506 234.288 39.4234 224.069 37.6628 185.536C36.1812 153.11 22.5034 153.213 12.8086 149.536C-1.17365 144.234 -9.98398 105.83 23.5351 99.8425Z"
                                    fill="#CEE5E4"
                                  />
                                  <path
                                    d="M155.334 170.62L117.243 132.98L109.701 140.614L147.792 178.253L155.334 170.62Z"
                                    fill="#4CA3A3"
                                  />
                                  <path
                                    d="M169.885 180.733L140.25 151.45C140.085 151.286 139.819 151.288 139.656 151.453L128.439 162.804C128.276 162.969 128.278 163.235 128.443 163.398L158.078 192.682C158.243 192.845 158.509 192.843 158.672 192.678L169.889 181.327C170.052 181.162 170.05 180.896 169.885 180.733Z"
                                    fill="#144A6C"
                                  />
                                  <path
                                    d="M83.4827 151.911C109.688 151.911 130.932 130.667 130.932 104.461C130.932 78.2556 109.688 57.0117 83.4827 57.0117C57.2771 57.0117 36.0332 78.2556 36.0332 104.461C36.0332 130.667 57.2771 151.911 83.4827 151.911Z"
                                    fill="#144A6C"
                                  />
                                  <path
                                    d="M83.4826 144.168C105.412 144.168 123.19 126.391 123.19 104.461C123.19 82.5314 105.412 64.7539 83.4826 64.7539C61.5529 64.7539 43.7754 82.5314 43.7754 104.461C43.7754 126.391 61.5529 144.168 83.4826 144.168Z"
                                    fill="#F5FAFA"
                                  />
                                  <path
                                    d="M163.701 61.5666C152.571 57.9589 140.543 64.0605 136.921 75.2363C133.313 86.3663 139.415 98.3944 150.591 102.017C161.767 105.639 173.764 99.4774 177.372 88.3469C180.98 77.2163 174.832 65.1741 163.701 61.5666ZM160.343 71.928C161.589 72.3318 162.687 73.0965 163.497 74.1252C164.308 75.1538 164.795 76.4 164.896 77.7057C164.997 79.0114 164.709 80.3178 164.066 81.4591C163.424 82.6005 162.458 83.5254 161.289 84.1166C160.12 84.7078 158.802 84.9386 157.503 84.7797C156.203 84.6208 154.979 84.0795 153.987 83.2243C152.995 82.3691 152.28 81.2386 151.931 79.9762C151.583 78.7138 151.617 77.3763 152.03 76.1334C153.145 72.6947 156.904 70.8134 160.343 71.928ZM151.94 97.854C148.242 96.6616 145.074 94.2207 142.978 90.9493C146.9 88.7207 151.002 88.0999 154.712 89.3025C158.422 90.5051 161.439 93.3828 163.248 97.5193C159.632 98.9391 155.634 99.0575 151.94 97.854Z"
                                    fill="#2F6587"
                                  />
                                  <path
                                    d="M71.0631 162.989C69.1299 163.976 67.5327 165.513 66.4735 167.408C65.4143 169.302 64.9407 171.469 65.1126 173.632C65.2845 175.796 66.0941 177.86 67.4391 179.564C68.7841 181.267 70.604 182.534 72.6688 183.203C74.7335 183.872 76.9504 183.914 79.039 183.323C81.1276 182.733 82.9941 181.536 84.4026 179.884C85.811 178.233 86.6981 176.201 86.9516 174.045C87.2052 171.89 86.8138 169.707 85.827 167.774C84.5014 165.184 82.2025 163.225 79.4346 162.328C76.6668 161.431 73.6561 161.669 71.0631 162.989ZM73.6193 167.996C74.2214 167.689 74.9012 167.567 75.5726 167.647C76.2439 167.726 76.8765 168.003 77.3901 168.443C77.9037 168.883 78.2751 169.465 78.4573 170.116C78.6395 170.767 78.6242 171.457 78.4134 172.1C78.2026 172.742 77.8058 173.307 77.2733 173.724C76.7408 174.14 76.0965 174.389 75.4223 174.439C74.7481 174.489 74.0743 174.337 73.4864 174.004C72.8985 173.67 72.4229 173.169 72.12 172.565C71.7185 171.759 71.6508 170.828 71.9315 169.972C72.2121 169.117 72.8185 168.407 73.6193 167.996V167.996ZM80.0149 180.526C78.23 181.441 76.1828 181.706 74.2238 181.277C74.8419 179.032 76.1122 177.309 77.9058 176.393C79.6993 175.478 81.8504 175.427 84.0205 176.277C83.2186 178.115 81.8025 179.617 80.0149 180.526V180.526Z"
                                    fill="#2F6587"
                                  />
                                </svg>
                                <p className="text-[#144A6C] text-2xl mt-4">
                                  No Record Found!
                                </p>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          filteredDoctors.map(doctor => (
                            <tr key={doctor.id} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.fullName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.visitReason}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.lastVisit}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.nextVisit}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.treatmentRequired}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {selectedTab === 2 && (
                <div className="bg-white rounded-xl shadow p-6">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      onChange={e => setSearchTerm1(e.target.value)}
                      placeholder="Search"
                      className="text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:[#E6E4F0] w-full sm:w-64 bg-white text-sm border border-[#E6E4F0] focus:border-[#E6E4F0]"
                    />
                  </div>
                  <div className="w-full overflow-x-auto mt-3">
                    <table className="min-w-full">
                      <thead className="bg-gray-50">
                        <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Treatment
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Patient Name
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Date Performed
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Amount
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Status
                          </th>
                        </tr>
                      </thead>

                      <tbody className="bg-white divide-y divide-[#EAECF0]">
                        {filteredDoctores.length === 0 ? (
                          <tr>
                            <td
                              colSpan={8}
                              className="py-8 px-4 text-center text-gray-400 text-sm"
                            >
                              <div className="flex flex-col items-center justify-center min-h-[500px]">
                                <svg
                                  width={221}
                                  height={228}
                                  viewBox="0 0 221 228"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M23.5351 99.8425C23.5351 99.8425 62.306 98.2899 70.6844 34.5588C78.1247 -22.0405 143.503 3.72142 162.401 26.2833C186.882 55.5102 173.832 105.787 205.501 112.138C237.17 118.49 216.49 189.106 168.418 182.346C108.618 173.938 123.086 208.882 105.134 223.673C92.2506 234.288 39.4234 224.069 37.6628 185.536C36.1812 153.11 22.5034 153.213 12.8086 149.536C-1.17365 144.234 -9.98398 105.83 23.5351 99.8425Z"
                                    fill="#CEE5E4"
                                  />
                                  <path
                                    d="M155.334 170.62L117.243 132.98L109.701 140.614L147.792 178.253L155.334 170.62Z"
                                    fill="#4CA3A3"
                                  />
                                  <path
                                    d="M169.885 180.733L140.25 151.45C140.085 151.286 139.819 151.288 139.656 151.453L128.439 162.804C128.276 162.969 128.278 163.235 128.443 163.398L158.078 192.682C158.243 192.845 158.509 192.843 158.672 192.678L169.889 181.327C170.052 181.162 170.05 180.896 169.885 180.733Z"
                                    fill="#144A6C"
                                  />
                                  <path
                                    d="M83.4827 151.911C109.688 151.911 130.932 130.667 130.932 104.461C130.932 78.2556 109.688 57.0117 83.4827 57.0117C57.2771 57.0117 36.0332 78.2556 36.0332 104.461C36.0332 130.667 57.2771 151.911 83.4827 151.911Z"
                                    fill="#144A6C"
                                  />
                                  <path
                                    d="M83.4826 144.168C105.412 144.168 123.19 126.391 123.19 104.461C123.19 82.5314 105.412 64.7539 83.4826 64.7539C61.5529 64.7539 43.7754 82.5314 43.7754 104.461C43.7754 126.391 61.5529 144.168 83.4826 144.168Z"
                                    fill="#F5FAFA"
                                  />
                                  <path
                                    d="M163.701 61.5666C152.571 57.9589 140.543 64.0605 136.921 75.2363C133.313 86.3663 139.415 98.3944 150.591 102.017C161.767 105.639 173.764 99.4774 177.372 88.3469C180.98 77.2163 174.832 65.1741 163.701 61.5666ZM160.343 71.928C161.589 72.3318 162.687 73.0965 163.497 74.1252C164.308 75.1538 164.795 76.4 164.896 77.7057C164.997 79.0114 164.709 80.3178 164.066 81.4591C163.424 82.6005 162.458 83.5254 161.289 84.1166C160.12 84.7078 158.802 84.9386 157.503 84.7797C156.203 84.6208 154.979 84.0795 153.987 83.2243C152.995 82.3691 152.28 81.2386 151.931 79.9762C151.583 78.7138 151.617 77.3763 152.03 76.1334C153.145 72.6947 156.904 70.8134 160.343 71.928ZM151.94 97.854C148.242 96.6616 145.074 94.2207 142.978 90.9493C146.9 88.7207 151.002 88.0999 154.712 89.3025C158.422 90.5051 161.439 93.3828 163.248 97.5193C159.632 98.9391 155.634 99.0575 151.94 97.854Z"
                                    fill="#2F6587"
                                  />
                                  <path
                                    d="M71.0631 162.989C69.1299 163.976 67.5327 165.513 66.4735 167.408C65.4143 169.302 64.9407 171.469 65.1126 173.632C65.2845 175.796 66.0941 177.86 67.4391 179.564C68.7841 181.267 70.604 182.534 72.6688 183.203C74.7335 183.872 76.9504 183.914 79.039 183.323C81.1276 182.733 82.9941 181.536 84.4026 179.884C85.811 178.233 86.6981 176.201 86.9516 174.045C87.2052 171.89 86.8138 169.707 85.827 167.774C84.5014 165.184 82.2025 163.225 79.4346 162.328C76.6668 161.431 73.6561 161.669 71.0631 162.989ZM73.6193 167.996C74.2214 167.689 74.9012 167.567 75.5726 167.647C76.2439 167.726 76.8765 168.003 77.3901 168.443C77.9037 168.883 78.2751 169.465 78.4573 170.116C78.6395 170.767 78.6242 171.457 78.4134 172.1C78.2026 172.742 77.8058 173.307 77.2733 173.724C76.7408 174.14 76.0965 174.389 75.4223 174.439C74.7481 174.489 74.0743 174.337 73.4864 174.004C72.8985 173.67 72.4229 173.169 72.12 172.565C71.7185 171.759 71.6508 170.828 71.9315 169.972C72.2121 169.117 72.8185 168.407 73.6193 167.996V167.996ZM80.0149 180.526C78.23 181.441 76.1828 181.706 74.2238 181.277C74.8419 179.032 76.1122 177.309 77.9058 176.393C79.6993 175.478 81.8504 175.427 84.0205 176.277C83.2186 178.115 81.8025 179.617 80.0149 180.526V180.526Z"
                                    fill="#2F6587"
                                  />
                                </svg>
                                <p className="text-[#144A6C] text-2xl mt-4">
                                  No Record Found!
                                </p>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          filteredDoctores.map(doctor => (
                            <tr
                              key={doctor.Treatment}
                              className="hover:bg-gray-50"
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.Treatment}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.visitReason}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.lastVisit}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {doctor.Amount}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <span
                                  className={`
      inline-flex px-3 py-1 rounded-full text-xs font-medium
      ${
        doctor.Status === "Complete"
          ? "bg-[#F8FFF8] text-[#177606] border border-[#B7EFAB] rounded-sm pl-4 pr-4 pt-2 pb-2"
          : ""
      }
      ${
        doctor.Status === "Pending"
          ? "bg-[#F3F3F4] text-[#6E6D6F] border border-[#9C9C9C] rounded-sm pl-4 pr-4 pt-2 pb-2"
          : ""
      }
      ${
        doctor.Status === "Ongoing"
          ? "bg-[#FFFEF8] text-[#767306] border border-[#EFEEAB] rounded-sm pl-4 pr-4 pt-2 pb-2"
          : ""
      }
    `}
                                >
                                  {doctor.Status}
                                </span>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Right Panel */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="text-[#144A6C] text-1xl font-regular mb-4">
                Upcoming Appointments
              </h3>
              <hr className="bg-[#F6F6F6]" />
              <div className="space-y-4 mt-3 max-h-[1070px] overflow-y-auto">
                {/* Today Section */}
                <span className="text-[#56555C] p-3 block">Today</span>
                {[...Array(10)].map((_, i) => (
                  <div
                    key={`today-${i}`}
                    className="rounded p-3 hover:bg-[#CEE5E4] mt-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-[#144A6C] font-medium text-md">
                        Root Canal
                      </div>
                      <div className="client-name">
                        <p className="text-[#606061]">Chandler M Bingg</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-[#606061]">
                        10:00am - 11:00am
                      </div>
                      <div className="text-[#606061]">Nov 01, 2024</div>
                    </div>
                  </div>
                ))}

                <hr className="bg-[#F6F6F6] my-4" />

                {/* 12 July Section */}
                <span className="text-[#56555C] p-3 block">12 July</span>
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`12july-2025${i}`}
                    className="rounded p-3 hover:bg-[#CEE5E4] mt-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-[#144A6C] font-medium text-md">
                        Root Canal
                      </div>
                      <div className="client-name">
                        <p className="text-[#606061]">Joey Tribbiani</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-[#606061]">
                        02:00pm - 03:00pm
                      </div>
                      <div className="text-[#606061]">Jul 12, 2024</div>
                    </div>
                  </div>
                ))}

                {/* 12 July Section */}
                <span className="text-[#56555C] p-3 block">12 July</span>
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`12july-2025${i}`}
                    className="rounded p-3 hover:bg-[#CEE5E4] mt-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-[#144A6C] font-medium text-md">
                        Root Canal
                      </div>
                      <div className="client-name">
                        <p className="text-[#606061]">Joey Tribbiani</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-[#606061]">
                        02:00pm - 03:00pm
                      </div>
                      <div className="text-[#606061]">Jul 12, 2024</div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <hr className="bg-[#F6F6F6]" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}