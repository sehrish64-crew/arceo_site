import Image from "next/image";

export default function ClinicCard() {
  return (
    <div className="overflow-hidden">
      {/* Banner Section */}
      <div className="relative rounded-xl overflow-hidden w-full h-[281px]">
        {/* Background Image */}
        <Image
          src="/banners.png"
          alt="Clear Smile Banner"
          layout="fill"
          objectFit="cover"
        />

        {/* Gradient Overlay from left to right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        {/* Text content (still on the left) */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center px-6 py-4 w-[50%] pl-10">
          <h2 className="text-white text-5xl font-normal leading-tight">
            Clear Smile <br /> Dentistry
          </h2>
          <p className="text-white mt-2">Package 1</p>
          <button className="mt-4 bg-[#144A6C] hover:bg-[#144A6C] text-white px-4 py-2 rounded-lg w-max">
            Update Package
          </button>
        </div>

        {/* Right-aligned logo */}
        <div className="absolute bottom-[40px] right-9">
          <Image
            src="/big.png"
            alt="Clinic Logo"
            width={200}
            height={200}
            className="rounded-full border-4 border-white"
          />
        </div>
      </div>
    </div>
  );
}
