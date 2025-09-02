import { useState } from "react"

const plans = [
  {
    id: "basic",
    name: "Basic plan",
    price: 10,
    features:
      "Includes up to 10 users, 20GB individual data and access to all features.",
    limitedTime: true
  },
  {
    id: "business",
    name: "Business plan",
    price: 20,
    features:
      "Includes up to 20 users, 40GB individual data and access to all features."
  },
  {
    id: "enterprise",
    name: "Enterprise plan",
    price: 40,
    features:
      "Unlimited users, unlimited individual data and access to all features."
  }
]

export default function PricingBilling() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const togglePlan = id => {
    if (selectedPlan === id) {
      setSelectedPlan(null) // Uncheck if same plan is clicked again
    } else {
      setSelectedPlan(id)
    }
  }

  return (
    <>
      <div className="flex p-6 align-center justify-between flex-col md:flex-row ">
        <div className="flex flex-col space-y-6">
          <h3 className="text-3xl font-regular text-[#144A6C]">
            {" "}
            Subscription Plans
          </h3>
          <span className="text-[20px] text-gray-500">
            These are all the plans offered by us. Simply select a plan, pay for{" "}
            <br /> it and you are ready to go. Upgrade or cancel any time.
          </span>
        </div>
        <div className="p-6 space-y-10 w-[100%] md:w-[50%]">
          {/* Pricing Plans */}
          <div className="space-y-6">
            {plans.map(plan => {
              const isSelected = selectedPlan === plan.id

              return (
                <div key={plan.id} className="space-y-0">
                  {/* Plan Header */}
                  <label
                    htmlFor={`plan-${plan.id}`}
                    className={`flex items-center justify-between rounded-t-lg border px-4 py-3 cursor-pointer whitespace-nowrap
                                ${
                                  isSelected
                                    ? "border-[#144A6C] bg-[#E6F0FA]"
                                    : "border-gray-200 bg-white"
                                }
                            `}
                  >
                    <div className="flex items-center space-x-2 justify-between pr-2 w-full">
                      <span className="font-semibold text-gray-900">
                        {plan.name}
                      </span>
                      {plan.limitedTime && (
                        <span className="rounded-full bg-green-100 text-green-800 px-2 py-0.5 text-xs font-medium flex items-center whitespace-nowrap">
                          <span className="block h-2 w-2 rounded-full bg-green-600 mr-1" />
                          Limited time only
                        </span>
                      )}
                    </div>

                    <input
                      id={`plan-${plan.id}`}
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => togglePlan(plan.id)}
                      className="h-5 w-5 rounded border-2 border-[#144A6C] text-[#144A6C]
                                    checked:bg-[#144A6C] checked:border-[#144A6C] checked:text-white
                                    focus:outline-none focus:ring-2 focus:ring-[#144A6C] focus:ring-offset-1"
                    />
                  </label>

                  {/* Plan Details */}
                  <div
                    className={`rounded-b-lg border border-t-0 px-4 py-4
                                ${
                                  isSelected
                                    ? "border-[#144A6C] bg-[#E6F0FA]"
                                    : "border-gray-200 bg-white"
                                }
                            `}
                  >
                    <div className="flex items-baseline justify-between">
                      <div className="flex items-baseline space-x-1">
                        <p className="text-3xl font-medium text-gray-900">
                          ${plan.price}
                        </p>
                        <p className="text-sm font-medium text-gray-500">
                          per month
                        </p>
                      </div>

                      {/* Cancel Button – visible only when selected */}
                      {isSelected && (
                        <button
                          type="button"
                          onClick={() => setSelectedPlan(null)}
                          className="text-gray-400 hover:text-red-500"
                          title="Remove selection"
                        >
                          <button className="border border-[#ccc] rounded-lg py-2 px-8 text-[#144A6C] text-sm">
                            Cancel
                          </button>
                        </button>
                      )}
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                      {plan.features}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
