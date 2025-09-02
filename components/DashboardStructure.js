'use client';
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const Select = dynamic(() => import('@/components/ui/select').then(mod => mod.Select), {
  ssr: false,
});

const SelectTrigger = dynamic(() => import('@/components/ui/select').then(mod => mod.SelectTrigger), {
  ssr: false,
});
const SelectValue = dynamic(() => import('@/components/ui/select').then(mod => mod.SelectValue), {
  ssr: false,
});
const SelectContent = dynamic(() => import('@/components/ui/select').then(mod => mod.SelectContent), {
  ssr: false,
});
const SelectItem = dynamic(() => import('@/components/ui/select').then(mod => mod.SelectItem), {
  ssr: false,
});
const DonutChart = dynamic(() => import('./DonutChart'), {
    ssr: false,
});
const PatientSummary = dynamic(() => import('./PatientSummary'), {
    ssr: false,
});
const LineChart = dynamic(() => import('./LineChart'), {
    ssr: false,
});
const Dashboardapex = dynamic(() => import("./Dashboardapex"), {
    ssr: false,
});
const BoxChart = dynamic(() => import("./BoxChart"), {
    ssr: false,
});
const doctorsData = [
    // your doctors data here (as you provided)
    {
        id: "738",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "777",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "878",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "73647",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "738",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "777",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "878",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "73647",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "738",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "777",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "878",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "73647",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "738",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "777",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "878",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
    {
        id: "73647",
        fullName: "Clear Smile Dentistry",
        specialty: "(415) 555-0187",
        phone: "info@clearsmile.com",
        email: "456 Maple Ave, San Francisco, CA 94101",
        address: "823",
        appointments: 567,
        patients: 234,
    },
];

const allInvoicesData = [
    {
        invoiceNumber: "INV-001",
        user: "John Doe",
        userType: "Patient",
        clinic: "Smile Dental Clinic",
        package: "Root Canal Package",
        date: "2024-06-15",
        amount: "$200",
        status: "Paid"
    },
    {
        invoiceNumber: "INV-002",
        user: "Jane Smith",
        userType: "Patient",
        clinic: "Bright Smiles",
        package: "Braces Adjustment",
        date: "2024-07-20",
        amount: "$150",
        status: "Unpaid"
    },
    {
        invoiceNumber: "INV-001",
        user: "John Doe",
        userType: "Patient",
        clinic: "Smile Dental Clinic",
        package: "Root Canal Package",
        date: "2024-06-15",
        amount: "$200",
        status: "Paid"
    },
    {
        invoiceNumber: "INV-002",
        user: "Jane Smith",
        userType: "Patient",
        clinic: "Bright Smiles",
        package: "Braces Adjustment",
        date: "2024-07-20",
        amount: "$150",
        status: "Unpaid"
    },
    {
        invoiceNumber: "INV-001",
        user: "John Doe",
        userType: "Patient",
        clinic: "Smile Dental Clinic",
        package: "Root Canal Package",
        date: "2024-06-15",
        amount: "$200",
        status: "Paid"
    },
    {
        invoiceNumber: "INV-002",
        user: "Jane Smith",
        userType: "Patient",
        clinic: "Bright Smiles",
        package: "Braces Adjustment",
        date: "2024-07-20",
        amount: "$150",
        status: "Unpaid"
    },
    {
        invoiceNumber: "INV-001",
        user: "John Doe",
        userType: "Patient",
        clinic: "Smile Dental Clinic",
        package: "Root Canal Package",
        date: "2024-06-15",
        amount: "$200",
        status: "Paid"
    },
    {
        invoiceNumber: "INV-002",
        user: "Jane Smith",
        userType: "Patient",
        clinic: "Bright Smiles",
        package: "Braces Adjustment",
        date: "2024-07-20",
        amount: "$150",
        status: "Unpaid"
    },
    {
        invoiceNumber: "INV-001",
        user: "John Doe",
        userType: "Patient",
        clinic: "Smile Dental Clinic",
        package: "Root Canal Package",
        date: "2024-06-15",
        amount: "$200",
        status: "Paid"
    },
    {
        invoiceNumber: "INV-002",
        user: "Jane Smith",
        userType: "Patient",
        clinic: "Bright Smiles",
        package: "Braces Adjustment",
        date: "2024-07-20",
        amount: "$150",
        status: "Unpaid"
    }

];

export default function DashboardStructure() {
    // filteredDoctors state containing doctorsData by default
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    // On mount, set filteredDoctors to doctorsData
    useEffect(() => {
        setFilteredDoctors(doctorsData);
    }, []);

    const [allDoctors, setAllDoctors] = useState([]);

    useEffect(() => {
        setAllDoctors(allInvoicesData);
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50">
                {/* ===== Top Row Cards ===== */}
                <div className="bg-white rounded-xl shadow-sm p-6 min-h-[300px]">
                    <h3 className="text-[#144A6C] text-2xl font-normal mb-4">Total Booking</h3>
                    <div className="h-[calc(100%-40px)]">
                        <DonutChart />
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 min-h-[300px]">
                    <h3 className="text-[#144A6C] text-2xl font-normal mb-4">Top Material Reorders</h3>
                    <div className="h-[calc(100%-40px)]">
                        <DonutChart />
                    </div>
                </div>

                {/* Upcoming Appointments - taller card, spans 2 rows */}
                <div className="bg-white rounded-xl shadow-sm p-6 md:row-span-2 h-[900px] overflow-y-auto">
                    <h3 className="text-[#144A6C] text-md font-normal mb-4">
                        Upcoming Appointments
                    </h3>
                    <hr className="border-[#E2E8F0] mb-4" />

                    {/* Today Section */}
                    <span className="text-[#56555C] text-sm font-medium block mb-3">Today</span>
                    {[...Array(4)].map((_, i) => (
                        <div key={`today-${i}`} className="rounded-lg p-3 hover:bg-[#F0F9F9] mb-3 transition-colors">
                            <div className="flex justify-between items-center mb-1">
                                <div className="text-[#144A6C] font-medium">Root Canal</div>
                                <p className="text-[#606061] text-sm">Chandler Bing</p>
                            </div>
                            <div className="flex justify-between text-xs text-[#606061]">
                                <div>10:00am - 11:00am</div>
                                <div>Nov 01, 2024</div>
                            </div>
                        </div>
                    ))}

                    <hr className="border-[#E2E8F0] my-4" />

                    {/* 12 July Section */}
                    <span className="text-[#56555C] text-sm font-medium block mb-3">12 July</span>
                    {[...Array(10)].map((_, i) => (
                        <div key={`july12-${i}`} className="rounded-lg p-3 hover:bg-[#F0F9F9] mb-3 transition-colors">
                            <div className="flex justify-between items-center mb-1">
                                <div className="text-[#144A6C] font-medium">Cleaning</div>
                                <p className="text-[#606061] text-sm">Joey Tribbiani</p>
                            </div>
                            <div className="flex justify-between text-xs text-[#606061]">
                                <div>2:00pm - 3:00pm</div>
                                <div>Jul 12, 2024</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ===== Bottom Row Cards ===== */}
                <div className="bg-white rounded-xl shadow-sm p-6 min-h-[250px]">
                    <PatientSummary />
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 min-h-[250px]">

                    <div className="h-[calc(100%-40px)]">
                        <LineChart />
                    </div>
                </div>

                {/* Empty grid cell to maintain layout */}
                <div className="md:hidden"></div>
            </div>
            <div className="card mt-5">
                <div className="card-body">
                    <Dashboardapex />
                </div>
            </div>
            <div className="card mt-5">
                <div className="card-body">
                    <BoxChart />
                </div>
            </div>

            <div className="card h-[calc(100vh-235px)] flex flex-col mt-5">
                <div className="card-body flex-1 flex flex-col overflow-hidden">
                    <div className="flex justify-between items-center flex-col md:flex-row pr-3">
                        <h2 className="text-2xl font-normal mb-8 mt-3">Near-end Stocks</h2>
                        <div className="slct">

                            <Select>
                                <SelectTrigger className="bg-[#fff] border border-[#F0F0F0] pl-10 pr-10 rounded-lg text-sm text-[#333] font-normal">
                                    <SelectValue placeholder="Sort by" />
                                </SelectTrigger>

                                <SelectContent className="rounded-lg border border-[#F0F0F0] shadow-sm">
                                    <SelectItem
                                        value="monthly"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative bg-[#fff] hover:bg-[#eee]"
                                        style={{ fontFamily: "Poppins" }}
                                    >
                                        Lowest to Highest
                                    </SelectItem>

                                    <SelectItem
                                        value="weekly"
                                        className="text-sm font-normal py-2 px-3 pl-8 relative bg-[#fff] hover:bg-[#eee]"
                                        style={{ fontFamily: "Poppins" }}
                                    >
                                         Highest to Lowest
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">ID No</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Material Name</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Unit</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Package Quantity</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Base Stock  </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Total Stock</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Reorder Limit</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-[#EAECF0]">
                                {filteredDoctors.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="py-8 px-4 text-center text-gray-400 text-sm">
                                            <div className="flex flex-col items-center justify-center min-h-[300px]">
                                                <p className="text-[#144A6C] text-2xl mt-4">No Record Found!</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredDoctors.map((doc) => (
                                        <tr key={doc.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{doc.id}</td>
                                            <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{doc.fullName}</td>
                                            <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{doc.specialty}</td>
                                            <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{doc.phone}</td>
                                            <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{doc.email}</td>
                                            <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{doc.address}</td>
                                            <td className="px-6 py-4 text-sm text-[#475467] whitespace-nowrap">{doc.appointments}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card h-[calc(100vh-235px)] flex flex-col mt-5">
                <div className="card-body flex-1 flex flex-col overflow-hidden">
                    <h2 className="text-2xl font-normal mb-8 mt-3">Near Expiry Subscriptions</h2>
                    <div className="w-full overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Invoice Number</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">User</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">User Type</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Clinic</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Package</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-[#475467] uppercase tracking-wider">Amount</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-[#EAECF0]">
                                {allDoctors.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="py-8 px-4 text-center text-gray-400 text-sm">
                                            <div className="flex flex-col items-center justify-center min-h-[300px]">
                                                <p className="text-[#144A6C] text-2xl mt-4">No Record Found!</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    allDoctors.map((doc) => (
                                        <tr key={doc.invoiceNumber} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{doc.invoiceNumber}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{doc.user}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{doc.userType}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{doc.clinic}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{doc.package}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#475467]">{doc.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <span
                                                    className={`
              inline-flex px-3 py-1 rounded-full text-xs font-medium
              ${doc.status === "Paid"
                                                            ? "bg-[#F8FFF8] text-[#177606] border border-[#B7EFAB] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                                            : ""}
              ${doc.status === "Unpaid"
                                                            ? "bg-[#FFF8F8] text-[#CE2D2D] border border-[#E43F33] rounded-sm pl-4 pr-4 pt-2 pb-2"
                                                            : ""}
            `}
                                                >
                                                    {doc.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    );
}
