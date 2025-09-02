import Image from "next/image"

export default function MultiAccount() {
  return (
    <>
      <div className="bg-white py-16 px-6 md:px-20 mt-[60px] mb-[100px]">
        <section className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row-reverse gap-14">
            {/* Left Section */}
            <div className="flex-1">
              <span className="text-sm text-green-700 font-semibold mb-2 block">
                • Financial Management
              </span>
              <h1 className="text-4xl font-bold mb-4">Multi-Account Sync</h1>
              <p className="text-gray-600 mb-8 max-w-xl">
                Effortlessly link all your bank accounts, credit cards, and
                payment platforms in one dashboard for a unified view of your
                finances.
              </p>

              <div className="flex flex-col gap-4 w-full">
                <div className="flex gap-4 w-full">
                  <MultiAccounts label="All Accounts in One Place" />
                  <MultiAccounts label="Financial Management" />
                </div>
                <div className="flex gap-4 w-full">
                  <MultiAccounts label="Real-Time Synchronization" />
                  <MultiAccounts label="Financial Overview" />
                </div>
              </div>

              <button className="mt-8 px-5 py-2 bg-black text-white rounded shadow hover:opacity-90">
                Read More About This
              </button>
            </div>

            {/* Right Section */}
            <div className="flex-1 relative">
              {/* Dotted Blue Background Panel */}
              <div
                className="bg-[#EEF8ED] rounded-2xl h-[420px] relative"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23C2D5F9'/%3E%3C/svg%3E")`
                }}
              />

              {/* White Expense Card Positioned on Top */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-lg h-[300px] z-10">
                <div className="relative top-[1rem] left-[51%] -translate-x-1/2">
                  <Image
                    src="/mysides.jpg"
                    alt="Expense graphic"
                    width={700}
                    height={600}
                    className="rounded-xl object-cover w-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

// Feature card component
function MultiAccounts({ label }) {
  return (
    <div className="bg-white border border-gray-200 px-4 py-3 rounded-lg shadow-sm text-sm font-medium text-gray-700 w-full">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 bg-blue-500 rounded-full" />
        {label}
      </div>
    </div>
  )
}
