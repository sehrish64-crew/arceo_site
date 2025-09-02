import React, { useState } from "react"

const ExpenseForm = () => {
  const [expenseName, setExpenseName] = useState("")
  const [existingExpense, setExistingExpense] = useState("")

  // Logic
  const isExpenseNameDisabled =
    existingExpense !== "" && existingExpense !== "reset"
  const isExistingExpenseDisabled = expenseName.trim().length > 0

  const handleExpenseNameChange = e => {
    setExpenseName(e.target.value)

    // Reset dropdown if text input becomes empty
    if (e.target.value.trim() === "") {
      setExistingExpense("")
    }
  }

  const handleExistingExpenseChange = e => {
    const value = e.target.value
    setExistingExpense(value)

    // Reset if "Select Existing" is chosen
    if (value === "reset") {
      setExpenseName("")
    }
  }

  return (
    <div className="flex flex-row -mx-3 mt-4 mb-4">
      {/* Expense Name */}
      <div className="w-full px-3 mb-6 md:mb-0 text-start">
        <label className="text-[#757575]" htmlFor="expense-name">
          Expense Name
        </label>
        <input
          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
          id="expense-name"
          type="text"
          value={expenseName}
          onChange={handleExpenseNameChange}
          disabled={isExpenseNameDisabled}
        />
      </div>

      {/* Existing Expense */}
      <div className="w-full px-3 mb-6 md:mb-0 text-start">
        <label className="text-[#757575]" htmlFor="existing-expense">
          Existing Expense
        </label>
        <select
          id="existing-expense"
          className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
          value={existingExpense}
          onChange={handleExistingExpenseChange}
          disabled={isExistingExpenseDisabled}
        >
          <option value="">Select Existing</option>
          <option value="rent">Rent</option>
          <option value="utilities">Utilities</option>
          <option value="salary">Salary</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseForm
