"use client"
import { Search, Plus } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import DoctorModal from "./DoctorModal"
export default function DoctorsTable() {
  const doctors = [
    {
      id: "738",
      fullName: "Johnsie Jock",
      specialty: "General",
      phone: "(619) 555-0123",
      email: "johndoe@example.com",
      address: "123 Elm St, San Diego, CA 92101",
      appointments: 567,
      patients: 234
    },
    {
      id: "185",
      fullName: "Cyndy Lillibridqe",
      specialty: "Orthodontics",
      phone: "(858) 555-0198",
      email: "janesmith@example.com",
      address: "456 Oak St, San Diego, CA 92102",
      appointments: 345,
      patients: 876
    },
    {
      id: "816",
      fullName: "Tyra Dhillon",
      specialty: "Pediatric",
      phone: "(760) 555-0345",
      email: "michaelbrown@example.com",
      address: "789 Pine St, San Diego, CA 92103",
      appointments: 210,
      patients: 543
    },
    {
      id: "922",
      fullName: "Laurelee Quintero",
      specialty: "Periodontics",
      phone: "(619) 555-0786",
      email: "lisajohnson@example.com",
      address: "321 Maple Ave, San Diego, CA 92104",
      appointments: 432,
      patients: 678
    },
    {
      id: "647",
      fullName: "Aileen Fullbright",
      specialty: "Endodontics",
      phone: "(858) 555-0987",
      email: "davidwilson@example.com",
      address: "654 Cedar Blvd, San Diego, CA 92105",
      appointments: 654,
      patients: 321
    },
    {
      id: "426",
      fullName: "Brittni Londo",
      specialty: "Oral and Maxillofacial",
      phone: "(760) 555-1234",
      email: "sarahmiller@example.com",
      address: "987 Birch Ct, San Diego, CA 92106",
      appointments: 246,
      patients: 135
    },
    {
      id: "556",
      fullName: "Darcel Bollentine",
      specialty: "Prosthodontics",
      phone: "(619) 555-5678",
      email: "kevinmoore@example.com",
      address: "159 Willow Way, San Diego, CA 92107",
      appointments: 357,
      patients: 864
    },
    {
      id: "540",
      fullName: "Marv Hershey",
      specialty: "Cosmetic",
      phone: "(858) 555-8765",
      email: "patriciagarcia@example.com",
      address: "753 Spruce Dr, San Diego, CA 92108",
      appointments: 468,
      patients: 951
    },
    {
      id: "600",
      fullName: "Tynisha Obey",
      specialty: "Public Health",
      phone: "(760) 555-2345",
      email: "emilythomas@example.com",
      address: "852 Chestnut Cir, San Diego, CA 92109",
      appointments: 159,
      patients: 789
    },
    {
      id: "740",
      fullName: "Chieko Chute",
      specialty: "Dental Anesthesiology",
      phone: "(619) 555-3456",
      email: "jessicajones@example.com",
      address: "246 Fir St, San Diego, CA 92110",
      appointments: 678,
      patients: 432
    },
    {
      id: "883",
      fullName: "Chantal Shelburne",
      specialty: "Geriatric",
      phone: "(858) 555-4567",
      email: "stevenclark@example.com",
      address: "369 Ash Ln, San Diego, CA 92111",
      appointments: 789,
      patients: 123
    },
    {
      id: "130",
      fullName: "Annabel Rohan",
      specialty: "Oral Pathology",
      phone: "(760) 555-6789",
      email: "aishawhite@example.com",
      address: "258 Palm St, San Diego, CA 92112",
      appointments: 321,
      patients: 974
    }
  ]
  const [searchTerm, setSearchTerm] = useState("")
  const filteredDoctors = doctors.filter(doctor =>
    doctor.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [ModalAnimation, setModalAnimation] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [ModalAnimation1, setModalAnimation1] = useState(false)
  const {
    watch,
    formState: { errors }
  } = useForm()

  console.log(watch("example"))
  const people = [
    { id: 1, name: "Dentist" },
    { id: 2, name: "Arlene Mccoy" },
    { id: 3, name: "Devon Webb" }
  ]
  const [selected, setSelected] = useState(people[0])

  const languages = [
    { id: 1, name: "English" },
    { id: 2, name: "German" },
    { id: 3, name: "Spanish" }
  ]
  const [languageselected, languagesetSelected] = useState(languages[0])
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
      <div className="flex flex-col h-full bg-white lg:rounded-r-lg">
        {/* Header - Same background as sidebar */}
        <div className="set-header pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-shrink-0 lg:rounded-tr-lg">
          <h1 className="text-3xl font-regular text-[#144A6C]">Doctors</h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:ring-2 focus:[#144A6C] w-full sm:w-64 bg-white text-sm"
              />
            </div>
            <div>
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#144A6C] pl-4 pr-6 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap"
              >
                <Plus className="w-6 h-6 text-white" />
                <span className="text-base font-regular">Doctor</span>
              </button>

              <DoctorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
            </div>
          </div>
        </div>

        {/* Table - White background, scrollable */}
        <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
          {/* Desktop Table */}
          <div className="">
            <div className="card h-[calc(100vh-235px)] flex flex-col">
              <div className="card-body flex-1 flex flex-col overflow-hidden">
                <div className="w-full overflow-x-auto">
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
                          Specialty
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Phone Number
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Email Address
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Address
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Appointments
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          Patients
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                          <svg
                            width={24}
                            height={25}
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.6248 11.7128H12.3748M11.6248 12.4628H12.3748M11.6248 4.71283H12.3748M11.6248 5.46283H12.3748M11.6248 18.7128H12.3748M11.6248 19.4628H12.3748M4.62476 11.7128H5.37476M4.62476 12.4628H5.37476M4.62476 4.71283H5.37476M4.62476 5.46283H5.37476M4.62476 18.7128H5.37476M4.62476 19.4628H5.37476M18.6248 11.7128H19.3748M18.6248 12.4628H19.3748M18.6248 4.71283H19.3748M18.6248 5.46283H19.3748M18.6248 18.7128H19.3748M18.6248 19.4628H19.3748M13 12.0879C13 12.6402 12.5523 13.0879 12 13.0879C11.4477 13.0879 11 12.6402 11 12.0879C11 11.5356 11.4477 11.0879 12 11.0879C12.5523 11.0879 13 11.5356 13 12.0879ZM13 5.08789C13 5.64018 12.5523 6.08789 12 6.08789C11.4477 6.08789 11 5.64018 11 5.08789C11 4.53561 11.4477 4.08789 12 4.08789C12.5523 4.08789 13 4.53561 13 5.08789ZM13 19.0879C13 19.6402 12.5523 20.0879 12 20.0879C11.4477 20.0879 11 19.6402 11 19.0879C11 18.5356 11.4477 18.0879 12 18.0879C12.5523 18.0879 13 18.5356 13 19.0879ZM6 12.0879C6 12.6402 5.55229 13.0879 5 13.0879C4.44772 13.0879 4 12.6402 4 12.0879C4 11.5356 4.44772 11.0879 5 11.0879C5.55229 11.0879 6 11.5356 6 12.0879ZM6 5.08789C6 5.64018 5.55229 6.08789 5 6.08789C4.44772 6.08789 4 5.64018 4 5.08789C4 4.53561 4.44772 4.08789 5 4.08789C5.55229 4.08789 6 4.53561 6 5.08789ZM6 19.0879C6 19.6402 5.55229 20.0879 5 20.0879C4.44772 20.0879 4 19.6402 4 19.0879C4 18.5356 4.44772 18.0879 5 18.0879C5.55229 18.0879 6 18.5356 6 19.0879ZM20 12.0879C20 12.6402 19.5523 13.0879 19 13.0879C18.4477 13.0879 18 12.6402 18 12.0879C18 11.5356 18.4477 11.0879 19 11.0879C19.5523 11.0879 20 11.5356 20 12.0879ZM20 5.08789C20 5.64018 19.5523 6.08789 19 6.08789C18.4477 6.08789 18 5.64018 18 5.08789C18 4.53561 18.4477 4.08789 19 4.08789C19.5523 4.08789 20 4.53561 20 5.08789ZM20 19.0879C20 19.6402 19.5523 20.0879 19 20.0879C18.4477 20.0879 18 19.6402 18 19.0879C18 18.5356 18.4477 18.0879 19 18.0879C19.5523 18.0879 20 18.5356 20 19.0879Z"
                              stroke="#144A6C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
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
                            <td
                              className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                              onClick={() => router.push("/admin/doctorprofile")}
                            >
                              {doctor.id}
                            </td>
                            <td
                              className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                              onClick={() => router.push("/admin/doctorprofile")}
                            >
                              {doctor.fullName}
                            </td>
                            <td
                              className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                              onClick={() => router.push("/admin/doctorprofile")}
                            >
                              {doctor.specialty}
                            </td>
                            <td
                              className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                              onClick={() => router.push("/admin/doctorprofile")}
                            >
                              {doctor.phone}
                            </td>
                            <td
                              className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                              onClick={() => router.push("/admin/doctorprofile")}
                            >
                              {doctor.email}
                            </td>
                            <td
                              className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                              onClick={() => router.push("/admin/doctorprofile")}
                            >
                              {doctor.address}
                            </td>
                            <td
                              className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                              onClick={() => router.push("/admin/doctorprofile")}
                            >
                              {doctor.appointments}
                            </td>
                            <td
                              className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                              onClick={() => router.push("/admin/doctorprofile")}
                            >
                              {doctor.patients}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div className="flex items-center space-x-2">
                                <button className="text-blue-600 hover:text-blue-800">
                                  <svg
                                    width={22}
                                    height={23}
                                    viewBox="0 0 22 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3.21424 16.5816L3.92575 16.8188L3.21424 16.5816ZM4.06269 14.0363L3.35118 13.7991H3.35118L4.06269 14.0363ZM4.93817 12.6197L5.46849 13.1501L5.4685 13.1501L4.93817 12.6197ZM13.3932 4.16469L12.8629 3.63436V3.63436L13.3932 4.16469ZM17.9232 8.69468L18.4535 9.22501L17.9232 8.69468ZM9.46815 17.1497L8.93782 16.6194L8.93782 16.6194L9.46815 17.1497ZM8.05161 18.0252L8.28878 18.7367H8.28878L8.05161 18.0252ZM5.50626 18.8736L5.74343 19.5852H5.74343L5.50626 18.8736ZM9.00378 17.5832L8.5521 16.9844L8.5521 16.9844L9.00378 17.5832ZM8.64697 17.8037L8.31344 17.1319L8.64697 17.8037ZM19.0145 5.42399L18.3425 5.75701L18.3425 5.75701L19.0145 5.42399ZM19.0145 7.43538L18.3425 7.10237H18.3425L19.0145 7.43538ZM14.6525 3.07341L14.9855 3.74542L14.9855 3.74542L14.6525 3.07341ZM16.6639 3.07341L16.3309 3.74542V3.74542L16.6639 3.07341ZM4.2842 13.4409L4.95596 13.7745L4.95596 13.7745L4.2842 13.4409ZM4.50473 13.0841L3.90599 12.6324L3.90599 12.6324L4.50473 13.0841ZM2.79217 18.6094L2.08574 18.8613L2.79217 18.6094ZM3.47849 19.2957L3.22658 20.0022L3.22658 20.0022L3.47849 19.2957ZM12.791 4.7669C12.4981 4.47401 12.0233 4.47401 11.7304 4.7669C11.4375 5.05979 11.4375 5.53467 11.7304 5.82756L12.791 4.7669ZM16.2604 10.3575C16.5533 10.6504 17.0281 10.6504 17.321 10.3575C17.6139 10.0647 17.6139 9.58978 17.321 9.29689L16.2604 10.3575ZM3.21424 16.5816L3.92575 16.8188L4.77421 14.2734L4.06269 14.0363L3.35118 13.7991L2.50273 16.3445L3.21424 16.5816ZM4.93817 12.6197L5.4685 13.1501L13.9235 4.69502L13.3932 4.16469L12.8629 3.63436L4.40784 12.0894L4.93817 12.6197ZM17.9232 8.69468L17.3929 8.16435L8.93782 16.6194L9.46815 17.1497L9.99848 17.6801L18.4535 9.22501L17.9232 8.69468ZM8.05161 18.0252L7.81444 17.3137L5.26908 18.1621L5.50626 18.8736L5.74343 19.5852L8.28878 18.7367L8.05161 18.0252ZM9.46815 17.1497L8.93782 16.6194C8.69806 16.8592 8.62681 16.9281 8.5521 16.9844L9.00378 17.5832L9.45546 18.1819C9.63266 18.0482 9.78703 17.8915 9.99849 17.6801L9.46815 17.1497ZM8.05161 18.0252L8.28878 18.7367C8.57248 18.6421 8.78168 18.5742 8.98049 18.4754L8.64697 17.8037L8.31344 17.1319C8.22961 17.1735 8.13612 17.2065 7.81444 17.3137L8.05161 18.0252ZM9.00378 17.5832L8.5521 16.9844C8.47728 17.0409 8.39738 17.0902 8.31344 17.1319L8.64697 17.8037L8.98049 18.4754C9.14755 18.3925 9.30656 18.2942 9.45546 18.1819L9.00378 17.5832ZM17.9232 4.16469L17.3929 4.69502C18.0532 5.35534 18.2459 5.56203 18.3425 5.75701L19.0145 5.42399L19.6865 5.09098C19.453 4.61984 19.0282 4.20904 18.4535 3.63436L17.9232 4.16469ZM17.9232 8.69468L18.4535 9.22501C19.0282 8.65034 19.453 8.23954 19.6865 7.76839L19.0145 7.43538L18.3425 7.10237C18.2459 7.29734 18.0532 7.50404 17.3929 8.16435L17.9232 8.69468ZM19.0145 5.42399L18.3425 5.75701C18.5525 6.18087 18.5525 6.67851 18.3425 7.10237L19.0145 7.43538L19.6865 7.76839C20.1045 6.92487 20.1045 5.93451 19.6865 5.09098L19.0145 5.42399ZM13.3932 4.16469L13.9235 4.69502C14.5838 4.03471 14.7905 3.84204 14.9855 3.74542L14.6525 3.07341L14.3195 2.40139C13.8484 2.63486 13.4375 3.05969 12.8629 3.63436L13.3932 4.16469ZM17.9232 4.16469L18.4535 3.63436C17.8789 3.05969 17.4681 2.63487 16.9969 2.40139L16.6639 3.07341L16.3309 3.74542C16.5259 3.84204 16.7326 4.03471 17.3929 4.69502L17.9232 4.16469ZM14.6525 3.07341L14.9855 3.74542C15.4094 3.53538 15.907 3.53538 16.3309 3.74542L16.6639 3.07341L16.9969 2.40139C16.1534 1.98339 15.163 1.98339 14.3195 2.40139L14.6525 3.07341ZM4.06269 14.0363L4.77421 14.2734C4.88143 13.9518 4.91434 13.8583 4.95596 13.7745L4.2842 13.4409L3.61245 13.1074C3.51373 13.3062 3.44575 13.5154 3.35118 13.7991L4.06269 14.0363ZM4.93817 12.6197L4.40784 12.0894C4.19638 12.3009 4.03967 12.4552 3.90599 12.6324L4.50473 13.0841L5.10346 13.5358C5.15982 13.4611 5.22873 13.3898 5.46849 13.1501L4.93817 12.6197ZM4.2842 13.4409L4.95596 13.7745C4.99764 13.6905 5.04702 13.6106 5.10346 13.5358L4.50473 13.0841L3.90599 12.6324C3.79366 12.7813 3.69539 12.9403 3.61245 13.1074L4.2842 13.4409ZM3.21424 16.5816L2.50273 16.3445C2.32303 16.8836 2.17108 17.337 2.08557 17.7009C2.00268 18.0537 1.94406 18.464 2.08574 18.8613L2.79217 18.6094L3.49859 18.3575C3.50907 18.3869 3.47707 18.3366 3.5458 18.0441C3.61191 17.7627 3.7366 17.3863 3.92575 16.8188L3.21424 16.5816ZM5.50626 18.8736L5.26909 18.1621C4.70162 18.3513 4.32519 18.476 4.04382 18.5421C3.75133 18.6108 3.70101 18.5788 3.7304 18.5893L3.47849 19.2957L3.22658 20.0022C3.6239 20.1438 4.03418 20.0852 4.38695 20.0023C4.75085 19.9168 5.20433 19.7649 5.74343 19.5852L5.50626 18.8736ZM2.79217 18.6094L2.08574 18.8613C2.27553 19.3935 2.69435 19.8124 3.22658 20.0022L3.47849 19.2957L3.7304 18.5893C3.62226 18.5507 3.53716 18.4656 3.49859 18.3575L2.79217 18.6094ZM12.2607 5.29723L11.7304 5.82756L16.2604 10.3575L16.7907 9.82722L17.321 9.29689L12.791 4.7669L12.2607 5.29723Z"
                                      fill="#144A6C"
                                    />
                                  </svg>
                                </button>
                                <div>
                                  <button
                                    onClick={() => {
                                      setIsOpen1(true)
                                      setTimeout(
                                        () => setModalAnimation1(true),
                                        10
                                      )
                                    }}
                                  >
                                    <svg
                                      width={22}
                                      height={23}
                                      viewBox="0 0 22 23"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M17.318 16.6207L18.068 16.6274L17.318 16.6207ZM3.6665 4.83793C3.25229 4.83793 2.9165 5.17372 2.9165 5.58793C2.9165 6.00214 3.25229 6.33793 3.6665 6.33793V4.83793ZM18.3332 6.33793C18.7474 6.33793 19.0832 6.00214 19.0832 5.58793C19.0832 5.17372 18.7474 4.83793 18.3332 4.83793V6.33793ZM9.9165 9.2546C9.9165 8.84038 9.58072 8.5046 9.1665 8.5046C8.75229 8.5046 8.4165 8.84038 8.4165 9.2546H9.9165ZM8.4165 16.5879C8.4165 17.0021 8.75229 17.3379 9.1665 17.3379C9.58072 17.3379 9.9165 17.0021 9.9165 16.5879H8.4165ZM13.5832 9.2546C13.5832 8.84038 13.2474 8.5046 12.8332 8.5046C12.419 8.5046 12.0832 8.84038 12.0832 9.2546H13.5832ZM12.0832 16.5879C12.0832 17.0021 12.419 17.3379 12.8332 17.3379C13.2474 17.3379 13.5832 17.0021 13.5832 16.5879H12.0832ZM17.4165 5.58793L16.6665 5.58123L16.568 16.614L17.318 16.6207L18.068 16.6274L18.1665 5.59463L17.4165 5.58793ZM13.6515 20.2546V19.5046H8.24984V20.2546V21.0046H13.6515V20.2546ZM4.58317 5.58793H3.83317V16.5879H4.58317H5.33317V5.58793H4.58317ZM3.6665 5.58793V6.33793H4.58317V5.58793V4.83793H3.6665V5.58793ZM4.58317 5.58793V6.33793H7.33317V5.58793V4.83793H4.58317V5.58793ZM7.33317 5.58793V6.33793H14.6665V5.58793V4.83793H7.33317V5.58793ZM14.6665 5.58793V6.33793H17.4165V5.58793V4.83793H14.6665V5.58793ZM17.4165 5.58793V6.33793H18.3332V5.58793V4.83793H17.4165V5.58793ZM7.33317 5.18052H8.08317C8.08317 3.8753 9.30352 2.67126 10.9998 2.67126V1.92126V1.17126C8.64607 1.17126 6.58317 2.88567 6.58317 5.18052H7.33317ZM10.9998 1.92126V2.67126C12.6962 2.67126 13.9165 3.8753 13.9165 5.18052H14.6665H15.4165C15.4165 2.88567 13.3536 1.17126 10.9998 1.17126V1.92126ZM7.33317 5.18052H6.58317V5.58793H7.33317H8.08317V5.18052H7.33317ZM14.6665 5.18052H13.9165V5.58793H14.6665H15.4165V5.18052H14.6665ZM8.24984 20.2546V19.5046C6.63901 19.5046 5.33317 18.1988 5.33317 16.5879H4.58317H3.83317C3.83317 19.0272 5.81058 21.0046 8.24984 21.0046V20.2546ZM17.318 16.6207L16.568 16.614C16.5537 18.2146 15.2521 19.5046 13.6515 19.5046V20.2546V21.0046C16.0753 21.0046 18.0463 19.0511 18.068 16.6274L17.318 16.6207ZM9.1665 9.2546H8.4165V16.5879H9.1665H9.9165V9.2546H9.1665ZM12.8332 9.2546H12.0832V16.5879H12.8332H13.5832V9.2546H12.8332Z"
                                        fill="#EF2D2D"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
