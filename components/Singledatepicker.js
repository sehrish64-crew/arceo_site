import React, { Component, createRef } from "react"
import { Calendar } from "react-date-range"

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

export default class Singledatepicker extends Component {
  wrapperRef = createRef()

  constructor(props) {
    super(props)
    const today = new Date()
    this.state = {
      selectedDate: today,
      showPicker: false,
      inputValue: this.formatDate(today),
      showBelow: true
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.handleTogglePicker = this.handleTogglePicker.bind(this)
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  handleClickOutside(event) {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.setState({ showPicker: false })
    }
  }

  handleTogglePicker() {
    if (this.wrapperRef.current) {
      const rect = this.wrapperRef.current.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      const showBelow = spaceBelow > 300 // adjust based on calendar height
      this.setState(prev => ({
        showPicker: !prev.showPicker,
        showBelow
      }))
    }
  }

  formatDate(date) {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date
      .getDate()
      .toString()
      .padStart(2, "0")}`
  }

  handleSelect(date) {
    this.setState({
      selectedDate: date,
      inputValue: this.formatDate(date),
      showPicker: false
    })
  }

  render() {
    const { selectedDate, showPicker, inputValue, showBelow } = this.state

    return (
      <div className="relative inline-block w-full" ref={this.wrapperRef}>
        <div className="relative">
          <input
            type="text"
            value={inputValue}
            readOnly
            onClick={this.handleTogglePicker}
            className="mt-2 block w-full shadow-sm text-gray-700 border rounded-lg py-3 pl-3 pr-10 leading-tight focus:outline-none focus:bg-white dark:border-[#EBEBEB]"
          />
        </div>

        {showPicker && (
          <div
            className={`absolute z-10 ${
              showBelow ? "mt-2 top-full" : "mb-2 bottom-full"
            }`}
          >
            <Calendar date={selectedDate} onChange={this.handleSelect} />
          </div>
        )}
      </div>
    )
  }
}
