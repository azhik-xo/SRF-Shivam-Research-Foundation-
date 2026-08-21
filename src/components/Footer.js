import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Top Section - White Background */}
      <div className="bg-white py-16 px-4 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="relative w-20 h-20 mb-6">
          <Image
            src="/images/nav/logo_sub.png" // Replace with your actual logo path
            alt="Sivam Research Foundation Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Let&apos;s Stay Connected
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed mb-8">
          Together, we can build a society where mental health is valued, stigma
          is eliminated, and every individual has the opportunity to live a
          healthy, meaningful, and fulfilling life.
        </p>

        {/* Connect Button */}
        <Link
          href="https://wa.me/your-number-here" // Replace with actual WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#1f7456] text-[#1f7456] font-medium hover:bg-[#1f7456] hover:text-white transition-colors duration-300">
            {/* WhatsApp SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            Connect Us
          </button>
        </Link>
      </div>

      {/* Bottom Section - Dark Green Background */}
      <div className="bg-[#114532] px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-[#1d6b4f] pt-6">
          {/* Copyright & Admin Link */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <p className="text-gray-200 text-sm">
              © 2026 Sivam Research Foundation. All rights reserved.
            </p>
            <span className="text-gray-500">•</span>
            <Link
              href="/admin"
              className="text-gray-400 hover:text-white text-xs transition-colors"
            >
              Admin Portal
            </Link>
          </div>

          {/* Email */}
          <a
            href="mailto:sivamresearchfoundation@gmail.com"
            className="text-gray-200 text-sm hover:text-white transition-colors duration-300"
          >
            sivamresearchfoundation@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
