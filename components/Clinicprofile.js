"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import ClinicCard from "./ClinicCard";

const DoctorsTable = [
  {
    id: "D001",
    fullName: "Dr. Sehrish Khan",
    visitReason: "General",
    lastVisit: "04-01-2025",
    nextVisit: "04-15-2025",
    treatmentRequired: "Root Canal",
    Appointment: "112",
    Patient: "58",
  },
  {
    id: "D002",
    fullName: "Dr. Ahmed Raza",
    visitReason: "Dental Checkup",
    lastVisit: "04-02-2025",
    nextVisit: "04-16-2025",
    treatmentRequired: "Cleaning",
    Appointment: "98",
    Patient: "44",
  },
  {
    id: "D003",
    fullName: "Dr. Nida Saleem",
    visitReason: "Pediatrics",
    lastVisit: "04-03-2025",
    nextVisit: "04-17-2025",
    treatmentRequired: "Flu Shot",
    Appointment: "134",
    Patient: "62",
  },
  {
    id: "D004",
    fullName: "Dr. Zainab Malik",
    visitReason: "Cardiology",
    lastVisit: "04-04-2025",
    nextVisit: "04-18-2025",
    treatmentRequired: "ECG",
    Appointment: "120",
    Patient: "49",
  },
  {
    id: "D005",
    fullName: "Dr. Osama Qureshi",
    visitReason: "Orthopedics",
    lastVisit: "04-05-2025",
    nextVisit: "04-19-2025",
    treatmentRequired: "X-ray",
    Appointment: "110",
    Patient: "51",
  },
  {
    id: "D006",
    fullName: "Dr. Areeba Jamil",
    visitReason: "ENT",
    lastVisit: "04-06-2025",
    nextVisit: "04-20-2025",
    treatmentRequired: "Ear Cleaning",
    Appointment: "102",
    Patient: "46",
  },
];

const DoctorsTables = [
  {
    Treatment: "001",
    visitReason: "Ali Raza",
    lastVisit: "Male",
    Amount: "(213) 555-0198",
    Birth: "03-15-1995",
    Addresses: "123 Oak St, Karachi, PK",
    Age: "30",
    Registration: "10-01-2025",
  },
  {
    Treatment: "002",
    visitReason: "Sana Khalid",
    lastVisit: "Female",
    Amount: "(310) 555-0172",
    Birth: "11-20-1993",
    Addresses: "789 Pine Rd, Lahore, PK",
    Age: "31",
    Registration: "11-05-2025",
  },
  {
    Treatment: "003",
    visitReason: "Bilal Ahmed",
    lastVisit: "Male",
    Amount: "(424) 555-0134",
    Birth: "02-12-1987",
    Addresses: "56 Gulberg III, Lahore",
    Age: "38",
    Registration: "09-15-2025",
  },
  {
    Treatment: "004",
    visitReason: "Ayesha Noor",
    lastVisit: "Female",
    Amount: "(512) 555-0150",
    Birth: "06-25-2001",
    Addresses: "235 DHA Phase 6, Karachi",
    Age: "24",
    Registration: "08-20-2025",
  },
  {
    Treatment: "005",
    visitReason: "Hamza Tariq",
    lastVisit: "Male",
    Amount: "(619) 555-0119",
    Birth: "12-03-1998",
    Addresses: "Block 13, F-10, Islamabad",
    Age: "26",
    Registration: "07-13-2025",
  },
];

const InventoryTable = [
  {
    id: "INV001",
    material: "Paracetamol",
    pack: "Box of 100",
    unit: "Tablet",
    baseStock: 500,
    currentStock: 200,
    vatCost: "20 PKR",
    costWithVat: "220 PKR",
    minimumStock: 100,
    wantedQty: 300,
  },
  {
    id: "INV002",
    material: "Ibuprofen",
    pack: "Bottle of 50",
    unit: "Syrup",
    baseStock: 300,
    currentStock: 150,
    vatCost: "15 PKR",
    costWithVat: "165 PKR",
    minimumStock: 50,
    wantedQty: 200,
  },
  {
    id: "INV003",
    material: "Amoxicillin",
    pack: "Box of 30",
    unit: "Capsule",
    baseStock: 250,
    currentStock: 100,
    vatCost: "30 PKR",
    costWithVat: "180 PKR",
    minimumStock: 80,
    wantedQty: 150,
  },
  {
    id: "INV004",
    material: "Cough Syrup",
    pack: "100ml Bottle",
    unit: "Liquid",
    baseStock: 180,
    currentStock: 90,
    vatCost: "10 PKR",
    costWithVat: "110 PKR",
    minimumStock: 60,
    wantedQty: 90,
  },
];

const BillingTable = [
  {
    Treatment: "INV-0001",
    visitReason: "Root Canal",
    lastVisit: "01-01-2025",
    Amount: "3500",
    Status: "Paid",
  },
  {
    Treatment: "INV-0002",
    visitReason: "Cleaning",
    lastVisit: "02-01-2025",
    Amount: "1500",
    Status: "Unpaid",
  },
  {
    Treatment: "INV-0003",
    visitReason: "Tooth Extraction",
    lastVisit: "03-01-2025",
    Amount: "2500",
    Status: "Paid",
  },
  {
    Treatment: "INV-0004",
    visitReason: "Flu Vaccine",
    lastVisit: "04-01-2025",
    Amount: "800",
    Status: "Paid",
  },
  {
    Treatment: "INV-0005",
    visitReason: "Consultation",
    lastVisit: "05-01-2025",
    Amount: "1000",
    Status: "Unpaid",
  },
  {
    Treatment: "INV-0006",
    visitReason: "X-Ray",
    lastVisit: "06-01-2025",
    Amount: "1200",
    Status: "Paid",
  },
];

export default function Clinicprofile() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["Details", "Doctors", "Patients", "Inventory", "Billing"];
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const router = useRouter();
  const filteredDoctors = DoctorsTable.filter((doctors) => {
    const matchSearch = doctors.fullName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchSearch;
  });
  const filteredDoctores = DoctorsTables.filter((doctors) => {
    const matchSearch = doctors.Treatment.toLowerCase().includes(searchTerm1.toLowerCase()) || doctors.visitReason.toLowerCase().includes(searchTerm1.toLowerCase());
    return matchSearch;
  });
  const Inventory = InventoryTable.filter((item) => {
    const matchSearch = item.material.toLowerCase().includes(searchTerm2.toLowerCase()) || item.pack.toLowerCase().includes(searchTerm2.toLowerCase());
    return matchSearch;
  });

  const Billing = BillingTable.filter((doctor) => {
    const matchSearch = doctor.Treatment.toLowerCase().includes(searchTerm3.toLowerCase()) || doctor.visitReason.toLowerCase().includes(searchTerm3.toLowerCase());
    return matchSearch;
  });
  const [isOpen1, setIsOpen1] = useState(false);
  const [ModalAnimation1, setModalAnimation1] = useState(false);
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
                            <rect width={44} height={44} rx={22} fill="#FAF5F5" />
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
                                <stop offset={1} stopColor="white" stopOpacity={0} />
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
                          Are you sure you want to delete this? Once deleted, this action can not be undone.
                        </span>
                      </div>
                      <form>

                        <div className="bg-white  gap-2 py-3 sm:flex sm:flex-row-reverse border-t border-[#E5E7EB] mt-5">
                          <button
                            type="button"
                            className="bg-[#EF2D2D] border border-[#EF2D2D] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"
                            onClick={() => {
                              setIsOpen1(false);
                              setModalAnimation1(false);
                            }}
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                            onClick={() => {
                              setTimeout(() => {
                                setIsOpen1(false);
                              }, 500);
                              setModalAnimation1(false);
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
          <div className="">
            {/* Left Panel */}
            <div className="xl:col-span-2 space-y-0">
              <div className="flex md:space-x-4 space-x-0 md:flex-row flex-row md:ml-4 ml-0 overflow-x-auto">
                {tabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTab(idx)}
                    className={`clip-path-custom-shape py-3 px-6 text-sm font-medium border-b-2 mb-0 md:-mb-px focus:outline-none  ${selectedTab === idx
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
                    <div className="banner-image">
                      <div className="">
                        <ClinicCard />
                      </div>
                    </div>
                    <div className="bg-[#F9FAFB] p-4 mt-3 rounded-lg">
                      <div className="md:col-span-2">
                        <div className="text-center text-sm text-gray-700 flex flex-col gap-4 md:flex-row">
                          {[
                            { value: 20, label: "Total Doctors" },
                            { value: 20, label: "Total Inventory" },
                            { value: 20, label: "Total Patients" },
                            { value: 20, label: "Total Treatments" },
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
                      <div className="bg-[#F9FAFB] rounded-xl p-6 grid md:grid-cols-3 grid-cols-1 gap-4 text-sm text-gray-600 mt-8 md:ml-12 md:mr-12">
                        {[
                          {
                            icon: (
                              <svg
                                width="40"
                                height="41"
                                viewBox="0 0 40 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  y="0.0878906"
                                  width="40"
                                  height="40"
                                  rx="8"
                                  fill="white"
                                />
                                <path
                                  d="M15.2859 20.0879L14.1074 21.2664C12.8057 22.5681 12.8057 24.6787 14.1074 25.9804C15.4092 27.2822 17.5197 27.2822 18.8215 25.9804L20 24.8019M20 15.3738L21.1785 14.1953C22.4802 12.8936 24.5908 12.8936 25.8925 14.1953C27.1943 15.4971 27.1943 17.6076 25.8925 18.9093L24.714 20.0879M17.6431 22.445L22.3572 17.731"
                                  stroke="#144A6C"
                                  strokeLinecap="round"
                                />
                              </svg>
                            ),
                            label: "Website",
                            value: "Dental.com",
                          },
                          {
                            icon: (
                              <svg
                                width="41"
                                height="41"
                                viewBox="0 0 41 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.333252"
                                  y="0.0878906"
                                  width="40"
                                  height="40"
                                  rx="8"
                                  fill="white"
                                />
                                <path
                                  d="M12.8333 14.2545L19.3101 19.292C19.912 19.7601 20.7547 19.7601 21.3566 19.292L27.8333 14.2545M14.6667 26.7545H26C26.9334 26.7545 27.4001 26.7545 27.7567 26.5728C28.0703 26.413 28.3252 26.1581 28.485 25.8445C28.6667 25.4879 28.6667 25.0212 28.6667 24.0878V16.0878C28.6667 15.1544 28.6667 14.6877 28.485 14.3312C28.3252 14.0176 28.0703 13.7626 27.7567 13.6028C27.4001 13.4211 26.9334 13.4211 26 13.4211H14.6667C13.7332 13.4211 13.2665 13.4211 12.91 13.6028C12.5964 13.7626 12.3414 14.0176 12.1817 14.3312C12 14.6877 12 15.1544 12 16.0878V24.0878C12 25.0212 12 25.4879 12.1817 25.8445C12.3414 26.1581 12.5964 26.413 12.91 26.5728C13.2665 26.7545 13.7332 26.7545 14.6667 26.7545Z"
                                  stroke="#144A6C"
                                />
                              </svg>
                            ),
                            label: "Email Address",
                            value: "Clearsmile@dental.com",
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
                            value: "231-2324-2324",
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
                            value: "123 Highland Drive, Anytown USA",
                          },
                          {
                            icon: (
                              <svg
                                width="41"
                                height="41"
                                viewBox="0 0 41 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.333252"
                                  y="0.0878906"
                                  width="40"
                                  height="40"
                                  rx="8"
                                  fill="white"
                                />
                                <path
                                  d="M22 16.7545H25.3333M22 20.0878H25.3333M22 23.4211H25.3333M14.6667 26.7545H26C26.9334 26.7545 27.4001 26.7545 27.7567 26.5728C28.0703 26.413 28.3252 26.1581 28.485 25.8445C28.6667 25.4879 28.6667 25.0212 28.6667 24.0878V16.0878C28.6667 15.1544 28.6667 14.6877 28.485 14.3312C28.3252 14.0176 28.0703 13.7626 27.7567 13.6028C27.4001 13.4211 26.9334 13.4211 26 13.4211H14.6667C13.7332 13.4211 13.2665 13.4211 12.91 13.6028C12.5964 13.7626 12.3414 14.0176 12.1817 14.3312C12 14.6877 12 15.1544 12 16.0878V24.0878C12 25.0212 12 25.4879 12.1817 25.8445C12.3414 26.1581 12.5964 26.413 12.91 26.5728C13.2665 26.7545 13.7332 26.7545 14.6667 26.7545ZM15.75 20.0878H18.25C18.4801 20.0878 18.6667 19.9013 18.6667 19.6711V17.1711C18.6667 16.941 18.4801 16.7545 18.25 16.7545H15.75C15.5199 16.7545 15.3333 16.941 15.3333 17.1711V19.6711C15.3333 19.9013 15.5199 20.0878 15.75 20.0878Z"
                                  stroke="#144A6C"
                                  strokeLinecap="round"
                                />
                              </svg>
                            ),
                            label: "License Number",
                            value: "34-34323-se43",
                          },
                          {
                            icon: (
                              <svg
                                width="41"
                                height="41"
                                viewBox="0 0 41 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.666504"
                                  y="0.0878906"
                                  width="40"
                                  height="40"
                                  rx="8"
                                  fill="white"
                                />
                                <path
                                  d="M13.1665 18.4213H28.1665M17.3332 15.088V11.7546M23.9998 15.088V11.7546M18.4998 28.4213H22.8332C24.7 28.4213 25.6334 28.4213 26.3465 28.058C26.9737 27.7384 27.4836 27.2285 27.8032 26.6013C28.1665 25.8882 28.1665 24.9548 28.1665 23.088V18.7546C28.1665 16.8878 28.1665 15.9544 27.8032 15.2413C27.4836 14.6141 26.9737 14.1042 26.3465 13.7846C25.6334 13.4213 24.7 13.4213 22.8332 13.4213H18.4998C16.633 13.4213 15.6996 13.4213 14.9865 13.7846C14.3593 14.1042 13.8494 14.6141 13.5298 15.2413C13.1665 15.9544 13.1665 16.8878 13.1665 18.7546V23.088C13.1665 24.9548 13.1665 25.8882 13.5298 26.6013C13.8494 27.2285 14.3593 27.7384 14.9865 28.058C15.6996 28.4213 16.633 28.4213 18.4998 28.4213Z"
                                  stroke="#144A6C"
                                  strokeLinecap="round"
                                />
                              </svg>
                            ),
                            label: "License Expiry Date",
                            value: "E23-10-2025",
                          },
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
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search"
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
                            Spatiality
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
                              width="24"
                              height="25"
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
                                <p className="text-[#144A6C] text-2xl mt-4">No Record Found!</p>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          filteredDoctors.map((doctor) => (
                            <tr key={doctor.id} className="hover:bg-gray-50">
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/doctorprofile")}>
                                {doctor.id}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/doctorprofile")}>
                                {doctor.fullName}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/doctorprofile")}>
                                {doctor.visitReason}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/doctorprofile")}>
                                {doctor.lastVisit}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/doctorprofile")}>
                                {doctor.nextVisit}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/doctorprofile")}>
                                {doctor.treatmentRequired}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/doctorprofile")}>
                                {doctor.Appointment}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/doctorprofile")}>
                                {doctor.Patient}
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
                                  <button
                                    className="text-red-600 hover:text-red-800"
                                    onClick={() => {
                                      setIsOpen1(true);
                                      setTimeout(() => setModalAnimation1(true), 10);
                                    }}
                                  >
                                    {/* Your SVG icon remains unchanged */}
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
                      onChange={(e) => setSearchTerm1(e.target.value)}
                      placeholder="Search"
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
                            Sex
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Phone Number
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Birth Date
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Address
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Age
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Registration
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
                                <p className="text-[#144A6C] text-2xl mt-4">No Record Found!</p>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          filteredDoctores.map((doctor) => (
                            <tr
                              key={doctor.Treatment}
                              className="hover:bg-gray-50"
                            >
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/patientdetail")}>
                                {doctor.Treatment}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/patientdetail")}>
                                {doctor.visitReason}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/patientdetail")}>
                                {doctor.lastVisit}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/patientdetail")}>
                                {doctor.Amount}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/patientdetail")}>
                                {doctor.Birth}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/patientdetail")}>
                                {doctor.Addresses}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/patientdetail")}>
                                {doctor.Age}
                              </td>
                              <td className="cursor-pointer px-6 py-4 whitespace-nowrap text-sm text-[#475467]"
                                onClick={() => router.push("/patientdetail")}>
                                {doctor.Registration}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {selectedTab === 3 && (
                <div className="bg-white rounded-xl shadow p-6">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      onChange={(e) => setSearchTerm2(e.target.value)}
                      placeholder="Search"
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
                            Material
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Pack
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Unit
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Base Stock
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Current Stock
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            VAT cost
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Cost with VAT
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Minimum Stock
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Wanted Qty
                          </th>
                        </tr>
                      </thead>

                      <tbody className="bg-white divide-y divide-[#EAECF0]">
                        {Inventory.length === 0 ? (
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
                                <p className="text-[#144A6C] text-2xl mt-4">No Record Found!</p>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          Inventory.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {item.id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {item.material}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {item.pack}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {item.unit}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {item.baseStock}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {item.currentStock}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {item.vatCost}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {item.costWithVat}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {item.minimumStock}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">
                                {item.wantedQty}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {selectedTab === 4 && (
                <div className="bg-white rounded-xl shadow p-6">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                    <input
                      style={{ width: "100%" }}
                      type="text"
                      onChange={(e) => setSearchTerm3(e.target.value)}
                      placeholder="Search"
                      className="text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:[#E6E4F0] w-full sm:w-64 bg-white text-sm border border-[#E6E4F0] focus:border-[#E6E4F0]"
                    />
                  </div>
                  <div className="w-full overflow-x-auto mt-3">
                    <table className="min-w-full">
                      <thead className="bg-gray-50">
                        <tr className="pt-4 pr-8 pb-3 pl-8 rounded-bl-lg">
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Invoice Number
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Package
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Amount
                          </th>

                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">
                            <svg
                              width="24"
                              height="25"
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
                        {Billing.length === 0 ? (
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
                                <p className="text-[#144A6C] text-2xl mt-4">No Record Found!</p>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          Billing.map((doctor) => (
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
                                   ${doctor.Status === "Paid"
                                      ? "bg-[#F8FFF8] text-[#177606] border border-[#B7EFAB] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                      : ""
                                    }
                                   ${doctor.Status === "Unpaid"
                                      ? "bg-[#FFF8F8] text-[#CE2D2D] border border-[#E43F33] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                      : ""
                                    }
                                 `}
                                >
                                  {doctor.Status}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center space-x-2">
                                  <button className="text-blue-600 hover:text-blue-800">
                                    <svg
                                      width={24}
                                      height={25}
                                      viewBox="0 0 24 25"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.75 3.08789C12.75 2.67368 12.4142 2.33789 12 2.33789C11.5858 2.33789 11.25 2.67368 11.25 3.08789L12.75 3.08789ZM11.25 14.0879C11.25 14.5021 11.5858 14.8379 12 14.8379C12.4142 14.8379 12.75 14.5021 12.75 14.0879H11.25ZM16.5303 12.6182C16.8232 12.3253 16.8232 11.8505 16.5303 11.5576C16.2374 11.2647 15.7626 11.2647 15.4697 11.5576L16.5303 12.6182ZM12.7071 15.3808L12.1768 14.8505L12.7071 15.3808ZM11.2929 15.3808L11.8232 14.8505H11.8232L11.2929 15.3808ZM8.53033 11.5576C8.23744 11.2647 7.76256 11.2647 7.46967 11.5576C7.17678 11.8505 7.17678 12.3253 7.46967 12.6182L8.53033 11.5576ZM3.75 16.0879C3.75 15.6737 3.41421 15.3379 3 15.3379C2.58579 15.3379 2.25 15.6737 2.25 16.0879H3.75ZM21.75 16.0879C21.75 15.6737 21.4142 15.3379 21 15.3379C20.5858 15.3379 20.25 15.6737 20.25 16.0879H21.75ZM19.362 20.7609L19.0215 20.0927L19.362 20.7609ZM20.673 19.4499L21.3413 19.7904V19.7904L20.673 19.4499ZM3.32698 19.4499L2.65873 19.7904L3.32698 19.4499ZM4.63803 20.7609L4.29754 21.4292H4.29754L4.63803 20.7609ZM12 3.08789L11.25 3.08789L11.25 14.0879H12H12.75L12.75 3.08789L12 3.08789ZM16 12.0879L15.4697 11.5576L12.1768 14.8505L12.7071 15.3808L13.2374 15.9111L16.5303 12.6182L16 12.0879ZM11.2929 15.3808L11.8232 14.8505L8.53033 11.5576L8 12.0879L7.46967 12.6182L10.7626 15.9111L11.2929 15.3808ZM12.7071 15.3808L12.1768 14.8505C12.0791 14.9481 11.9209 14.9481 11.8232 14.8505L11.2929 15.3808L10.7626 15.9111C11.446 16.5945 12.554 16.5945 13.2374 15.9111L12.7071 15.3808ZM3 16.0879H2.25V16.2879H3H3.75V16.0879H3ZM7.8 21.0879V21.8379H16.2V21.0879V20.3379H7.8V21.0879ZM21 16.2879H21.75V16.0879H21H20.25V16.2879H21ZM16.2 21.0879V21.8379C17.0277 21.8379 17.6936 21.8385 18.2315 21.7945C18.7781 21.7499 19.2582 21.6555 19.7025 21.4292L19.362 20.7609L19.0215 20.0927C18.824 20.1933 18.5632 20.2624 18.1093 20.2995C17.6467 20.3373 17.0525 20.3379 16.2 20.3379V21.0879ZM21 16.2879H20.25C20.25 17.1403 20.2494 17.7346 20.2116 18.1972C20.1745 18.6511 20.1054 18.9119 20.0048 19.1094L20.673 19.4499L21.3413 19.7904C21.5676 19.3461 21.662 18.866 21.7066 18.3194C21.7506 17.7815 21.75 17.1156 21.75 16.2879H21ZM19.362 20.7609L19.7025 21.4292C20.4081 21.0696 20.9817 20.496 21.3413 19.7904L20.673 19.4499L20.0048 19.1094C19.789 19.5327 19.4448 19.8769 19.0215 20.0927L19.362 20.7609ZM3 16.2879H2.25C2.25 17.1156 2.24942 17.7815 2.29336 18.3194C2.33803 18.866 2.43238 19.3461 2.65873 19.7904L3.32698 19.4499L3.99524 19.1094C3.8946 18.9119 3.82546 18.6511 3.78838 18.1972C3.75058 17.7346 3.75 17.1403 3.75 16.2879H3ZM7.8 21.0879V20.3379C6.94755 20.3379 6.35331 20.3373 5.89068 20.2995C5.4368 20.2624 5.17604 20.1933 4.97852 20.0927L4.63803 20.7609L4.29754 21.4292C4.74175 21.6555 5.22189 21.7499 5.76853 21.7945C6.30641 21.8385 6.9723 21.8379 7.8 21.8379V21.0879ZM3.32698 19.4499L2.65873 19.7904C3.01825 20.496 3.59193 21.0696 4.29754 21.4292L4.63803 20.7609L4.97852 20.0927C4.55516 19.8769 4.21095 19.5327 3.99524 19.1094L3.32698 19.4499Z"
                                        fill="#144A6C"
                                      />
                                    </svg>

                                  </button>
                                  <button
                                    className="text-red-600 hover:text-red-800"
                                    onClick={() => {
                                      setIsOpen1(true);
                                      setTimeout(() => setModalAnimation1(true), 10);
                                    }}
                                  >
                                    {/* Your SVG icon remains unchanged */}
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
          </div>
        </div>
      </div>
    </>

  );
}
