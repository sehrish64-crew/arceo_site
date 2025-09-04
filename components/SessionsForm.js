'use client';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../components/ui/select"
import { useState } from 'react';
const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const initialSlot = { start: '09:00', end: '17:00' };
export default function SessionsForm() {
    const [rows, setRows] = useState([{ id: 1 }]);

    // Add new row at the end
    const addRow = () => {
        setRows((prev) => [...prev, { id: Date.now() }]);
    };

    // Remove a row by id
    const removeRow = (id) => {
        setRows((prev) => prev.filter((row) => row.id !== id));
    };


    const [availability, setAvailability] = useState(
        weekdays.map(() => [])
    );

    const addSlot = (dayIndex) => {
        const updated = [...availability];
        updated[dayIndex].push({ ...initialSlot });
        setAvailability(updated);
    };

    const removeSlot = (dayIndex, slotIndex) => {
        const updated = [...availability];
        updated[dayIndex].splice(slotIndex, 1);
        setAvailability(updated);
    };

    const handleTimeChange = (dayIndex, slotIndex, field, value) => {
        const updated = [...availability];
        updated[dayIndex][slotIndex][field] = value;
        setAvailability(updated);
    };

    const duplicateSlot = (dayIndex, slotIndex) => {
        const updated = [...availability];
        const slot = updated[dayIndex][slotIndex];
        updated[dayIndex].splice(slotIndex + 1, 0, { ...slot });
        setAvailability(updated);
    };



    return (
        <>

            <div className="max-w-4xl bg-white rounded-2xl p-6 mr-10">
                <form className="space-y-6">
                    <h1 className="text-2xl mb-3">Session</h1>
                    <span className="text-[#757575] text-sm">
                        This will define how long a usual session would be booked for in your calendar
                    </span>

                    <div className="flex flex-col items-start gap-2">
                        <label className="w-48 text-sm text-gray-700 mt-2">Week days</label>
                        <input
                            type="text"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col items-start gap-2">
                        <label className="w-48 text-sm text-gray-700 mt-2">Weekend</label>
                        <input
                            type="text"
                            className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                </form>
            </div>
            <hr className="mt-5" />

            <div className="p-6">
                <h1 className="text-2xl mb-2 mt-5">Availability</h1>
                <span className="text-[#757575] text-sm">
                    Set When you are typically available for meetings
                </span>
            </div>
            <div className="p-6 mt-6">
                <form action="">

                    <div className="flex w-full justify-between">
                        <div className="w-full">
                            <div className="flex justify-between mb-6">
                                <div>
                                    <h2 className="text-lg font-normal flex items-center gap-2">
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 4V2.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 4V2.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 14.5L10.5 13V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 16V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21.5 9H16.625H10.75M2 9H5.875" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                        Add Slots
                                    </h2>
                                    <p className="text-sm text-gray-500 mb-4">
                                        Adjust hours for specific Slots
                                    </p>
                                </div>

                            </div>
                            {weekdays.map((day, i) => (
                                <div key={i} className="flex flex-col gap-3 mb-5">
                                   <div className="flex mb-4">
                                      <div className="flex items-center gap-3 h-0 mt-6">
                                        <div className="w-6 h-6 rounded-full bg-[#0C509B] text-white flex items-center justify-center text-sm">
                                            {day}
                                        </div>

                                        {availability[i].length === 0 ? (
                                            <div className="flex gap-5 items-center">
                                                <span className="text-sm text-gray-500">Unavailable</span>
                                                <button type="button" onClick={() => addSlot(i)}>
                                                    {/* ➕ Icon */}
                                                    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        ) : null}
                                    </div>

                                    {/* Time Slots */}
                                    <div className="flex flex-col gap-4">
                                          {availability[i].map((slot, j) => (
                                        <div key={j} className="ml-2 flex items-center gap-3">
                                            <input
                                                type="time"
                                                value={slot.start}
                                                onChange={(e) => handleTimeChange(i, j, 'start', e.target.value)}
                                                className="bg-[#FAFAFA] p-3 text-sm"
                                                style={{ width: '130px', borderRadius: '12px' }}
                                            />
                                            <span className="text-gray-500">-</span>
                                            
                                            <input
                                                type="time"
                                                value={slot.end}
                                                onChange={(e) => handleTimeChange(i, j, 'end', e.target.value)}
                                                className="bg-[#FAFAFA] p-3 text-sm"
                                                style={{ width: '130px', borderRadius: '12px' }}
                                            />


                                            <button type="button" className="text-gray-500 hover:text-gray-800" onClick={() => removeSlot(i, j)}>
                                                <svg width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path>
                                                </svg>
                                            </button>

                                            {/* 📋 Duplicate */}
                                            <button type="button" className="text-gray-500 hover:text-gray-800" onClick={() => duplicateSlot(i, j)}>
                                                <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                    </div>
                                   </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full">
                            {/* Date-specific Hours */}
                            <div className="w-full">
                                <div className="flex justify-between mb-6">
                                    <div>
                                        <h2 className="text-lg font-normal flex items-center gap-2">
                                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 4V2.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M17 4V2.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M9 14.5L10.5 13V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 16V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21.5 9H16.625H10.75M2 9H5.875" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                            Date-specific hours
                                        </h2>
                                        <p className="text-sm text-gray-500 mb-4">
                                            Adjust hours for specific days
                                        </p>
                                    </div>

                                </div>
                                <div className="mt-4">
                                    {rows.map((row) => (
                                        <div
                                            key={row.id}
                                            className="flex gap-5 align-flex-start mb-5"
                                            style={{ alignItems: "flex-start" }}
                                        >
                                            <div className="flex gap-4" style={{ alignItems: "flex-start" }}>
                                                {/* Your select + inputs here */}
                                                <div className="flex gap-2" style={{ alignItems: "center" }}>
                                                    <Select>
                                                        <SelectTrigger className="bg-[#fff] w-[170px] border border-[#F0F0F0] pl-10 pr-10 rounded-lg text-sm text-[#333] font-normal">
                                                            <SelectValue placeholder="Day" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm">
                                                            <SelectItem value="monday" className="text-sm font-normal py-2 px-3 pl-8 relative bg-[#fff] hover:bg-[#eee]" style={{ fontFamily: "Poppins" }}>
                                                                Monday
                                                            </SelectItem>
                                                            {/* Other days */}
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                {/* Input field */}
                                                <div className="flex flex-col items-start gap-2">
                                                    <input
                                                        type="text"
                                                        className="w-full border border-[#F0F0F0] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                    <label className="flex gap-2 mt-3">
                                                        <input type="checkbox" />
                                                        <span className="text-gray-500 text-sm">All Day</span>
                                                    </label>
                                                </div>

                                                {/* Another input */}
                                                <div className="flex flex-col items-start gap-2">
                                                    <input
                                                        type="text"
                                                        className="w-full border border-[#F0F0F0] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    />
                                                </div>

                                                {/* Another Select */}
                                                <div className="flex gap-2" style={{ alignItems: "center" }}>
                                                    <Select>
                                                        <SelectTrigger className="bg-[#fff] w-[170px] border border-[#F0F0F0] pl-10 pr-10 rounded-lg text-sm text-[#333] font-normal">
                                                            <SelectValue placeholder="Day" />
                                                        </SelectTrigger>
                                                        <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm">
                                                            <SelectItem value="repeatdays" className="text-sm font-normal py-2 px-3 pl-8 relative bg-[#fff] hover:bg-[#eee]" style={{ fontFamily: "Poppins" }}>
                                                                Repeat Days
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex gap-4 mt-2" style={{ alignItems: "center" }}>
                                                {/* Remove button visible only if more than 1 row */}
                                                {rows.length > 1 && (
                                                    <button
                                                        type="button"
                                                        className="text-gray-500 hover:text-gray-800"
                                                        onClick={() => removeRow(row.id)}
                                                        title="Remove row"
                                                    >
                                                        <svg
                                                            width="20px"
                                                            height="20px"
                                                            viewBox="0 -0.5 25 25"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                                                                fill="#000000"
                                                            ></path>
                                                        </svg>
                                                    </button>
                                                )}

                                                {/* Add button always visible on every row */}
                                                <button
                                                    type="button"
                                                    className="text-gray-500 hover:text-gray-800"
                                                    onClick={addRow}
                                                    title="Add row"
                                                >
                                                    <svg
                                                        fill="#000000"
                                                        width="20px"
                                                        height="20px"
                                                        viewBox="0 0 32 32"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23 15h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
