"use client";
import React from "react";
import Patientes from "@/components/Patientdetail";
import { useState } from "react";
export default function Patient() {
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

      <div className="flex flex-col h-full bg-white lg:rounded-r-lg">
        {/* Header - Same background as sidebar */}
        <div className="set-header pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-shrink-0 lg:rounded-tr-lg">
          <h1 className="text-3xl font-regular text-[#144A6C]">
            Patient Details
          </h1>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <button className="flex bg-[#fff] rounded-lg border border-[#F0F0F0] text-[#144A6C] font-regular transition-colors hover:bg-[#FAFAFA] col-gap-2 items-center justify-center button_styles">

              Update
            </button>
            <button
              className="flex bg-[#fff] rounded-lg  border border-[#F0F0F0] text-[#EF2D2D] font-regular transition-colors hover:bg-[#FAFAFA] col-gap-2 items-center justify-center button_styles"
              onClick={() => {
                setIsOpen1(true);
                setTimeout(() => setModalAnimation1(true), 10);
              }}
            >
              {/* Your SVG icon remains unchanged */}
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.3185 16.6207L18.0685 16.6274L17.3185 16.6207ZM3.66699 4.83793C3.25278 4.83793 2.91699 5.17372 2.91699 5.58793C2.91699 6.00214 3.25278 6.33793 3.66699 6.33793V4.83793ZM18.3337 6.33793C18.7479 6.33793 19.0837 6.00214 19.0837 5.58793C19.0837 5.17372 18.7479 4.83793 18.3337 4.83793V6.33793ZM9.91699 9.2546C9.91699 8.84038 9.58121 8.5046 9.16699 8.5046C8.75278 8.5046 8.41699 8.84038 8.41699 9.2546H9.91699ZM8.41699 16.5879C8.41699 17.0021 8.75278 17.3379 9.16699 17.3379C9.58121 17.3379 9.91699 17.0021 9.91699 16.5879H8.41699ZM13.5837 9.2546C13.5837 8.84038 13.2479 8.5046 12.8337 8.5046C12.4194 8.5046 12.0837 8.84038 12.0837 9.2546H13.5837ZM12.0837 16.5879C12.0837 17.0021 12.4194 17.3379 12.8337 17.3379C13.2479 17.3379 13.5837 17.0021 13.5837 16.5879H12.0837ZM17.417 5.58793L16.667 5.58123L16.5685 16.614L17.3185 16.6207L18.0685 16.6274L18.167 5.59463L17.417 5.58793ZM13.652 20.2546V19.5046H8.25032V20.2546V21.0046H13.652V20.2546ZM4.58366 5.58793H3.83366V16.5879H4.58366H5.33366V5.58793H4.58366ZM3.66699 5.58793V6.33793H4.58366V5.58793V4.83793H3.66699V5.58793ZM4.58366 5.58793V6.33793H7.33366V5.58793V4.83793H4.58366V5.58793ZM7.33366 5.58793V6.33793H14.667V5.58793V4.83793H7.33366V5.58793ZM14.667 5.58793V6.33793H17.417V5.58793V4.83793H14.667V5.58793ZM17.417 5.58793V6.33793H18.3337V5.58793V4.83793H17.417V5.58793ZM7.33366 5.18052H8.08366C8.08366 3.8753 9.30401 2.67126 11.0003 2.67126V1.92126V1.17126C8.64655 1.17126 6.58366 2.88567 6.58366 5.18052H7.33366ZM11.0003 1.92126V2.67126C12.6966 2.67126 13.917 3.8753 13.917 5.18052H14.667H15.417C15.417 2.88567 13.3541 1.17126 11.0003 1.17126V1.92126ZM7.33366 5.18052H6.58366V5.58793H7.33366H8.08366V5.18052H7.33366ZM14.667 5.18052H13.917V5.58793H14.667H15.417V5.18052H14.667ZM8.25032 20.2546V19.5046C6.63949 19.5046 5.33366 18.1988 5.33366 16.5879H4.58366H3.83366C3.83366 19.0272 5.81107 21.0046 8.25032 21.0046V20.2546ZM17.3185 16.6207L16.5685 16.614C16.5542 18.2146 15.2526 19.5046 13.652 19.5046V20.2546V21.0046C16.0758 21.0046 18.0468 19.0511 18.0685 16.6274L17.3185 16.6207ZM9.16699 9.2546H8.41699V16.5879H9.16699H9.91699V9.2546H9.16699ZM12.8337 9.2546H12.0837V16.5879H12.8337H13.5837V9.2546H12.8337Z"
                  fill="#EF2D2D"
                />
              </svg>
              Delete
            </button>
          </div>
        </div>

        {/* Table - White background, scrollable */}
        <div className="flex-1 overflow-auto  bg-[#CEE5E433]">
          {/* Desktop Table */}
          <div className="">
            <div className="h-[calc(100vh-235px)] flex flex-col">
              <div className="card-body flex-1 flex flex-col overflow-hidden">
                <Patientes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}