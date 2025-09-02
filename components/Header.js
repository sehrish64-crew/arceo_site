'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Settings, User, ChevronDown, Menu, X } from 'lucide-react';
import { Listbox } from '@headlessui/react';

import InventoryModal from './InventoryModal';
import PatientModal from './PatientModal';
import DoctorModal from './DoctorModal';
import ClinicModal from './ClinicModal';

export default function Header({ onToggleSidebar, isSidebarOpen }) {
  const pathname = usePathname();
  const isActive = pathname === '/setting';

  const [isInventoryModalOpen, setIsInventoryModalOpen] = useState(false);
  const [isPatientModalOpen, setIsPatientModalOpen] = useState(false);
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [isClinicModalOpen, setIsClinicModalOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-2 z-10 bg-white px-4 lg:pr-[50px] py-4 w-full">
      <div className="flex gap-3 px-6 justify-between">
        <div className="flex items-center col-gap-6 lg:gap-9">
          <div className="flex items-center space-x-4">
            <button
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-200"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="flex items-center space-x-2">
              <div className="items-center justify-center">
                <img src="/logo.png" alt="Logo" />
              </div>
            </div>
          </div>

          <nav className="hidden xl:flex items-center space-x-6">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsInventoryModalOpen(true)}
                className="w-44 text-[#144A6C] text-center font-regular transition-colors whitespace-nowrap bg-[#FAFAFA] px-4 py-2 rounded-lg shadow-sm border border-[#F0F0F0]"
              >
                Add Inventory
              </button>
              <button
                onClick={() => setIsPatientModalOpen(true)}
                className="w-44 text-[#144A6C] text-center font-regular transition-colors whitespace-nowrap bg-[#FAFAFA] px-4 py-2 rounded-lg shadow-sm border border-[#F0F0F0]"
              >
                Add Patient
              </button>
              <button
                onClick={() => setIsDoctorModalOpen(true)}
                className="w-44 text-[#144A6C] text-center font-regular transition-colors whitespace-nowrap bg-[#FAFAFA] px-4 py-2 rounded-lg shadow-sm border border-[#F0F0F0]"
              >
                Add Doctor
              </button>
              <button
                onClick={() => setIsClinicModalOpen(true)}
                className="w-44 text-[#144A6C] text-center font-regular transition-colors whitespace-nowrap bg-[#FAFAFA] px-4 py-2 rounded-lg shadow-sm border border-[#F0F0F0]"
              >
                Add Clinic
              </button>
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4">
          <Link
            href="/admin/setting"
            className={`text-[#144A6C] text-center font-regular transition-colors whitespace-nowrap px-4 py-2 rounded-lg shadow-sm border md:flex items-center space-x-2 justify-center ${
              isActive
                ? 'bg-[#144A6C] border-[#144A6C] text-[#fff]'
                : 'bg-[#FAFAFA] border-[#F0F0F0]'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span className="hidden lg:block">Settings</span>
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="w-auto lg:w-44 text-[#144A6C] text-center font-medium transition-colors whitespace-nowrap bg-[#FAFAFA] px-4 py-2 rounded-lg shadow-sm border border-[#F0F0F0] flex items-center space-x-2 justify-center hover:bg-[#F0F0F0]"
            >
              <Bell className="w-4 h-4" />
              <span className="hidden lg:block">Notification</span>
              <ChevronDown
                className={`w-3 h-3 hidden lg:block transition-transform ${
                  isNotificationOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-xl z-[100]">
                <div className="p-4 border-b border-gray-100 font-semibold text-[#144A6C]">
                  Notifications
                </div>
                <ul className="max-h-60 overflow-y-auto divide-y divide-gray-100">
                  <li className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm font-medium text-gray-700">
                      Appointment booked with Dr. Ayesha
                    </p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm font-medium text-gray-700">
                      New message from patient Ahmed
                    </p>
                    <p className="text-xs text-gray-400">1 day ago</p>
                  </li>
                  <li className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                    <p className="text-sm font-medium text-gray-700">
                      Lab report ready for review
                    </p>
                    <p className="text-xs text-gray-400">3 days ago</p>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Modals */}
          <InventoryModal isOpen={isInventoryModalOpen} onClose={() => setIsInventoryModalOpen(false)} />
          <PatientModal isOpen={isPatientModalOpen} onClose={() => setIsPatientModalOpen(false)} />
          <DoctorModal isOpen={isDoctorModalOpen} onClose={() => setIsDoctorModalOpen(false)} />
          <ClinicModal isOpen={isClinicModalOpen} onClose={() => setIsClinicModalOpen(false)} />

          {/* Avatar */}
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <img src="/admin.png" alt="Admin" />
          </div>
        </div>
      </div>
    </header>
  );
}
