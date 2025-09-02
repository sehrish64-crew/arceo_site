import Image from "next/image"
import Head from "next/head"
import { useState } from "react"
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async e => {
    e.preventDefault()
    await router.push("/")
  }

  return (
    <>
      <Head>
        <title>Login - Arceo</title>
      </Head>

      {/* Outer wrapper with padding and background */}
      <div className="min-h-screen p-4 overflow-hidden">
        {/* Card-style login container with rounded corners */}
        <div className="flex h-[calc(100vh-30px)] overflow-hidden rounded-2xl bg-white">
          {/* Left: Login Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 md:px-24 bg-white">
            <div className="w-full max-w-md">
              <div className="text-center">
                <div className="flex justify-center">
                  <Image
                    src="/Frame.png"
                    alt="Dental Society Logo"
                    width={200}
                    height={100}
                    className="object-contain"
                    priority
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <h1 className="text-2xl font-semibold text-[#144A6C] mt-6">
                  Welcome back
                </h1>
                <p className="text-sm text-gray-500 mt-2">
                  Welcome back! Please enter your details.
                </p>
              </div>

              <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
                <div>
                  <label className="text-[#939393]">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="text-[#939393]">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full mt-1 px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute bottom-3 right-3 text-gray-500 z-10"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <label className="flex items-center text-[#939393]">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </label>
                  <a href="#" className="text-[#939393] hover:underline">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#144A6C] text-white py-3 rounded-lg font-semibold"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>

          {/* Right: Background Image with Quote */}
          <div className="hidden lg:block relative w-1/2 h-auto">
            <Image
              // Make sure this image exists in /public
              src="/bg-img.jpg"
              alt="Dental"
              fill
              className="object-cover rounded-r-2xl"
              priority
            />

            {/* Blurred overlay text box */}
            <div
              className="absolute bottom-6 left-6 right-6 bg-white/30 text-[#fff] p-6 rounded-xl"
              style={{ backdropFilter: "blur(24px)" }}
            >
              <p className="text-3xl font-medium text-center">
                "A healthy smile is more than just beauty — it’s a reflection of
                good health, self-care, and the confidence to share your joy
                with the world."
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
