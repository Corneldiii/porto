import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-white px-5">
      <h1 className="text-[150px] md:text-[250px] font-extrabold leading-none text-[#FF4A11]">404</h1>
      <p className="text-lg md:text-2xl text-gray-400 mt-4 mb-8 text-center">
        Halaman tidak ditemukan
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF4A11] text-white font-semibold hover:bg-[#e0400f] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Kembali ke Beranda
      </Link>
    </div>
  );
}
