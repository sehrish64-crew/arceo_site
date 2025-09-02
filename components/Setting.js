"use client"
import { Search, Plus } from "lucide-react"
import { Listbox } from "@headlessui/react"
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/20/solid"
import dynamic from "next/dynamic"
import ProfileForm from "./Profileform"
import ChangePasswordForm from "./ChangePasswordForm"
import SessionForm from "./SessionsForm"
import IsrTaxes from "./Isrtaxes"
import MaterialCostForm from "./MaterialCostForm"
import Singledatepicker from "./Singledatepicker"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function Setting() {
  const userList = [
    { id: 1, fullName: "John Doe" },
    { id: 2, fullName: "Alexa jordan" },
    { id: 3, fullName: "Lucci" }
  ]

  const costTypes = [
    { id: 1, label: "Cash" },
    { id: 2, label: "Credit Card" },
    { id: 3, label: "Insurance" }
  ]
  const materialList = [
    { id: 1, name: "Gloves" },
    { id: 2, name: "Syringes" },
    { id: 3, name: "Bandages" },
    { id: 4, name: "Face Masks" }
  ]
  const treatments = [
    { id: 1, name: "package 1" },
    { id: 2, name: "package 2" },
    { id: 3, name: "package 3" }
  ]
  const expensesTable = [
    {
      id: 1,
      title: "738",
      category: "Alice Johnson",
      date: "General",
      amount: "(619) 555-0123",
      dates: "johndoe@example.com",
      paid: "123 Elm St, San Diego, CA 92101"
    },
    {
      id: 2,
      title: "738",
      category: "Alice Johnson",
      date: "General",
      amount: "(619) 555-0123",
      dates: "johndoe@example.com",
      paid: "123 Elm St, San Diego, CA 92101"
    },
    {
      id: 3,
      title: "738",
      category: "Alice Johnson",
      date: "General",
      amount: "(619) 555-0123",
      dates: "johndoe@example.com",
      paid: "123 Elm St, San Diego, CA 92101"
    }
  ]

  const frequencyOptions = [
    { id: 1, name: "Daily" },
    { id: 2, name: "Weekly" },
    { id: 3, name: "Monthly" },
    { id: 4, name: "Yearly" }
  ]
  const languageOptions = [
    { id: 1, name: "English" },
    { id: 2, name: "Urdu" },
    { id: 3, name: "Spanish" },
    { id: 4, name: "French" }
  ]

  const [selectedFrequency, setSelectedFrequency] = useState(
    frequencyOptions[0]
  )
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0])

  const [selectedMaterial, setSelectedMaterial] = useState(null)
  const [selectedCostType, setSelectedCostType] = useState(costTypes[0])
  const [searchTerm, setSearchTerm] = useState("")

  const [isOpen, setIsOpen] = useState(false)
  const [ModalAnimation, setModalAnimation] = useState(false)
  const {
    watch,
    formState: { errors }
  } = useForm()
  const [selectedTab, setSelectedTab] = useState(0)
  const tabs = [
    "General",
    "Security",
    "Sessions",
    "External Doctors",
    "ISR Taxes",
    "Unit & Cost Type"
  ]
  const [selectedUser, setSelectedUser] = useState(userList[0])
  const [isRestockModalOpen, setIsRestockModalOpen] = useState(false)
  const [restockModalAnim, setRestockModalAnim] = useState(false)
  const [activebtn, setactivebtn] = useState("list")
  const [ShowClinicModal, setShowClinicModal] = useState(false)
  const [ClinicModalAnimation, setClinicModalAnimation] = useState(false)
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0])
  const [showExpenseModal, setShowExpenseModal] = useState(false)
  const [expenseModalAnimation, setExpenseModalAnimation] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [ModalAnimation1, setModalAnimation1] = useState(false)
  const expenses = expensesTable.filter(
    expense =>
      expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
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
                      <div className="flex gap-1 border-b border-[#E5E7EB] pb-4 w-100">
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
                              stroke="url(#paint0_linear_313_4903)"
                              strokeOpacity="0.3"
                            />
                            <path
                              d="M16.32 29.1367L16.6605 28.4684H16.6605L16.32 29.1367ZM14.8633 27.68L14.1951 28.0205H14.1951L14.8633 27.68ZM27.68 14.8633L28.0205 14.1951V14.1951L27.68 14.8633ZM29.1367 16.32L28.4684 16.6605V16.6605L29.1367 16.32ZM16.32 14.8633L16.6605 15.5316H16.6605L16.32 14.8633ZM14.8633 16.32L15.5316 16.6605V16.6605L14.8633 16.32ZM28.75 21.1667C28.75 21.5809 29.0858 21.9167 29.5 21.9167C29.9142 21.9167 30.25 21.5809 30.25 21.1667H29.5H28.75ZM21.1667 30.25C21.5809 30.25 21.9167 29.9142 21.9167 29.5C21.9167 29.0858 21.5809 28.75 21.1667 28.75V29.5V30.25ZM18.6667 17.9167C18.2525 17.9167 17.9167 18.2525 17.9167 18.6667C17.9167 19.0809 18.2525 19.4167 18.6667 19.4167V18.6667V17.9167ZM25.3333 19.4167C25.7475 19.4167 26.0833 19.0809 26.0833 18.6667C26.0833 18.2525 25.7475 17.9167 25.3333 17.9167V18.6667V19.4167ZM18.6667 21.25C18.2525 21.25 17.9167 21.5858 17.9167 22C17.9167 22.4142 18.2525 22.75 18.6667 22.75V22V21.25ZM25.3333 22.75C25.7475 22.75 26.0833 22.4142 26.0833 22C26.0833 21.5858 25.7475 21.25 25.3333 21.25V22V22.75ZM18.6667 24.5833C18.2525 24.5833 17.9167 24.9191 17.9167 25.3333C17.9167 25.7475 18.2525 26.0833 18.6667 26.0833V25.3333V24.5833ZM22 26.0833C22.4142 26.0833 22.75 25.7475 22.75 25.3333C22.75 24.9191 22.4142 24.5833 22 24.5833V25.3333V26.0833ZM23.8777 29.9138L24.5892 30.151V30.151L23.8777 29.9138ZM24.2633 28.7568L23.5518 28.5197V28.5197L24.2633 28.7568ZM24.6613 28.113L25.1916 28.6433L25.1916 28.6433L24.6613 28.113ZM28.5045 24.2698L27.9742 23.7394L27.9742 23.7394L28.5045 24.2698ZM30.5636 26.3288L31.0939 26.8592V26.8592L30.5636 26.3288ZM26.7204 30.172L26.19 29.6417V29.6417L26.7204 30.172ZM26.0765 30.57L26.3137 31.2815H26.3137L26.0765 30.57ZM24.9195 30.9556L25.1567 31.6672H25.1567L24.9195 30.9556ZM26.5093 30.3691L26.961 30.9678V30.9678L26.5093 30.3691ZM26.3471 30.4693L26.0136 29.7975L26.3471 30.4693ZM30.5636 24.2698L30.0332 24.8001L30.5636 24.2698ZM31.0596 24.8422L31.7316 24.5092V24.5092L31.0596 24.8422ZM31.0596 25.7564L31.7316 26.0894V26.0894L31.0596 25.7564ZM29.0769 23.7737L29.4099 24.4457H29.4099L29.0769 23.7737ZM29.9912 23.7737L29.6582 24.4457H29.6582L29.9912 23.7737ZM24.364 28.4862L25.0358 28.8198H25.0358L24.364 28.4862ZM24.4643 28.324L23.8655 27.8724L23.8655 27.8724L24.4643 28.324ZM23.6858 30.8355L24.3923 30.5836V30.5836L23.6858 30.8355ZM23.9978 31.1475L23.7459 31.8539L23.9978 31.1475ZM19.8333 14.5V15.25H24.1667V14.5V13.75H19.8333V14.5ZM14.5 24.1667H15.25V19.8333H14.5H13.75V24.1667H14.5ZM19.8333 29.5V28.75C18.8875 28.75 18.2233 28.7494 17.7051 28.7071C17.1956 28.6655 16.8937 28.5872 16.6605 28.4684L16.32 29.1367L15.9795 29.8049C16.4594 30.0494 16.9807 30.1529 17.5829 30.2021C18.1764 30.2506 18.9123 30.25 19.8333 30.25V29.5ZM14.5 24.1667H13.75C13.75 25.0877 13.7494 25.8236 13.7979 26.4171C13.8471 27.0193 13.9506 27.5406 14.1951 28.0205L14.8633 27.68L15.5316 27.3395C15.4128 27.1063 15.3345 26.8044 15.2929 26.2949C15.2506 25.7767 15.25 25.1125 15.25 24.1667H14.5ZM16.32 29.1367L16.6605 28.4684C16.1744 28.2208 15.7792 27.8256 15.5316 27.3395L14.8633 27.68L14.1951 28.0205C14.5865 28.7888 15.2112 29.4135 15.9795 29.8049L16.32 29.1367ZM24.1667 14.5V15.25C25.1125 15.25 25.7767 15.2506 26.2949 15.2929C26.8044 15.3345 27.1063 15.4128 27.3395 15.5316L27.68 14.8633L28.0205 14.1951C27.5406 13.9506 27.0193 13.8471 26.4171 13.7979C25.8236 13.7494 25.0877 13.75 24.1667 13.75V14.5ZM29.5 19.8333H30.25C30.25 18.9123 30.2506 18.1764 30.2021 17.5829C30.1529 16.9807 30.0494 16.4594 29.8049 15.9795L29.1367 16.32L28.4684 16.6605C28.5872 16.8937 28.6655 17.1956 28.7071 17.7051C28.7494 18.2233 28.75 18.8875 28.75 19.8333H29.5ZM27.68 14.8633L27.3395 15.5316C27.8256 15.7792 28.2208 16.1744 28.4684 16.6605L29.1367 16.32L29.8049 15.9795C29.4135 15.2112 28.7888 14.5865 28.0205 14.1951L27.68 14.8633ZM19.8333 14.5V13.75C18.9123 13.75 18.1764 13.7494 17.5829 13.7979C16.9807 13.8471 16.4594 13.9506 15.9795 14.1951L16.32 14.8633L16.6605 15.5316C16.8937 15.4128 17.1956 15.3345 17.7051 15.2929C18.2233 15.2506 18.8875 15.25 19.8333 15.25V14.5ZM14.5 19.8333H15.25C15.25 18.8875 15.2506 18.2233 15.2929 17.7051C15.3345 17.1956 15.4128 16.8937 15.5316 16.6605L14.8633 16.32L14.1951 15.9795C13.9506 16.4594 13.8471 16.9807 13.7979 17.5829C13.7494 18.1764 13.75 18.9123 13.75 19.8333H14.5ZM16.32 14.8633L15.9795 14.1951C15.2112 14.5865 14.5865 15.2112 14.1951 15.9795L14.8633 16.32L15.5316 16.6605C15.7792 16.1744 16.1744 15.7792 16.6605 15.5316L16.32 14.8633ZM29.5 19.8333H28.75V21.1667H29.5H30.25V19.8333H29.5ZM19.8333 29.5V30.25H21.1667V29.5V28.75H19.8333V29.5ZM18.6667 18.6667V19.4167H25.3333V18.6667V17.9167H18.6667V18.6667ZM18.6667 22V22.75H25.3333V22V21.25H18.6667V22ZM18.6667 25.3333V26.0833H22V25.3333V24.5833H18.6667V25.3333ZM23.8777 29.9138L24.5892 30.151L24.9749 28.994L24.2633 28.7568L23.5518 28.5197L23.1662 29.6767L23.8777 29.9138ZM24.6613 28.113L25.1916 28.6433L29.0348 24.8001L28.5045 24.2698L27.9742 23.7394L24.131 27.5826L24.6613 28.113ZM30.5636 26.3288L30.0332 25.7985L26.19 29.6417L26.7204 30.172L27.2507 30.7024L31.0939 26.8592L30.5636 26.3288ZM26.0765 30.57L25.8393 29.8585L24.6823 30.2441L24.9195 30.9556L25.1567 31.6672L26.3137 31.2815L26.0765 30.57ZM26.7204 30.172L26.19 29.6417C26.0733 29.7584 26.0636 29.7658 26.0576 29.7703L26.5093 30.3691L26.961 30.9678C27.0695 30.8859 27.1623 30.7908 27.2507 30.7024L26.7204 30.172ZM26.0765 30.57L26.3137 31.2815C26.4323 31.242 26.5589 31.2015 26.6806 31.1411L26.3471 30.4693L26.0136 29.7975C26.0068 29.8009 25.9959 29.8063 25.8393 29.8585L26.0765 30.57ZM26.5093 30.3691L26.0576 29.7703C26.0438 29.7807 26.0291 29.7899 26.0136 29.7975L26.3471 30.4693L26.6806 31.1411C26.7792 31.0921 26.8731 31.0341 26.961 30.9678L26.5093 30.3691ZM30.5636 24.2698L30.0332 24.8001C30.1796 24.9464 30.2671 25.0344 30.3293 25.104C30.3879 25.1696 30.3925 25.1852 30.3876 25.1752L31.0596 24.8422L31.7316 24.5092C31.5882 24.2197 31.3318 23.9773 31.0939 23.7394L30.5636 24.2698ZM30.5636 26.3288L31.0939 26.8592C31.3318 26.6213 31.5882 26.3789 31.7316 26.0894L31.0596 25.7564L30.3876 25.4234C30.3925 25.4134 30.3879 25.429 30.3293 25.4946C30.2671 25.5642 30.1796 25.6522 30.0332 25.7985L30.5636 26.3288ZM31.0596 24.8422L30.3876 25.1752C30.4264 25.2534 30.4264 25.3452 30.3876 25.4234L31.0596 25.7564L31.7316 26.0894C31.9783 25.5916 31.9783 25.007 31.7316 24.5092L31.0596 24.8422ZM28.5045 24.2698L29.0348 24.8001C29.1811 24.6538 29.2691 24.5662 29.3387 24.5041C29.4043 24.4454 29.4199 24.4408 29.4099 24.4457L29.0769 23.7737L28.7439 23.1017C28.4544 23.2452 28.212 23.5016 27.9742 23.7394L28.5045 24.2698ZM30.5636 24.2698L31.0939 23.7394C30.856 23.5016 30.6137 23.2452 30.3242 23.1017L29.9912 23.7737L29.6582 24.4457C29.6482 24.4408 29.6637 24.4454 29.7294 24.5041C29.799 24.5662 29.8869 24.6538 30.0332 24.8001L30.5636 24.2698ZM29.0769 23.7737L29.4099 24.4457C29.4881 24.407 29.5799 24.407 29.6582 24.4457L29.9912 23.7737L30.3242 23.1017C29.8263 22.855 29.2418 22.855 28.7439 23.1017L29.0769 23.7737ZM24.2633 28.7568L24.9749 28.994C25.027 28.8374 25.0324 28.8265 25.0358 28.8198L24.364 28.4862L23.6923 28.1527C23.6318 28.2744 23.5914 28.4011 23.5518 28.5197L24.2633 28.7568ZM24.6613 28.113L24.131 27.5826C24.0426 27.671 23.9474 27.7639 23.8655 27.8724L24.4643 28.324L25.063 28.7757C25.0675 28.7697 25.0749 28.76 25.1916 28.6433L24.6613 28.113ZM24.364 28.4862L25.0358 28.8198C25.0435 28.8043 25.0526 28.7895 25.063 28.7757L24.4643 28.324L23.8655 27.8724C23.7992 27.9602 23.7412 28.0541 23.6923 28.1527L24.364 28.4862ZM23.8777 29.9138L23.1662 29.6767C23.0871 29.914 23.0106 30.1411 22.9664 30.329C22.9249 30.5058 22.8735 30.7905 22.9794 31.0874L23.6858 30.8355L24.3923 30.5836C24.417 30.6529 24.4171 30.7053 24.4165 30.7202C24.4161 30.7316 24.4153 30.7203 24.4266 30.6721C24.4514 30.5668 24.5006 30.4167 24.5892 30.151L23.8777 29.9138ZM24.9195 30.9556L24.6823 30.2441C24.4167 30.3327 24.2666 30.3819 24.1612 30.4067C24.113 30.418 24.1017 30.4172 24.1131 30.4168C24.1281 30.4162 24.1804 30.4164 24.2497 30.4411L23.9978 31.1475L23.7459 31.8539C24.0429 31.9598 24.3275 31.9085 24.5043 31.8669C24.6922 31.8228 24.9194 31.7463 25.1567 31.6672L24.9195 30.9556ZM23.6858 30.8355L22.9794 31.0874C23.1069 31.445 23.3883 31.7264 23.7459 31.8539L23.9978 31.1475L24.2497 30.4411C24.3162 30.4648 24.3685 30.5171 24.3923 30.5836L23.6858 30.8355Z"
                              fill="#144A6C"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_313_4903"
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
                            Update Payment
                          </h3>
                          <span className="text-[#A1A5AA] font-regular">
                            Provide details to Update Payment
                          </span>
                        </div>
                        <hr />
                      </div>
                      <div className="flex justify-between mt-3">
                        <span className="text-[#475467]">Invoice #</span>
                        <h3>784D77DA</h3>
                      </div>
                      <form className="w-full max-w-4xl mx-auto mt-5">
                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                          <div className="w-full px-3 mb-6 md:mb-0 text-start">
                            <label
                              className="text-[#757575]"
                              htmlFor="grid-address"
                            >
                              Check Number
                            </label>
                            <input
                              className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                              id="grid-address"
                              type="text"
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                          <div className="w-full px-3 mb-6 md:mb-0 text-start">
                            <label
                              className="text-[#757575]"
                              htmlFor="grid-address"
                            >
                              Date
                            </label>
                            <input
                              className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                              id="grid-address"
                              type="date"
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                          <div className="w-full px-3 mb-6 md:mb-0 text-start">
                            <label
                              className="text-[#757575]"
                              htmlFor="grid-address"
                            >
                              Amount
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
                  <div className="bg-white  gap-2 py-3 sm:flex sm:flex-row-reverse border-t border-[#E5E7EB]  mt-5">
                    <button
                      type="button"
                      className="bg-[#144A6C] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"
                      onClick={() => {
                        setIsOpen(false)
                        setModalAnimation(false)
                      }}
                    >
                      Create
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
      <div className="flex flex-col h-full lg:rounded-r-lg">
        {/* Header - Same background as sidebar */}
        <div className="pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-shrink-0 lg:rounded-tr-lg">
          <h1 className="text-3xl font-regular text-[#144A6C]">Setting</h1>
          <button className="bg-[#fff] text-[#144A6C] py-1 px-5 border border-[#144A6C] rounded-lg hover:bg-[#144A6C] hover:text-[#fff]">
            Update
          </button>
        </div>
        <div className="xl:col-span-2 space-y-0">
          <div className="flex md:space-x-4 space-x-0 md:flex-row flex-row md:ml-4 ml-0 overflow-x-auto">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTab(idx)}
                className={`clip-path-custom-shape py-3 px-6 text-sm font-medium border-b-2 mb-0 md:-mb-px focus:outline-none whitespace-nowrap  ${
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
              <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
                <div className="card h-[calc(100vh-235px)] flex flex-col">
                  <div className="card-body flex-1 flex flex-col overflow-auto">
                    <div className="content-inneres">
                      <ProfileForm />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {selectedTab === 1 && (
            <>
              {/* Table - White background, scrollable */}
              <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
                {/* Desktop Table */}
                <div className="">
                  <div className="card h-[calc(100vh-235px)] flex flex-col">
                    <div className="card-body flex-1 flex flex-col overflow-auto">
                      <ChangePasswordForm />;
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedTab === 2 && (
            <>
              {/* Table - White background, scrollable */}
              <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
                {/* Desktop Table */}
                <div className="">
                  <div className="card h-[calc(100vh-235px)] flex flex-col">
                    <div className="card-body flex-1 flex flex-col overflow-hidden">
                      <SessionForm />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedTab === 3 && (
            <>
              {/* Table - White background, scrollable */}
              <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
                {/* Desktop Table */}
                <div className="">
                  <div className="card h-[calc(100vh-235px)] flex flex-col">
                    <div className="card-body flex-1 flex flex-col overflow-hidden">
                      <div className="flex gap-2">
                        <div className="relative" style={{ width: "100%" }}>
                          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280]" />
                          <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-100 text-[#6B7280] pl-10 pr-6 py-2 h-10 rounded-md focus:outline-none focus:[#E6E4F0] sm:w-64 bg-white text-sm border border-[#E6E4F0] focus:border-[#E6E4F0]"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div className="add_btn">
                          <button
                            onClick={() => {
                              setShowExpenseModal(true)
                              setTimeout(
                                () => setExpenseModalAnimation(true),
                                10
                              )
                            }}
                            className="bg-[#144A6C] pl-4 pr-6 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap"
                          >
                            <Plus className="w-6 h-6 text-white" />
                            <span className="text-base font-regular">
                              Create
                            </span>
                          </button>

                          {showExpenseModal && (
                            <div
                              role="dialog"
                              aria-modal="true"
                              aria-labelledby="dialog-title"
                              className="relative z-10"
                            >
                              <div className="fixed inset-0 bg-[#000]/60 backdrop-blur-md transition-opacity overflow-y-auto">
                                <div className="flex items-center justify-center min-h-screen px-4 py-8 text-center">
                                  <div
                                    className="fixed inset-0 transition-opacity"
                                    aria-hidden="true"
                                  >
                                    <div className="absolute inset-0"></div>
                                  </div>

                                  <div
                                    className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full max-w-4xl mx-auto 
        ${expenseModalAnimation ? "scale-100 skew-y-0" : "scale-0 skew-y-6"}
        duration-500 ease-out`}
                                  >
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-8 sm:pb-6">
                                      <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                                          {/* Header */}
                                          <div className="flex gap-1 border-b border-[#E5E7EB] pb-4 w-full">
                                            {/* Icon and Titles */}
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
                                                  stroke="url(#paint0_linear_435_2439)"
                                                  strokeOpacity="0.3"
                                                />
                                                <g clipPath="url(#clip0_435_2439)">
                                                  <path
                                                    d="M22.0003 24.0827C24.8768 24.0827 27.2087 21.7508 27.2087 18.8743C27.2087 15.9979 24.8768 13.666 22.0003 13.666C19.1238 13.666 16.792 15.9979 16.792 18.8743C16.792 21.7508 19.1238 24.0827 22.0003 24.0827ZM22.0003 24.0827C17.398 24.0827 13.667 26.8809 13.667 30.3327M22.0003 24.0827C26.6027 24.0827 30.3337 26.8809 30.3337 30.3327"
                                                    stroke="#144A6C"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                  />
                                                </g>
                                                <defs>
                                                  <linearGradient
                                                    id="paint0_linear_435_2439"
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
                                                  <clipPath id="clip0_435_2439">
                                                    <rect
                                                      width={20}
                                                      height={20}
                                                      fill="white"
                                                      transform="translate(12 12)"
                                                    />
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                            </div>
                                            <div className="flex flex-col">
                                              <h3 className="text-lg font-regular text-[#144A6C] text-start">
                                                Add New External Doctor
                                              </h3>
                                              <span className="text-[#A1A5AA] font-regular">
                                                Provide details to add a new
                                                external doctor
                                              </span>
                                            </div>
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
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="clinic-email"
                                                  >
                                                    Full Name
                                                  </label>
                                                  <input
                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                    id="clinic-email"
                                                    type="text"
                                                  />
                                                </div>

                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="clinic-phone"
                                                  >
                                                    Specialty
                                                  </label>
                                                  <Listbox
                                                    value={selectedFrequency}
                                                    onChange={
                                                      setSelectedFrequency
                                                    }
                                                  >
                                                    <div className="mt-2 relative">
                                                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                        <span className="block truncate">
                                                          {
                                                            selectedFrequency.name
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
                                                        {frequencyOptions.map(
                                                          frequency => (
                                                            <Listbox.Option
                                                              key={frequency.id}
                                                              value={frequency}
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
                                                                      frequency.name
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
                                                    htmlFor="clinic-email"
                                                  >
                                                    Email Address
                                                  </label>
                                                  <input
                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                    id="clinic-email"
                                                    type="text"
                                                  />
                                                </div>

                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="clinic-phone"
                                                  >
                                                    Phone Number
                                                  </label>
                                                  <input
                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                    id="clinic-email"
                                                    type="text"
                                                  />
                                                </div>
                                              </div>
                                              <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="clinic-email"
                                                  >
                                                    Per hour salary
                                                  </label>
                                                  <input
                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                    id="clinic-email"
                                                    type="text"
                                                  />
                                                </div>
                                              </div>
                                              <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="clinic-email"
                                                  >
                                                    License Number
                                                  </label>
                                                  <input
                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                    id="clinic-email"
                                                    type="text"
                                                  />
                                                </div>

                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="clinic-phone"
                                                  >
                                                    License Expiry
                                                  </label>
                                                  <div className="relative">
                                                    <Singledatepicker />
                                                    <div className="absolute top-5 right-3 text-gray-500 pointer-events-none">
                                                      <svg
                                                        width={16}
                                                        height={18}
                                                        viewBox="0 0 16 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                      >
                                                        <path
                                                          d="M1.25 7.5H14.75M5 4.5V1.5M11 4.5V1.5M6.05 16.5H9.95C11.6302 16.5 12.4702 16.5 13.112 16.173C13.6765 15.8854 14.1354 15.4265 14.423 14.862C14.75 14.2202 14.75 13.3802 14.75 11.7V7.8C14.75 6.11984 14.75 5.27976 14.423 4.63803C14.1354 4.07354 13.6765 3.6146 13.112 3.32698C12.4702 3 11.6302 3 9.95 3H6.05C4.36984 3 3.52976 3 2.88803 3.32698C2.32354 3.6146 1.8646 4.07354 1.57698 4.63803C1.25 5.27976 1.25 6.11984 1.25 7.8V11.7C1.25 13.3802 1.25 14.2202 1.57698 14.862C1.8646 15.4265 2.32354 15.8854 2.88803 16.173C3.52976 16.5 4.36984 16.5 6.05 16.5Z"
                                                          stroke="#A1A5AA"
                                                          strokeWidth="1.5"
                                                          strokeLinecap="round"
                                                        />
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="clinic-email"
                                                  >
                                                    Address
                                                  </label>
                                                  <input
                                                    className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
                                                    id="clinic-email"
                                                    type="text"
                                                  />
                                                </div>
                                              </div>
                                              <div className="flex flex-wrap -mx-3 mt-2 mb-4">
                                                <div className="w-full px-3 mb-6 md:mb-0 text-start">
                                                  <label
                                                    className="text-[#757575]"
                                                    htmlFor="clinic-email"
                                                  >
                                                    Languages
                                                  </label>
                                                  <Listbox
                                                    value={selectedLanguage}
                                                    onChange={
                                                      setSelectedLanguage
                                                    }
                                                  >
                                                    <div className="mt-2 relative">
                                                      {/* Button */}
                                                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-3 pl-3 pr-10 text-left shadow-sm border border-[#EBEBEB] focus:outline-none focus:ring-1 focus:ring-[#EBEBEB] focus:border-[#EBEBEB] sm:text-sm">
                                                        <span className="block truncate">
                                                          {
                                                            selectedLanguage.name
                                                          }
                                                        </span>
                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                          <ChevronDownIcon
                                                            className="h-5 w-5 text-[#144A6C]"
                                                            aria-hidden="true"
                                                          />
                                                        </span>
                                                      </Listbox.Button>

                                                      {/* Options */}
                                                      <Listbox.Options className="absolute z-10 mt-1 max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                        {languageOptions.map(
                                                          language => (
                                                            <Listbox.Option
                                                              key={language.id}
                                                              value={language}
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
                                                                      language.name
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
                                            </form>
                                          </div>
                                        </div>
                                      </div>

                                      {/* Buttons */}
                                      <div className="bg-white gap-2 py-3 sm:flex sm:flex-row-reverse border-t border-[#E5E7EB] mt-5">
                                        <button
                                          type="button"
                                          className="bg-[#144A6C] pl-4 pr-4 py-2 text-white flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center"
                                          onClick={() => {
                                            setShowExpenseModal(false)
                                            setExpenseModalAnimation(false)
                                          }}
                                        >
                                          Add Record
                                        </button>
                                        <button
                                          type="button"
                                          className="bg-[#fff] pl-4 pr-4 py-2 text-[#144A6C] flex items-center space-x-2 rounded-lg transition-colors whitespace-nowrap justify-center text-center border border-[#EBEBEB]"
                                          onClick={() => {
                                            setTimeout(() => {
                                              setShowExpenseModal(false)
                                            }, 500)
                                            setExpenseModalAnimation(false)
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
                      <div className="w-full overflow-x-auto mt-3">
                        <table className="min-w-full">
                          <thead className="bg-gray-50">
                            <tr>
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
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-[#EAECF0]">
                            {expenses.length === 0 ? (
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
                              expenses.map(expense => (
                                <tr
                                  key={expense.id}
                                  className="hover:bg-gray-50"
                                >
                                  <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                    {expense.title}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                    {expense.category}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                    {expense.date}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                    {expense.amount}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                    {expense.dates}
                                  </td>
                                  <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">
                                    {expense.paid}
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
                                          setIsOpen1(true)
                                          setTimeout(
                                            () => setModalAnimation1(true),
                                            10
                                          )
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
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedTab === 4 && (
            <>
              {/* Table - White background, scrollable */}
              <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
                {/* Desktop Table */}
                <div className="">
                  <div className="card h-[calc(100vh-235px)] flex flex-col">
                    <div className="card-body flex-1 flex flex-col overflow-hidden">
                      <IsrTaxes />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {selectedTab === 5 && (
            <>
              {/* Table - White background, scrollable */}
              <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
                {/* Desktop Table */}
                <div className="">
                  <div className="card h-[calc(100vh-235px)] flex flex-col">
                    <div className="card-body flex-1 flex flex-col overflow-hidden">
                      <MaterialCostForm />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
