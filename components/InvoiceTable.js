import React from 'react';

type Doctor = {
  Treatment: string;
  visitReason: string;
  lastVisit: string;
  Amount: string;
  Status: "Paid" | "Unpaid";
};

interface InvoiceTableProps {
  data: Doctor[];
  onDelete: (treatment: string) => void;
}

const InvoiceTable: React.FC<InvoiceTableProps> = ({ data, onDelete }) => {
  return (
    <div className="mt-5">
      <div className="card h-[calc(100vh-235px)] flex flex-col">
        <div className="card-body flex-1 flex flex-col overflow-hidden">
          <div className="w-full overflow-x-auto">
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
                      width={24}
                      height={25}
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Your SVG path */}
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#EAECF0]">
                {data.length === 0 ? (
                  <tr className="row-span-2">
                    <td
                      colSpan={8}
                      className="py-8 px-4 text-center text-gray-400 text-sm"
                    >
                      <div className="flex flex-col items-center justify-center min-h-[500px]">
                        {/* Your no records SVG */}
                        <p className="text-[#144A6C] text-2xl mt-4">No Record Found!</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  data.map((doctor) => (
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
                            {/* Your view SVG */}
                          </button>
                          <button
                            className="text-red-600 hover:text-red-800"
                            onClick={() => onDelete(doctor.Treatment)}
                          >
                            {/* Your delete SVG */}
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
  );
};

export default InvoiceTable;