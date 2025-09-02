"use client";

import React, { useState, useEffect, useRef } from "react";
import FeatureCards from "../components/FeatureCards";
import MultiAccount from "../components/MultiAccount";
import Batch from "../components/Batch";
import Notification from "../components/Notification";
import Image from "next/image";
import {
  Check,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Star,
  ChevronRight,
  Award,
  Stethoscope,
  UserCheck,
  Zap,
  Info,
  Settings,
  DollarSign,
  House,
  CreditCard,
  PiggyBank,
  Wallet,
  Calendar,
  ClipboardList,
  Target,
  Bell,
  BookText,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
export default function Home() {
  const logos = [
    "/adidas.png",
    "/adidas.png",
    "/adidas.png",
    "/adidas.png",
    "/adidas.png",
    "/adidas.png",
    "/adidas.png",
    "/adidas.png",
    "/adidas.png",
    "/adidas.png",
    "/adidas.png",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startRotation = 12.25;
  const rotationX = Math.max(0, startRotation - scrollY * 0.015); // Very smooth & slow

  const [isYearly, setIsYearly] = useState(false);

  const [pricingMode, setPricingMode] = useState("monthly");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="header_centered">
        <header className="bg-white shadow-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <Stethoscope className="w-8 h-8 text-[#144a6c]" />
                <span className="text-2xl font-bold text-[#144a6c]">
                  DentalSociety
                </span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a
                  href="/"
                  className="flex items-center space-x-2 text-[#4e758d] hover:text-[#144a6c] font-medium transition-colors"
                >
                  <House className="w-4 h-4" />
                  <span>Home</span>
                </a>
                <a
                  href="#about"
                  className="flex items-center space-x-2 text-[#4e758d] hover:text-[#144a6c] font-medium transition-colors"
                >
                  <Info className="w-4 h-4" />
                  <span>About</span>
                </a>
                <a
                  href="#features"
                  className="flex items-center space-x-2 text-[#4e758d] hover:text-[#144a6c] font-medium transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  <span>Features</span>
                </a>
                <a
                  href="#pricing"
                  className="flex items-center space-x-2 text-[#4e758d] hover:text-[#144a6c] font-medium transition-colors"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>Pricing</span>
                </a>
                <a
                  href="#contact"
                  className="flex items-center space-x-2 text-[#4e758d] hover:text-[#144a6c] font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              </nav>
              <div className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="text-[#4e758d] hover:text-[#144a6c] font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="#"
                  className="bg-[#144a6c] text-white px-6 py-2 rounded-lg hover:bg-[#4e758d] transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-16">
        <div className="relative bg-white ">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center pt-20">
            {/* Content Section */}
            <div className="mb-12">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ color: "#144a6c" }}
              >
                Modern Clinic Management System
              </h1>
              <p
                className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto"
                style={{ color: "#4e758d" }}
              >
                Streamline your healthcare practice with our comprehensive
                clinic management solution. Manage appointments, patient
                records, billing, and more in one integrated platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-3 text-lg font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105"
                  style={{ backgroundColor: "#144a6c" }}
                >
                  Start Free Trial
                </button>
                <button
                  className="px-8 py-3 text-lg font-semibold rounded-lg border-2 transition-all duration-200 hover:opacity-80"
                  style={{
                    color: "#144a6c",
                    borderColor: "#144a6c",
                    backgroundColor: "transparent",
                  }}
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* Image Section with Scroll Animation */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden mx-60 transform transition-transform duration-300 hover:scale-105 banner-image"
              style={{
                willChange: "transform",
                opacity: 1,
                transform: `perspective(1200px) rotateX(${rotationX}deg)`,
                transition: "transform 0.5s ease", // Smooth transition time
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src="/banner.jpg"
                alt="Clinic Management Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* logo slider section */}
      <section className="mt-20">
        <div className="relative bg-[#dbeeee] py-6 overflow-hidden w-full">
          {/* 🔳 Left white fade */}
          <div className="absolute top-0 bottom-0 left-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          {/* 🔳 Right white fade */}
          <div className="absolute top-0 bottom-0 right-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
          <div className="text-center mb-8 mt-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Clinics
            </h2>
          </div>

          <div className="flex gap-12 animate-marquee whitespace-nowrap w-max relative z-20">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Logo ${i}`}
                className="h-[150px] w-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-10 bg-white">
        <div className="flex justify-center mt-10">
          <div className="inline-block bg-[#cee5e4] text-[#144a6c] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            About ClinicCare
          </div>
        </div>
        <div className="max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl font-bold text-[#144a6c] mb-6">
                Transforming Healthcare Management
              </h2>
              <p className="text-lg text-[#4e758d] mb-6 leading-relaxed mt-10">
                With over a decade of experience in healthcare technology, we
                understand the unique challenges faced by medical practices. Our
                clinic management system is designed by healthcare
                professionals for healthcare professionals.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl">
              {/* Main Image with Scroll Animation */}
              <img
                src="/about.jpg"
                alt="Healthcare Team"
                style={{
                  height: "600px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />

              {/* Floating Overlay Box */}
              <div
                className="absolute top-3 right-8 bg-white p-6 rounded-xl shadow-2xl border border-[#cee5e4] backdrop-blur-sm bg-opacity-95 w-[55%] transition-transform duration-300 ease-out"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <div className="text-center mb-4">
                  <div className="text-2xl font-medium text-[#eeeee] text-center">
                    <div className="flex justify-center gap-1 items-center">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      Purchase Order #120{" "}
                    </div>
                  </div>
                  <p className="text-[#4e758d] font-medium text-sm text-center">
                    Artisan
                  </p>
                </div>
                <div className="border-t border-[#cee5e4] pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#4e758d]">Invoices</span>
                    <span className="text-[#4e758d]">PO Total</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#000] font-bold text-2xl">
                      $30,000
                    </span>
                    <span className="font-bold text-[#000] text-2xl">
                      $50,000
                    </span>
                  </div>
                  <div className="w-full bg-[#cee5e4] rounded-full h-2 mt-2">
                    <div className="bg-[#144a6c] h-2 rounded-full w-[68.5%]"></div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-[#144a6c] rounded-full opacity-60"></div>
              <div className="absolute top-12 left-8 w-2 h-2 bg-[#4e758d] rounded-full opacity-40"></div>
              <div className="absolute bottom-16 right-16 w-4 h-4 bg-[#cee5e4] rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Features Section */}
      <section id="features" className="py-20 bg-[#cee5e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-start mb-16">
            <h2 className="text-5xl font-bold text-[#144a6c] mb-4">
              Comprehensive CRM Features
            </h2>
            <p className="text-xl text-[#4e758d] max-w-3xl text-start">
              Everything you need to manage your clinic efficiently, from
              patient care to business operations
            </p>
          </div>
          {/* ✅ Dashboard Layout: Exact Like Image with Matching Card Designs */}
          <div className="grid grid-cols-6 grid-rows-2 gap-4">
            {/* 1. Left Big Vertical Card */}
            <div className="col-span-2 row-span-2 bg-[#F6F6F6] rounded-2xl shadow p-6 flex flex-col justify-between">
              <div>
                <span className="inline-block bg-lime-100 text-lime-800 text-3xl font-semibold px-2 py-1 rounded-xl mb-2">
                  Empowering Your Wealth with <br /> Precision.
                </span>
                <div className="flex items-center mt-20">
                  <div className="flex -space-x-2">
                    <img
                      src="/avatar-1.jpg"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="/avatar-2.jpg"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="/avatar-1.jpg"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="/avatar-3.jpg"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-500">+8</span>
                </div>
                <p className="text-1xl font-extrabold text-gray-600 mt-2">
                  Daily New <br /> Clients
                </p>
              </div>
              <div className="flex items-start flex-col mt-4 row-span-3">
                <div className="text-6xl font-extrabold text-gray-900">100</div>
                <div className="text-green-500 text-1xl font-medium">+36%</div>
              </div>
            </div>
            {/* 2. Sales Analysis Chart */}
            <div className="col-span-2 row-span-1 bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
              <h2 className="text-base font-medium text-gray-900">
                Sales Analysis
              </h2>
              <div className="flex flex-row-reverse items-center justify-between mt-4">
                <div className="flex items-end h-24 mt-4 space-x-2">
                  <div className="flex flex-col">
                    <div className="w-6 bg-gray-200 h-10 rounded" />
                    <span className="text-sm text-gray-500">Jan</span>
                  </div>

                  <div className="flex flex-col">
                    <div className="w-6 bg-gray-300 h-14 rounded" />
                    <span className="text-sm text-gray-500">Feb</span>
                  </div>

                  <div className="flex flex-col">
                    <div className="w-6 bg-gray-200 h-10 rounded" />
                    <span className="text-sm text-gray-500">Mar</span>
                  </div>

                  <div className="w-6 bg-[#000] h-full rounded" />
                </div>
                <div className="mt-4 flex flex-col gap-x-10">
                  <div className="text-4xl font-bold">$35,600</div>
                  <div className="text-sm text-gray-500">March 2026</div>
                </div>
              </div>
            </div>
            {/* 3. 100K Users (with SIM chip design) */}
            <div className="col-span-2 row-span-1 bg-green-950 text-white rounded-2xl shadow p-6 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="text-4xl font-bold">100K</div>
                <p className="text-sm mt-1 text-gray-200">
                  Users around <br /> the world
                </p>
              </div>
              <div className="flex flex-end justify-end">
                <svg
                  width="64px"
                  height="64px"
                  viewBox="0 0 1024 1024"
                  className="icon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M106.666667 746.666667V277.333333c0-46.933333 38.4-85.333333 85.333333-85.333333h640c46.933333 0 85.333333 38.4 85.333333 85.333333v469.333334c0 46.933333-38.4 85.333333-85.333333 85.333333H192c-46.933333 0-85.333333-38.4-85.333333-85.333333z"
                      fill="#FF9800"
                    />
                    <path
                      d="M917.333333 448v-42.666667H661.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h21.333334v-42.666667h-21.333334c-46.933333 0-85.333333 38.4-85.333333 85.333334s38.4 85.333333 85.333333 85.333333h64v128h-64c-59.733333 0-106.666667 46.933333-106.666666 106.666667s46.933333 106.666667 106.666666 106.666666h42.666667v-42.666666h-42.666667c-36.266667 0-64-27.733333-64-64s27.733333-64 64-64h256v-42.666667h-149.333333v-128h149.333333zM362.666667 576h-64v-128h64c46.933333 0 85.333333-38.4 85.333333-85.333333s-38.4-85.333333-85.333333-85.333334h-64v42.666667h64c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666H106.666667v42.666667h149.333333v128H106.666667v42.666667h256c36.266667 0 64 27.733333 64 64s-27.733333 64-64 64h-42.666667v42.666666h42.666667c59.733333 0 106.666667-46.933333 106.666666-106.666666s-46.933333-106.666667-106.666666-106.666667z"
                      fill="#FFD54F"
                    />
                  </g>
                </svg>
              </div>
              <div className="mt-6 text-2xl text-gray-200">Sales Analysis</div>
            </div>
            {/* 1. Smaller "Your Personal Finance Toolkit" box */}
            <div className="col-span-1 row-span-1 bg-[#052E16] rounded-2xl shadow p-6 flex flex-col text-white">
              <div className="flex items-center space-x-3">
                <img src="/review.png" alt="User" className="w-24 h-auto" />
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-1xl">
                  Your Personal Finance Toolkit
                </h3>
              </div>
              <p className="text-sm text-gray-200 mt-2">
                We provide tools to simplify your financial decisions.
              </p>
            </div>

            {/* 2. Larger "$100M Fraud Protection" box */}
            <div className="col-span-3 row-span-1 bg-[#F6F6F6] rounded-2xl shadow p-6 flex items-center space-x-6">
              <div className="bg-white rounded-xl p-10 flex flex-col items-center justify-center">
                <div className="bg-emerald-100 p-3 rounded-full w-fit">
                  <svg
                    className="w-6 h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4z" />
                  </svg>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-3xl font-bold">$100M</div>
                  <div className="text-sm text-gray-600">
                    Fraud &amp; Scan Protection
                  </div>
                </div>
              </div>
              <div className="col-span-2 row-span-1 rounded-2xl p-6 flex flex-col justify-between">
                <h3 className="text-lg font-semibold">
                  Building a 100% Secure Financial Plan
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  A step-by-step guide to creating a bulletproof financial
                  roadmap for your future.
                </p>
                <a
                  href="#"
                  className="mt-4 text-sm text-green-700 font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 mt-4 bg-[#F6F6F6] rounded-xl">
            <div
              className="text-center p-4  bg-opacity-30 rounded-xl flex justify-center flex-col"
              style={{ height: "150px" }}
            >
              <div className="flex items-center">
                <svg
                  width="64px"
                  height="100px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 5V19M12 5L6 11M12 5L18 11"
                      stroke="#144a6c"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
                <div>
                  <p className="text-5xl font-bold text-[#144a6c]">50%</p>
                  <p className="text-[#4e758d] text-1xl mt-2">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center p-4  bg-opacity-30 rounded-xl flex justify-center flex-col">
              <div className="flex items-center">
                <svg
                  width="64px"
                  height="100px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 5V19M12 5L6 11M12 5L18 11"
                      stroke="#144a6c"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
                <div>
                  <p className="text-5xl font-bold text-[#144a6c]">50%</p>
                  <p className="text-[#4e758d] text-1xl mt-2">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center p-4  bg-opacity-30 rounded-xl flex justify-center flex-col">
              <div className="flex items-center">
                <svg
                  width="64px"
                  height="100px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 5V19M12 5L6 11M12 5L18 11"
                      stroke="#144a6c"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
                <div>
                  <p className="text-5xl font-bold text-[#144a6c]">50%</p>
                  <p className="text-[#4e758d] text-1xl mt-2">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center p-4 bg-opacity-30 rounded-xl flex justify-center flex-col">
              <div className="flex items-center">
                <svg
                  width="64px"
                  height="100px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M12 5V19M12 5L6 11M12 5L18 11"
                      stroke="#144a6c"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
                <div>
                  <p className="text-5xl font-bold text-[#144a6c]">50%</p>
                  <p className="text-[#4e758d] text-1xl mt-2">
                    Years Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <div id="services" className="py-20 bg-[#FAFAFA] relative">
        <section className="py-16 px-6 max-w-7xl mx-auto text-center">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#144a6c" }}
            >
              Our Results in Numbers
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#4e758d" }}
            >
              Discover the real impact Payble has made on budgeting, saving, <br /> and financial health across our growing community.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="relative bg-white p-6 rounded-xl overflow-hidden">
              {/* Background dots with gradient masking from right to left */}
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage: "url('/dots.jpg')",
                  backgroundRepeat: 'repeat',
                  backgroundSize: '38.5px',
                  opacity: 0.2,
                  maskImage: "linear-gradient(to right, transparent 40%, black 150%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
                }}
              ></div>

              {/* Foreground Content */}
              <div className="relative z-10 flex flex-col gap-5 text-start">
                <h3 className="text-lg font-semibold">
                  <span className="text-[#0083FD] text-4xl font-normal">80%</span><br />
                  <span className="text-[#cecece] font-normal text-2xl mt-2">Of Users Save More Each Month</span>
                </h3>
                <p className="text-gray-400 text-md font-bold mt-[50px]">
                  Our AI-powered budgeting tools help users save an average of 20% more by identifying areas for spending reduction.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative bg-white p-6 rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage: "url('/dots.jpg')",
                  backgroundRepeat: 'repeat',
                  backgroundSize: '38.5px',
                  opacity: 0.2,
                  maskImage: "linear-gradient(to right, transparent 40%, black 150%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
                }}
              ></div>
              <div className="relative z-10 flex flex-col gap-5 text-start">
                <h3 className="text-lg font-semibold">
                  <span className="text-[#63B95D] text-4xl font-normal">$1.6M +</span><br />
                  <span className="text-[#cecece] font-normal text-2xl mt-2">Saved in Goals</span>
                </h3>
                <p className="text-gray-400 text-md font-bold mt-[50px]">
                  Payble users have collectively saved over half a million dollars toward their financial goals, from vacations to emergency funds.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="relative bg-white p-6 rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage: "url('/dots.jpg')",
                  backgroundRepeat: 'repeat',
                  backgroundSize: '38.5px',
                  opacity: 0.2,
                  maskImage: "linear-gradient(to right, transparent 40%, black 150%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
                }}
              ></div>
              <div className="relative z-10 flex flex-col gap-5 text-start">
                <h3 className="text-lg font-semibold">
                  <span className="text-[#FFC36A] text-4xl font-normal">95%</span><br />
                  <span className="text-[#cecece] font-normal text-2xl mt-2">of Users Report Less Financial Stress</span>
                </h3>
                <p className="text-gray-400 text-md font-bold mt-[50px]">
                  With real-time tracking and personalized financial insights, all our users experience greater peace of mind with their finances.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="relative bg-white p-6 rounded-xl overflow-hidden">
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  backgroundImage: "url('/dots.jpg')",
                  backgroundRepeat: 'repeat',
                  backgroundSize: '38.5px',
                  opacity: 0.2,
                  maskImage: "linear-gradient(to right, transparent 40%, black 150%, black 100%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%, black 100%)",
                }}
              ></div>
              <div className="relative z-10 flex flex-col gap-5 text-start">
                <h3 className="text-lg font-semibold">
                  <span className="text-[#B742BD] text-4xl font-normal">2.8M +</span><br />
                  <span className="text-[#cecece] font-normal text-2xl mt-2">Transactions Tracked</span>
                </h3>
                <p className="text-gray-400 text-md font-bold mt-[50px]">
                  Payble has helped users monitor over a million transactions, giving them full visibility and control over their spending habits.
                </p>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Label */}
          <div className="inline-block mb-4 px-3 py-1 text-sm rounded-full bg-green-50 text-green-700 border border-green-100">
            • Financial Roadblocks
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold mb-3">
            Struggle Financial Situations?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16">
            We get it. Payble simplifies the process of tracking, budgeting, and saving, so you can stress less.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Problems */}
            <div className="bg-[#FAFAFA] rounded-xl p-6 text-left relative shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-md font-semibold text-black">Problems</h3>
                <div className="flex space-x-2 text-red-500 gap-4">

                  <CreditCard size={20} />
                  <Wallet size={20} />
                  <BookText size={20} />
                </div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>Struggling to track all your expenses in one place?</li>
                <li><span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>Overspending without realizing it?</li>
                <li><span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>Difficult to save for long-term goals?</li>
              </ul>
              <ArrowRight className="absolute right-[-22px] top-1/2 transform -translate-y-1/2 text-[#000] bg-white rounded-full shadow-lg" size={40} />
            </div>

            {/* Handle */}
            <div className="bg-[#FAFAFA] rounded-xl p-6 text-left relative shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-md font-semibold text-black">Handle</h3>
                <div className="flex space-x-2 text-blue-500 gap-4">
                  <Calendar size={20} className="text-blue-500" />
                  <CreditCard size={20} className="text-orange-500" />
                  <ClipboardList size={20} className="text-green-500" />
                </div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Managing multiple accounts can feel overwhelming.</li>
                <li><span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Without real-time updates, it’s easy to lose track of spending.</li>
                <li><span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Saving for long-term goals requires consistency and planning.</li>
              </ul>
              <ArrowRight className="absolute right-[-22px] top-1/2 transform -translate-y-1/2 text-[#000] bg-white rounded-full shadow-lg" size={40} />
            </div>

            {/* Solutions */}
            <div className="bg-[#FAFAFA] rounded-xl p-6 text-left relative shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-md font-semibold text-black">Solutions</h3>
                <div className="flex space-x-2 text-green-500 gap-4">
                  <PiggyBank size={20} />
                  <Bell size={20} className="text-purple-500" />
                  <ClipboardList size={20} className="text-blue-500" />
                </div>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>Payble integrates all your accounts in one dashboard.</li>
                <li><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>Receive real-time alerts when you’re approaching your budget limits.</li>
                <li><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>Set custom savings goals and let AI automate the path to reaching them.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div> <FeatureCards /></div>
      <div> <MultiAccount /></div>
      <div> <Batch /></div>
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Optimize Your Savings Journey</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether it’s a vacation or an emergency fund, we’ll help you get there faster.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-blue-50 p-6 rounded-xl shadow-sm" style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'transparent',
              backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, rgb(229, 243, 255) 1px)
    `,
              backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
              backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
              borderRadius: '12px',
            }}>
              <div className="bg-[url('/main.png')] bg-contain bg-center bg-no-repeat h-[300px] w-[350px]"></div>
              <h3 className="font-semibold text-lg">Savings Goals</h3>
              <p className="text-sm text-gray-600">Set, track, and achieve your financial goals with ease.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-green-50 p-6 rounded-xl shadow-sm" style={{
              backgroundColor: "transparent",
              backgroundImage: `
      linear-gradient(rgba(255,255,255,0.8) 2px, transparent 2px),
      linear-gradient(90deg, rgba(255,255,255,0.8) 2px, transparent 2px),
      linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.8) 1px, rgb(237,248,236) 1px)
    `,
              backgroundPosition: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",
              backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
            }}>
              <div className="bg-[url('/text.png')] bg-contain bg-center bg-no-repeat h-[300px] w-[350px]"></div>
              <h3 className="font-semibold text-lg">AI Savings Recommendations</h3>
              <p className="text-sm text-gray-600">Get personalized insights to boost your savings.</p>
            </div>

            {/* Card 3 */}
            <div
              className="relative bg-orange-50 p-6 rounded-xl shadow-sm w-100 h-[420px] flex flex-col items-center justify-between"
              style={{
                backgroundColor: 'transparent',
                backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, rgb(255, 245, 229) 1px)
    `,
                backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
                backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
              }}
            >
              {/* Outer Circle */}
              <div className="relative w-48 h-48" style={{
                backgroundColor: 'rgba(255, 153, 0, 0.05)',
                borderRadius: '240px',
                transform: 'translate(-3%, 23%)',
                transformOrigin: '50% 50% 0px',
                opacity: 1,
              }}
              >
                {/* Center Piggy Bank */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 8a3 3 0 016 0v1h1a3 3 0 012.995 2.824L15 12a3 3 0 01-3 3h-1a3 3 0 01-3-3v-1a3 3 0 01-3-3z" />
                    </svg>
                  </div>
                  <div className="text-xs font-bold text-gray-600 bg-[#fff] p-2 rounded-full w-[60px]">+$25.50</div>
                </div>

                {/* Top Left */}

                <div className="absolute -top-6 -left-4 flex flex-col items-center">
                  <div className="rounded-full p-2 bg-white" style={{ border: '2px solid #D0E3BB' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      className="w-6 h-6 text-green-600"
                    >
                      <g opacity="0.2">
                        <path d="M232,88,216.93,201.06A8,8,0,0,1,209,208H47a8,8,0,0,1-7.93-6.94L24,88Z" />
                      </g>
                      <path d="M136,120v56a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm36.84-.8-5.6,56A8,8,0,0,0,174.4,184a7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.95-7.2l5.6-56a8,8,0,0,0-15.92-1.6Zm-89.68,0a8,8,0,0,0-15.92,1.6l5.6,56a8,8,0,0,0,8,7.2,7.32,7.32,0,0,0,.81,0,8,8,0,0,0,7.16-8.76ZM239.93,89.06,224.86,202.12A16.06,16.06,0,0,1,209,216H47a16.06,16.06,0,0,1-15.86-13.88L16.07,89.06A8,8,0,0,1,24,80H68.37L122,18.73a8,8,0,0,1,12,0L187.63,80H232a8,8,0,0,1,7.93,9.06ZM89.63,80h76.74L128,36.15ZM222.86,96H33.14L47,200H209Z" />
                    </svg>

                  </div>
                  <div className="text-xs font-bold text-gray-600 bg-[#fff] p-2 rounded-full w-[60px]">-$0.75</div>
                </div>
                <div className="absolute -bottom-4 -left-4 flex flex-col items-center">
                  <div className="rounded-full p-2 bg-white" style={{ border: '2px solid #87B4E2' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      className="w-6 h-6 text-blue-500"
                    >
                      <g opacity="0.2">
                        <path d="M168,56V216H56V56A16,16,0,0,1,72,40h80A16,16,0,0,1,168,56Z" />
                      </g>
                      <path d="M241,69.66,221.66,50.34a8,8,0,0,0-11.32,11.32L229.66,81A8,8,0,0,1,232,86.63V168a8,8,0,0,1-16,0V128a24,24,0,0,0-24-24H176V56a24,24,0,0,0-24-24H72A24,24,0,0,0,48,56V208H32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16H176V120h16a8,8,0,0,1,8,8v40a24,24,0,0,0,48,0V86.63A23.85,23.85,0,0,0,241,69.66ZM64,208V56a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V208Zm80-96a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,112Z" />
                    </svg>

                  </div>
                  <div className="text-xs font-bold text-gray-600 bg-[#fff] p-2 rounded-full w-[60px]">-$1.25</div>
                </div>

                {/* Bottom Right – Optional 4th */}
                <div className="absolute -bottom-4 -right-4 flex flex-col items-center">
                  <div className="rounded-full p-2 bg-white" style={{ border: '2px solid #F5CDD1' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      className="w-6 h-6 text-purple-500"
                    >
                      <g opacity="0.2">
                        <path d="M208,88v48a88,88,0,0,1-51.3,80H83.3A88,88,0,0,1,32,136V88Z" />
                      </g>
                      <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z" />
                    </svg>

                  </div>
                  <div className="text-xs font-bold text-gray-600 bg-[#fff] p-2 rounded-full w-[60px]">-$0.60</div>
                </div>
              </div>

              {/* Title and Description */}
              <div className="text-center mt-6">
                <h3 className="font-semibold text-lg text-gray-800">Round-Up Savings</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Save small amounts automatically with every purchase.
                </p>
              </div>
            </div>




            {/* Optional Empty / Placeholder */}
            <div></div>
          </div>
          <div className="flex gap-5">
            {/* Card 4 */}
            <div className="bg-blue-100 p-6 rounded-xl shadow-sm w-full" style={{
              backgroundColor: 'transparent',
              backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, rgb(250, 250, 250) 1px)
    `,
              backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
              backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
            }}>
              <div className="bg-[url('/carts.png')] bg-contain bg-center bg-no-repeat h-[300px] w-[500px]"></div>
              <h3 className="font-semibold text-lg">Automated Savings Transfers</h3>
              <p className="text-sm text-gray-600">Automate your savings for stress-free financial growth.</p>
            </div>

            {/* Card 5 */}
            <div className="bg-purple-100 p-6 rounded-xl shadow-sm w-full" style={{
              backgroundColor: 'transparent',
              backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.8) 2px, transparent 2px),
      linear-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.8) 1px, rgb(248, 236, 248) 1px)
    `,
              backgroundPosition: '-2px -2px, -2px -2px, -1px -1px, -1px -1px',
              backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
            }}>
              <div className="bg-[url('/charted.png')] bg-contain bg-center bg-no-repeat h-[300px] w-[600px]"></div>
              <h3 className="font-semibold text-lg">Goal Progress Tracking</h3>
              <p className="text-sm text-gray-600">Watch your savings grow with real-time progress updates.</p>
            </div>
          </div>
        </div>
      </section>

     {/* alert */}
     <Notification/>



      {/* Why Choose Us Section */}
      <section
        id="why-choose"
        className="py-20 relative"
        style={{ backgroundColor: "#aac8ce" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#144a6c" }}
            >
              Why Choose ClinicCare?
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#4e758d" }}
            >
              Experience the difference with our industry-leading healthcare
              management platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12" />,
                title: "Award Winning",
                description:
                  "Recognized as the best clinic management system for 3 consecutive years",
              },
              {
                icon: <UserCheck className="h-12 w-12" />,
                title: "Expert Support",
                description:
                  "24/7 dedicated support team with healthcare industry expertise",
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Lightning Fast",
                description:
                  "Optimized performance with 99.9% uptime guarantee",
              },
              {
                icon: <Shield className="h-12 w-12" />,
                title: "Secure & Compliant",
                description:
                  "Bank-level security with full HIPAA compliance certification",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div
                  className="inline-flex p-4 rounded-full mb-4"
                  style={{ backgroundColor: "#144a6c" }}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "#144a6c" }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "#4e758d" }}>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              className="px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105"
              style={{ backgroundColor: "#144a6c" }}
            >
              Start Your Free Trial Today
              <ChevronRight className="inline-block ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16"
          >
            <path
              d="M0,120 C300,0 900,0 1200,120 L1200,120 L0,120 Z"
              fill="#cee5e4"
            ></path>
          </svg>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#144a6c" }}
            >
              Choose Your Plan
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto mb-8"
              style={{ color: "#4e758d" }}
            >
              Flexible pricing options designed to grow with your practice
            </p>

            {/* Pricing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span
                className={`mr-3 ${!isYearly ? "font-semibold" : ""}`}
                style={{ color: isYearly ? "#4e758d" : "#144a6c" }}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  \focus:ring-[#144a6c]"
                style={{
                  backgroundColor: isYearly ? "#144a6c" : "#cee5e4",

                }}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isYearly ? "translate-x-6" : "translate-x-1"
                    }`}
                />
              </button>
              <span
                className={`ml-3 ${isYearly ? "font-semibold" : ""}`}
                style={{ color: isYearly ? "#144a6c" : "#4e758d" }}
              >
                Yearly
                <span
                  className="ml-1 text-sm px-2 py-1 rounded-full text-white"
                  style={{ backgroundColor: "#144a6c" }}
                >
                  Save 20%
                </span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300"
              style={{ borderColor: "#cee5e4" }}
            >
              <div className="text-center mb-8">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#144a6c" }}
                >
                  Basic
                </h3>
                <p className="mb-4" style={{ color: "#4e758d" }}>
                  Perfect for small clinics
                </p>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#144a6c" }}
                >
                  ${isYearly ? "39" : "49"}
                  <span
                    className="text-lg font-normal"
                    style={{ color: "#4e758d" }}
                  >
                    /{isYearly ? "month" : "month"}
                  </span>
                </div>
                {isYearly && (
                  <p className="text-sm" style={{ color: "#4e758d" }}>
                    Billed annually (${39 * 12}/year)
                  </p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Up to 100 patients",
                  "Basic appointment scheduling",
                  "Patient records management",
                  "Email support",
                  "Mobile app access",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check
                      className="h-5 w-5 mr-3"
                      style={{ color: "#144a6c" }}
                    />
                    <span style={{ color: "#4e758d" }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#144a6c" }}
              >
                Select Plane
              </button>
            </div>

            {/* Professional Plan - Featured */}
            <div
              className="bg-white p-8 rounded-2xl shadow-xl border-2 relative hover:shadow-2xl transition-all duration-300 transform scale-105"
              style={{ borderColor: "#144a6c" }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span
                  className="px-4 py-2 text-sm font-semibold text-white rounded-full"
                  style={{ backgroundColor: "#144a6c" }}
                >
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-8">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#144a6c" }}
                >
                  Professional
                </h3>
                <p className="mb-4" style={{ color: "#4e758d" }}>
                  Ideal for growing practices
                </p>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#144a6c" }}
                >
                  ${isYearly ? "79" : "99"}
                  <span
                    className="text-lg font-normal"
                    style={{ color: "#4e758d" }}
                  >
                    /{isYearly ? "month" : "month"}
                  </span>
                </div>
                {isYearly && (
                  <p className="text-sm" style={{ color: "#4e758d" }}>
                    Billed annually (${79 * 12}/year)
                  </p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Up to 500 patients",
                  "Advanced scheduling & reminders",
                  "Complete EHR system",
                  "Billing & invoicing",
                  "Telemedicine integration",
                  "Analytics & reporting",
                  "Priority support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check
                      className="h-5 w-5 mr-3"
                      style={{ color: "#144a6c" }}
                    />
                    <span style={{ color: "#4e758d" }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#144a6c" }}
              >
                Select Plane
              </button>
            </div>

            {/* Enterprise Plan */}
            <div
              className="bg-white p-8 rounded-2xl shadow-lg border-2 hover:shadow-xl transition-all duration-300"
              style={{ borderColor: "#cee5e4" }}
            >
              <div className="text-center mb-8">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "#144a6c" }}
                >
                  Enterprise
                </h3>
                <p className="mb-4" style={{ color: "#4e758d" }}>
                  For large healthcare facilities
                </p>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: "#144a6c" }}
                >
                  ${isYearly ? "159" : "199"}
                  <span
                    className="text-lg font-normal"
                    style={{ color: "#4e758d" }}
                  >
                    /{isYearly ? "month" : "month"}
                  </span>
                </div>
                {isYearly && (
                  <p className="text-sm" style={{ color: "#4e758d" }}>
                    Billed annually (${159 * 12}/year)
                  </p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited patients",
                  "Multi-location support",
                  "Custom integrations",
                  "Advanced analytics",
                  "White-label options",
                  "Dedicated account manager",
                  "24/7 phone support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check
                      className="h-5 w-5 mr-3"
                      style={{ color: "#144a6c" }}
                    />
                    <span style={{ color: "#4e758d" }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="w-full px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: "#144a6c" }}
              >
                Select Plane
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-4" style={{ color: "#4e758d" }}>
              All plans include free setup, training, and data migration
            </p>
            <button
              className="px-8 py-3 text-lg font-semibold rounded-lg border-2 transition-all duration-200 hover:opacity-80"
              style={{
                color: "#144a6c",
                borderColor: "#144a6c",
                backgroundColor: "transparent",
              }}
            >
              Compare All Features
            </button>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section
        id="contact"
        className="py-20 relative"
        style={{ backgroundColor: "#cee5e4" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#144a6c" }}
            >
              Contact Us
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#4e758d" }}
            >
              Ready to transform your clinic? Get in touch with our team today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3
                className="text-2xl font-bold mb-8"
                style={{ color: "#144a6c" }}
              >
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: "#144a6c" }}
                  >
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: "#144a6c" }}>
                      Phone
                    </div>
                    <div style={{ color: "#4e758d" }}>+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: "#144a6c" }}
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: "#144a6c" }}>
                      Email
                    </div>
                    <div style={{ color: "#4e758d" }}>info@cliniccare.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: "#144a6c" }}
                  >
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: "#144a6c" }}>
                      Address
                    </div>
                    <div style={{ color: "#4e758d" }}>
                      123 Healthcare Ave, Medical District, NY 10001
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div
                    className="p-3 rounded-lg mr-4"
                    style={{ backgroundColor: "#144a6c" }}
                  >
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: "#144a6c" }}>
                      Business Hours
                    </div>
                    <div style={{ color: "#4e758d" }}>
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#144a6c" }}
              >
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#144a6c" }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2  focus:ring-[#144a6c]"
                      style={{
                        borderColor: "#cee5e4",

                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: "#144a6c" }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2  focus:ring-[#144a6c]"
                      style={{
                        borderColor: "#cee5e4",

                      }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#144a6c" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2  focus:ring-[#144a6c]"
                    style={{
                      borderColor: "#cee5e4",

                    }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#144a6c" }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2  focus:ring-[#144a6c]"
                    style={{
                      borderColor: "#cee5e4",

                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#144a6c" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "#144a6c" }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Clinic?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of healthcare providers who trust our platform to
            manage their practice efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105"
              style={{
                backgroundColor: "#cee5e4",
                color: "#144a6c",
              }}
            >
              Start Your Free Trial
              <ChevronRight className="inline-block ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 text-lg font-semibold text-white rounded-lg border-2 border-white transition-all duration-200 hover:bg-white hover:text-blue-900">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#144a6c" }}
              >
                ClinicCare
              </h3>
              <p className="mb-4" style={{ color: "#4e758d" }}>
                The most trusted clinic management system for healthcare
                providers worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <Phone
                    className="h-5 w-5 mr-2"
                    style={{ color: "#144a6c" }}
                  />
                  <span style={{ color: "#4e758d" }}>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#144a6c" }}>
                Product
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:opacity-80"
                    style={{ color: "#4e758d" }}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-80"
                    style={{ color: "#4e758d" }}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-80"
                    style={{ color: "#4e758d" }}
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-80"
                    style={{ color: "#4e758d" }}
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ color: "#144a6c" }}>
                Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:opacity-80"
                    style={{ color: "#4e758d" }}
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-80"
                    style={{ color: "#4e758d" }}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-80"
                    style={{ color: "#4e758d" }}
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:opacity-80"
                    style={{ color: "#4e758d" }}
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p style={{ color: "#4e758d" }}>
              © 2024 ClinicCare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
